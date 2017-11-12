<?php
require("a365_buzon_dbconnect_vicidial.php");
require("a365_buzon_dbconnect_buzon.php");

$fechaactual=date('Y-m-d');
$var_fecha_ini= date("Y-m-d", strtotime("$fechaactual"));
$var_fecha_fin= date("Y-m-d", strtotime("$fechaactual -40 day"));
//$fechaactual='2017-02-15';

function asignar_menor($db_link_aape,$var_fecha_ini,$var_fecha_fin){

	//USUARIOS VICIDIAL
	$sql_vicidial= "SELECT USER FROM `vicidial_live_agents`  WHERE campaign_id='CLBUWEB';";
	$query_vicidial= mysql_query($sql_vicidial);
	echo (!$query_vicidial)?die('Consulta no v�lida vicidial: ' . mysql_error()):"";

	//USUARIOS BUZON
	$sql_buzon="SELECT usr_vicidial FROM a365_buzon_usuario WHERE id_tipo_usuario=3";
	$query_buzon=pg_query($db_link_aape,$sql_buzon);
	echo (!$query_buzon)?die('Consulta no v�lida usuarios buzon: ' . pg_last_error()):"";

	$user_vicidial = array();
	$user_buzon = array();
	$registros = array();
	$usr_listos= array();

	while ($fila = mysql_fetch_array($query_vicidial)) {
		$user_vicidial[]=trim($fila['USER']);
	}

	while ($buzon = pg_fetch_array($query_buzon)) {
		$user_buzon[]= trim($buzon['usr_vicidial']);
	}


	$res = array_intersect($user_vicidial, $user_buzon);
	$result = array_values($res);
	$longitud = count($result);

	/* *************************USUARIOS ASIGNADOS******************** */
	$sq_asignado="SELECT sp_a365_buzon_idpropiertario(id_buzon_consulta) as user_propietario,count(*) as cantidad FROM a365_buzon_consulta
		  WHERE id_buzon_consulta IN ((SELECT DISTINCT(id_buzon_consulta) FROM a365_buzon_consulta_bitacora
		  WHERE DATE(fecha_registro) BETWEEN '$var_fecha_fin' AND '$var_fecha_ini' AND id_buzon_consulta NOT IN
		  ((select id_buzon_consulta FROM a365_buzon_consulta_bitacora WHERE id_buzon_estado_consulta=6))
		  AND usr_propietario!='')) GROUP BY 1";

	$query_asignado=pg_query($db_link_aape,$sq_asignado);
	echo (!$query_asignado)?die('Consulta no v�lida: ' . pg_last_error()):"";
	$var_nro_registros=pg_num_rows($query_asignado);

	$var_seg_estado="AND id_buzon_usuario  NOT IN (";

	for($i=0;$i<$var_nro_registros;$i++){
		$fetch = pg_fetch_array($query_asignado);
		$asignados = trim($fetch['user_propietario']);
		$var_seg_estado=$var_seg_estado."'$asignados'".",";
	}

	$var_seg_estado=$var_seg_estado."'')";

	$sql_no_asignado="SELECT id_buzon_usuario,0 as cantidad FROM a365_buzon_usuario
	WHERE id_tipo_usuario=3 $var_seg_estado";


	//USUARIOS CONECTADOS EN EL SISTEMA BUZON
	for($i=0; $i<$longitud; $i++){
		$sql_all_usrs="SELECT user_propietario,cantidad FROM (".$sq_asignado." UNION ALL ".$sql_no_asignado." ORDER BY 2 DESC)
		AS A WHERE user_propietario ilike ('%$result[$i]%') AND cantidad<=20";
		$query_final_conectados=pg_query($db_link_aape,$sql_all_usrs);
		echo (!$query_final_conectados)?die('Consulta no v�lida: ' . pg_last_error()):"";

		while ($usr_ready = pg_fetch_array($query_final_conectados)) {

			$propietario = trim($usr_ready['user_propietario']);
			$cantidad = trim($usr_ready['cantidad']);
			$usr_listos[$propietario]= $cantidad;
			//$usr_listos[$cantidad]= $propietario;
		}
	}
	$minimo_valor=min($usr_listos);
    $valor_array = array_search($minimo_valor, $usr_listos);
    return $valor_array;
	
}


$sql_registros="SELECT bc.id_buzon_consulta as idconsulta FROM a365_buzon_consulta bc INNER JOIN a365_buzon_consulta_bitacora bcb ON
				bc.id_buzon_consulta=bcb.id_buzon_consulta WHERE
				(SELECT count(*) FROM a365_buzon_consulta_bitacora WHERE id_buzon_consulta=bc.id_buzon_consulta)<2 ORDER BY 1 ASC ";

$query_registro=pg_query($db_link_aape,$sql_registros);
echo (!$query_registro)?die('Consulta no v�lida: ' . pg_last_error()):"";
$nregistro=pg_num_rows($query_registro);

if($nregistro>0){
	/* echo asignar_menor($db_link_aape,$var_fecha_ini,$var_fecha_fin);
	exit; */
	while ($id = pg_fetch_array($query_registro)) {
		$registro_id = $id['idconsulta'];
		$valor=asignar_menor($db_link_aape,$var_fecha_ini,$var_fecha_fin);

		$sql_insert="INSERT INTO a365_buzon_consulta_bitacora(id_buzon_consulta,id_buzon_estado_consulta,
					 id_buzon_motivo_consulta,observaciones,id_usr_registro,ip_usr_registro,usr_propietario)
					 VALUES($registro_id,5,2,'ASIGNADO SISTEMAS','sistemas','192.168.121.21','$valor')";
		$query_insert=pg_query($db_link_aape,$sql_insert);
		echo (!$query_insert)?die('Registro no valido: ' . pg_last_error()):"";
	}
}
else{
	echo "NO HAY REGISTROS PARA ASIGNAR";
}

?>
