<?php
class panelModel extends Model {
	public function __construct() {
		parent::__construct ();
	}
	
	public function getDocumento(){
		$sql = "SELECT id_buzon_tipo_doc,descripcion FROM a365_buzon_tipo_documento WHERE id_buzon_tipo_doc<=3 ORDER BY 1 asc";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getEstado(){
		$sql = "SELECT id_buzon_estado_consulta,descripcion FROM a365_buzon_estado_consulta WHERE id_buzon_estado_consulta NOT IN(1,5) AND flg_activo='t'";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getMotivo($estado){
		$sql = "SELECT id_buzon_motivo_consulta,descripcion FROM a365_buzon_motivo_consulta WHERE id_buzon_estado_consulta=:id AND flg_activo='t'";
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$estado));
		return $prod;
	}

	public function getConsulta($tipo_usuario,$user,$var_fecha_actual,$fecha_ini){

		if($tipo_usuario=='ADMINISTRADOR'){
			$consulta="date(bc.fecha_registro)='$var_fecha_actual'";
		}
		else if($tipo_usuario=='SUPERVISOR' ){
			$consulta="date(bc.fecha_registro)='$var_fecha_actual' AND sp_a365_buzon_estadoconsulta(bc.id_buzon_consulta)!=6";
		}
		else if($tipo_usuario=='AGENTE'){
			$consulta="date(bc.fecha_registro) BETWEEN '$fecha_ini' AND '$var_fecha_actual' AND
						sp_a365_buzon_idpropiertario(bc.id_buzon_consulta) like '%$user%' AND sp_a365_buzon_estadoconsulta(bc.id_buzon_consulta)!=6";
		}
		else if($tipo_usuario=='VENDEDOR'){
			$consulta="id_usr_registro='$user' AND date(bc.fecha_registro)='$var_fecha_actual'";
		}
		
		$sql = "SELECT bc.id_buzon_consulta,
				bto.descripcion AS tipo_operacion,
				bmv.descripcion as modalidad,
				bc.id_tipo_operacion as idtipooperacion,
				bc.id_modalidad_venta as idmodalidadventa,
				(select nro_documento from a365_buzon_usuario  where id_buzon_usuario=bc.id_usr_registro) as dni,
				(select nombres||' '||apellidos from a365_buzon_usuario  where id_buzon_usuario=bc.id_usr_registro) as vendedor,
				nombres||' '||ap_paterno||' '||ap_materno as nombres, 
				btd.descripcion AS tipo_documento,
				btd.id_buzon_tipo_doc AS iddocumento,
				precio,
				sec,
				fecha_sec,
				nro_documento,
				fecha_nacimiento,
				nro_referencia,
				sp_a365_buzon_estadoconsulta_detalle(sp_a365_buzon_estadoconsulta(bc.id_buzon_consulta)) as estado,
				sp_a365_buzon_motivoconsulta(bc.id_buzon_consulta) AS motivo,
				bc.id_buzon_consulta AS opciones
				FROM a365_buzon_consulta bc INNER JOIN a365_buzon_tipo_documento btd ON
				bc.id_tipo_documento=btd.id_buzon_tipo_doc INNER JOIN a365_buzon_tipo_operacion bto ON
				bc.id_tipo_operacion=bto.id_buzon_tipo_operacion INNER JOIN a365_buzon_modalidad_venta bmv ON
   				bc.id_modalidad_venta=bmv.id_buzon_modalidad_venta
				WHERE $consulta ";
		
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		$result=$prod->fetchAll(PDO::FETCH_ASSOC);
		return $result;
	}
	
	public function getConsultasPlanes($idbuzon){
	
	
		$sql = "SELECT
				clbc.descripcion AS campania,
				btp.descripcion AS tipo_plazo,
				btf.descripcion AS tipo_familia,
				clbt.descripcion AS tipo_plan,
				clbp.descripcion AS equipos,
				btc.descripcion AS tipo_consumo,
				bcxp.cuota AS cuota,
				bcxp.telefono AS telefono,
				bcxp.modalidad AS modalidad,
				bo.descripcion AS operador,
				id_buzon_a365_buzon_consultaxplan as opciones
				FROM a365_buzon_consultaxplan bcxp INNER JOIN aai_clbkofi_campania clbc ON
				bcxp.id_campania=clbc.id_clbkofi_campania INNER JOIN a365_buzon_tipo_plazo btp ON
				bcxp.id_tipo_plazo=btp.id_buzon_tipo_plazo LEFT JOIN aai_clbkofi_tipo_plan clbt ON
				bcxp.id_tipo_plan=clbt.id_clbkofi_tipo_plan LEFT JOIN aai_clbkofi_productos clbp ON
				bcxp.id_producto=clbp.id_clbkofi_producto LEFT JOIN a365_buzon_tipo_consumo btc ON
				bcxp.id_tipo_consumo=btc.id_buzon_tipo_consumo LEFT JOIN a365_buzon_operador bo ON
				bcxp.id_operador=bo.id_buzon_operador INNER JOIN a365_buzon_tipo_familia btf ON
				bcxp.id_tipo_familia=btf.id_buzon_tipo_familia
				WHERE id_buzon_consulta=$idbuzon";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		$result=$prod->fetchAll(PDO::FETCH_ASSOC);
		return $result;
	}
	
	public function getUpdateBuzon($idbuzon,$tipo_documento,$nro_documento,$nro_referencia,$precio,
					$sec,$fecha_sec,$fecha_nacimiento){				
		
	    $sql_update = "UPDATE a365_buzon_consulta SET fecha_nacimiento = :nacimiento,
	    											  id_tipo_documento = :tipo_doc,
	    											  nro_documento = :nrodoc, 
	    											  nro_referencia = :nroref,
	    											  precio = :precio,
	    											  sec = :sec,
	    											  fecha_sec = :fechasec 
					   							WHERE id_buzon_consulta = :idbuzon";
		
		$prod = $this->_db->prepare($sql_update);
			
		$prod->execute(array(':nacimiento'=> $fecha_nacimiento,
							':tipo_doc'=> $tipo_documento,
							':nrodoc'=> $nro_documento,
				    		':nroref'=> $nro_referencia,
						    ':precio'=> $precio,
							':sec'=> $sec,
							':fechasec'=> $fecha_sec,
							':idbuzon'=>$idbuzon));
		
		$arr = $prod->errorInfo();
		//print_r($arr);
		
		return $arr;

		/* if($this->_db->errno){
			return false;
		}else{
			return true;
		} */
		
	}
	
	public function getBitacora($idbuzon){
	
		$sql = "SELECT bcb.nro_movimiento,
				bcb.fecha_registro,
				bcb.id_usr_registro,
				bec.descripcion AS estado, 
				bvc.descripcion AS motivo,
				bcb.usr_propietario AS propietario,
				bcb.observaciones
				FROM a365_buzon_consulta_bitacora bcb INNER JOIN a365_buzon_estado_consulta bec
				ON bcb.id_buzon_estado_consulta=bec.id_buzon_estado_consulta 
				INNER JOIN a365_buzon_motivo_consulta bvc ON
				bcb.id_buzon_motivo_consulta=bvc.id_buzon_motivo_consulta
				where id_buzon_consulta=$idbuzon";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		$result=$prod->fetchAll(PDO::FETCH_ASSOC);
		return $result;
	}
	
	public function getInsertBitacora($idbuzon,$estado_consulta,$motivo_consulta,$observaciones,$iduser,$ip_usr){
		
		$sql = "INSERT INTO a365_buzon_consulta_bitacora(id_buzon_consulta,id_buzon_estado_consulta,id_buzon_motivo_consulta,
				observaciones,id_usr_registro,ip_usr_registro) VALUES(:id_buzon_consulta,:id_buzon_estado_consulta,
				:id_buzon_motivo_consulta,:observaciones,:id_usr_registro,:ip_usr_registro)";
		$prod = $this->_db->prepare($sql);
			
		$prod->execute(array(':id_buzon_consulta'=> $idbuzon,':id_buzon_estado_consulta'=> $estado_consulta,
							 ':id_buzon_motivo_consulta'=> $motivo_consulta,':observaciones'=> $observaciones,
							 ':id_usr_registro'=> $iduser,':ip_usr_registro'=> $ip_usr));
		
		if($this->_db->errno){
			return false;
		}else{
			return true;
		}
	}
	
	public function getConsultaCriterio($tipo_usuario,$user,$criterio,$fecha_inicio,$fecha_fin,$criterios_busqueda){
		
		if($criterio==0){
			$mini_consulta="DATE(bc.fecha_registro) BETWEEN '$fecha_inicio' AND '$fecha_fin'";
		}
		else if($criterio==1){
			$mini_consulta="bc.nro_documento LIKE '%$criterios_busqueda%'";
		}
		else if($criterio==2){
			$mini_consulta="bc.nro_referencia LIKE '%$criterios_busqueda%'";
		}
		else if($criterio==3){
			$mini_consulta="bc.sec LIKE '%$criterios_busqueda%'";
		}
		else if($criterio==4){
			$mini_consulta="bc.id_buzon_consulta=$criterios_busqueda";
		}
	
		if($tipo_usuario=='ADMINISTRADOR' || $tipo_usuario=='SUPERVISOR' ){
			$consulta="$mini_consulta";
		}
		else if($tipo_usuario=='AGENTE'){
			$consulta="sp_a365_buzon_idpropiertario(bc.id_buzon_consulta) LIKE '%$user%' AND $mini_consulta";
		}
		else if($tipo_usuario=='VENDEDOR'){
			$consulta="id_usr_registro='$user' AND $mini_consulta";
		}
	
		$sql = "SELECT bc.id_buzon_consulta,
				bto.descripcion AS tipo_operacion,
				bmv.descripcion as modalidad,
				bc.id_tipo_operacion as idtipooperacion,
				bc.id_modalidad_venta as idmodalidadventa,
				(select nro_documento from a365_buzon_usuario  where id_buzon_usuario=bc.id_usr_registro) as dni,
				(select nombres||' '||apellidos from a365_buzon_usuario  where id_buzon_usuario=bc.id_usr_registro) as vendedor,
				nombres||' '||ap_paterno||' '||ap_materno as nombres,
				btd.descripcion AS tipo_documento,
				btd.id_buzon_tipo_doc AS iddocumento,
				CASE WHEN precio is null THEN 0 ELSE precio END as precio, 
				sec,
				fecha_sec,
				nro_documento,
				fecha_nacimiento,
				nro_referencia,
				sp_a365_buzon_estadoconsulta_detalle(sp_a365_buzon_estadoconsulta(bc.id_buzon_consulta)) as estado,
				sp_a365_buzon_motivoconsulta(bc.id_buzon_consulta) AS motivo,
				bc.id_buzon_consulta AS opciones
				FROM a365_buzon_consulta bc INNER JOIN a365_buzon_tipo_documento btd ON
				bc.id_tipo_documento=btd.id_buzon_tipo_doc INNER JOIN a365_buzon_tipo_operacion bto ON
				bc.id_tipo_operacion=bto.id_buzon_tipo_operacion INNER JOIN a365_buzon_modalidad_venta bmv ON
				bc.id_modalidad_venta=bmv.id_buzon_modalidad_venta
				WHERE $consulta";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		$result=$prod->fetchAll(PDO::FETCH_ASSOC);
		return $result;
	}
	
	public function getObservaciones($idbuzon){
		$sql="SELECT observaciones FROM a365_buzon_consulta_bitacora  WHERE id_buzon_consulta=:idbuzon 
			  AND id_buzon_estado_consulta=6";
		
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':idbuzon'=>$idbuzon));
		
		return $prod->fetch();
	}
	
	public function getObservacionesiniciales($idbuzon){
		$sql="SELECT comentarios FROM a365_buzon_consulta  WHERE id_buzon_consulta=:idbuzon";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':idbuzon'=>$idbuzon));
	
		return $prod->fetch();
	}
	
	public function getOcultarpdf($idbuzon){
		$sql="SELECT id_buzon_consulta FROM a365_buzon_archivos WHERE id_buzon_consulta=:idbuzon";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':idbuzon'=>$idbuzon));
	
		return $prod->fetch();
	}
	
}
?>	