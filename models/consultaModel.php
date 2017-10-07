<?php
class consultaModel extends Model {
	public function __construct() {
		parent::__construct ();
	}

	public function getOperacion() {
		$sql = "SELECT id_buzon_tipo_operacion,descripcion FROM a365_buzon_tipo_operacion WHERE flg_activo='t'";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getDocumento(){
		$sql = "SELECT id_buzon_tipo_doc,descripcion FROM a365_buzon_tipo_documento WHERE id_buzon_tipo_doc<=3 ORDER BY 1 asc";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getPlan(){
		$sql = "SELECT id_clbkofi_tipo_plan,descripcion FROM aai_clbkofi_tipo_plan WHERE aai_flg_activo='t'";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getAcuerdo($plazo,$plazo2,$plazo3){
		$sql = "SELECT id_buzon_tipo_plazo,descripcion FROM a365_buzon_tipo_plazo WHERE
				id_buzon_tipo_plazo in (:id,:id2,:id3) AND flg_activo='t' ORDER BY 1 ASC";
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$plazo,':id2'=>$plazo2,':id3'=>$plazo3));
		return $prod;
	}
	
	public function getTope($tope,$tope2,$tope3){
		$sql = "SELECT id_buzon_tipo_consumo,descripcion FROM a365_buzon_tipo_consumo 
				WHERE id_buzon_tipo_consumo IN (:id,:id2,:id3) AND flg_activado='t'";
		
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$tope,':id2'=>$tope2,':id3'=>$tope3));
		return $prod;
	}
	
	public function getCampania($campania,$campania2,$campania3,$campania4,$campania5){
		$sql = "SELECT id_clbkofi_campania,descripcion FROM aai_clbkofi_campania 
				WHERE id_clbkofi_campania in (:id,:id2,:id3,:id4,:id5) AND aai_flg_activo='t' ORDER BY 1 ASC";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$campania,':id2'=>$campania2,':id3'=>$campania3,':id4'=>$campania4,':id5'=>$campania5));
		return $prod;
	}
	
	public function getFamilia(){
		$sql = "SELECT id_buzon_tipo_familia,descripcion FROM a365_buzon_tipo_familia  WHERE flg_activado='t'";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getPlanes($familia) {
		if($familia==1){
			$sql = "SELECT id_clbkofi_tipo_plan, descripcion FROM aai_clbkofi_tipo_plan WHERE aai_flg_activo=TRUE 
					AND descripcion ILIKE '%CLARO MAX%' AND (descripcion NOT ILIKE '%(SF)%' AND descripcion 
					NOT ILIKE '%(SF CHIP)%') ORDER BY 1 ASC";
		}
		else{
			$sql = "SELECT id_clbkofi_tipo_plan, descripcion FROM aai_clbkofi_tipo_plan WHERE aai_flg_activo=TRUE AND 
					(descripcion ILIKE '%(SF)%'OR descripcion ILIKE '%(SF CHIP)%') ORDER BY 1 ASC";
		}
		
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod->fetchAll();
	}
	
	public function getEquipo(){
		$sql = "SELECT id_clbkofi_producto,descripcion FROM aai_clbkofi_productos  WHERE aai_flg_activo='t'";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
/* 	public function getDepartamento(){
		$sql = "SELECT coddpto, nombre FROM aai_base_ubigeo_inei WHERE codprov='00' AND coddist='000' ORDER BY 2";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getProvincias($departamento) {
		$sql = "SELECT codprov, nombre FROM aai_base_ubigeo_inei WHERE coddpto='$departamento' and  codprov!='00' AND coddist='000' ORDER BY 2";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getDistrito($departamento, $provincia) {
		$sql = "SELECT codprov, nombre FROM aai_base_ubigeo_inei WHERE coddpto='$departamento' and  codprov='$provincia' AND coddist!='000' ORDER BY 2";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	} */
	
	public function getModalidad($modalidad_venta){
		
		$sql = "SELECT id_buzon_modalidad_venta,descripcion FROM a365_buzon_modalidad_venta  WHERE 
				flg_activado='t' AND id_buzon_modalidad_venta!=:id ORDER BY 1 ASC";
		
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$modalidad_venta));
		return $prod;
	}
	
	public function getOperador(){
		$sql = "SELECT id_buzon_operador,descripcion FROM a365_buzon_operador  WHERE flg_activo='t' ORDER BY 1 ASC";
		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod;
	}
	
	public function getInsert($nombre,$apellidopat,$apellidomat,$documento,$contacto,$observaciones,
					$iduser,$ip_usr,$tipo_operacion,$tipo_documento,$modalidad,$nacimiento){
		
		if($nacimiento==''){
			$nacimiento=NULL;
		}
		else{
			$nacimiento=date("Y-m-d", strtotime("$nacimiento"));
		}
		
		
		$sql = "INSERT INTO a365_buzon_consulta(nombres,ap_paterno,ap_materno,nro_documento,nro_referencia,comentarios,
			id_usr_registro,ip_usr_registro,id_tipo_operacion,id_tipo_documento,id_modalidad_venta,fecha_nacimiento)
			VALUES(:nombres,:ap_paterno,:ap_materno,:nro_documento,:nro_referencia,:comentarios,:id_usr_registro,:ip_usr_registro,
					:id_tipo_operacion,:id_tipo_documento,:id_modalidad_venta,:fecha_nacimiento)";
		
		/* $sql = "INSERT INTO a365_buzon_consulta(nombres,ap_paterno,ap_materno,nro_documento,nro_referencia,comentarios,
			id_usr_registro,ip_usr_registro,id_tipo_operacion,id_tipo_documento,id_modalidad_venta,fecha_nacimiento)
			VALUES($nombre,$apellidopat,$apellidomat,$documento,$contacto,$observaciones,$iduser,$ip_usr,
					$tipo_operacion,$tipo_documento,$modalidad,$nacimiento)";
		
			echo $sql;
			exit; */
			
		$prod = $this->_db->prepare($sql);
			
		$prod->execute(array(':nombres'=> $nombre,':ap_paterno'=> $apellidopat,':ap_materno'=> $apellidomat,':nro_documento'=> $documento,
				':nro_referencia'=> $contacto,':comentarios'=> $observaciones,':id_usr_registro'=> $iduser,':ip_usr_registro'=> $ip_usr,
				':id_tipo_operacion'=> $tipo_operacion,':id_tipo_documento'=> $tipo_documento,':id_modalidad_venta'=> $modalidad,
				':fecha_nacimiento'=>$nacimiento));
		
		$arr = $prod->errorInfo();
		
		if($arr[0]!='00000'){
			return $arr;
		}
		else{
			return array($arr[0],$this->_db->lastInsertId('a365_buzon_consulta_id_buzon_consulta_seq'));
		}

	}
	
	public function getInsertplan($id_ult,$idcampania,$idplazo,$idfamilia,$idplan,$idproducto,$idtipoconsumo,$cuota,$telefono,
	 							  $idmodalidad_ope,$idoperador,$iduser,$ip_usr){
		
	 	$idproducto=($idproducto=='')?NULL:$idproducto;
	 	$cuota=($cuota=='')?0:$cuota;
	 	$telefono=($telefono=='')?NULL:$telefono;
	 	$idmodalidad_ope=($idmodalidad_ope=='')?NULL:$idmodalidad_ope;
	 	$idoperador=($idoperador=='')?NULL:$idoperador;

	 	
	 	$sql = "INSERT INTO a365_buzon_consultaxplan(id_buzon_consulta,id_campania,id_tipo_plazo,id_tipo_familia,id_tipo_plan,id_producto,id_tipo_consumo,cuota,
				telefono,modalidad,id_operador,id_usr_registro,ip_usr_registro) 
	 			VALUES(:idbuzon,:idcampania,:idplazo,:idfamilia,:idplan,:idproducto,:idtipoconsumo,:cuota,
	 			:telefono,:idmodalidad_ope,:idoperador,:id_usr_registro,:ip_usr_registro)";
	 	
	 	/* $sql = "INSERT INTO a365_buzon_consultaxplan(id_buzon_consulta,id_campania,id_tipo_plazo,id_tipo_familia,id_tipo_plan,id_producto,id_tipo_consumo,cuota,
				telefono,modalidad,id_operador,id_usr_registro,ip_usr_registro) VALUES($id_ult,$idcampania,$idplazo,$idfamilia,
	 	$idplan,$idproducto,$idtipoconsumo,$cuota,$telefono,'$idmodalidad_ope',$idoperador,'$iduser','$ip_usr')";
	 	
	 	echo $sql; */
	 	
	 	$prod = $this->_db->prepare($sql);
	 		
	 	$prod->execute(array(':idbuzon'=>$id_ult,':idcampania'=> $idcampania,':idplazo'=> $idplazo,':idfamilia'=> $idfamilia,':idplan'=> $idplan,
	 			':idproducto'=> $idproducto,':idtipoconsumo'=> $idtipoconsumo,':cuota'=> $cuota,':telefono'=> $telefono,
	 			':idmodalidad_ope'=> $idmodalidad_ope,':idoperador'=> $idoperador,
	 			':id_usr_registro'=> $iduser,':ip_usr_registro'=>$ip_usr));

	 	$arr = $prod->errorInfo();
		return $arr;
	}
	
	public function getInsertbitacora($id_ult,$estado,$motivo,$observaciones_bitacora,$iduser,$ip_usr){
		
		$sql = "INSERT INTO a365_buzon_consulta_bitacora(id_buzon_consulta,id_buzon_estado_consulta,
				id_buzon_motivo_consulta,observaciones,id_usr_registro,ip_usr_registro)
				VALUES(:idbuzon,:idestado,:idmotivo,:observaciones,:id_usr_registro,:ip_usr_registro)";
		
/* 		$sql = "INSERT INTO a365_buzon_consulta_bitacora(id_buzon_consulta,id_buzon_estado_consulta,
				id_buzon_motivo_consulta,observaciones,id_usr_registro,ip_usr_registro)
				VALUES($id_ult,$estado,$motivo,'$observaciones_bitacora','$iduser','$ip_usr')";
		echo $sql;
		exit; */
		
		$prod = $this->_db->prepare($sql);
			
		$prod->execute(array(':idbuzon'=>$id_ult,':idestado'=> $estado,':idmotivo'=> $motivo,':observaciones'=>$observaciones_bitacora,
							 ':id_usr_registro'=> $iduser,':ip_usr_registro'=>$ip_usr));
		
		$arr = $prod->errorInfo();
		return $arr;
		
	}
	
	public function insertError($idconsulta,$id_ult,$iduser,$ip_usr){
	
		$sql = "INSERT INTO a365_buzon_log_error(id_buzon_consulta,nombre_error,id_usr_registro,ip_usr_registro)
				VALUES(:idbuzon,:nombre_error,:id_usr_registro,:ip_usr_registro)";
	
		$prod = $this->_db->prepare($sql);
			
		$prod->execute(array(':idbuzon'=>$idconsulta,':nombre_error'=>$id_ult,':id_usr_registro'=> $iduser,':ip_usr_registro'=>$ip_usr));

	
	}
	
	public function insertArchivo($id_ult,$nombreArchivo, $mime,$iduser,$ip_usr){
	
		$sql = "INSERT INTO a365_buzon_archivos(id_buzon_consulta,nombre_archivo,mime,usr_registro,ip_usr_registro)
				VALUES(:idbuzon,:nombre_archivo,:mime,:id_usr_registro,:ip_usr_registro)";
		
		/* $sql = "INSERT INTO a365_buzon_archivos(id_buzon_consulta,nombre_archivo,mime,archivo,usr_registro,ip_usr_registro)
				VALUES($id_ult,'$nombreArchivo','$mime','$iduser','$ip_usr')"; 
		echo $sql;
		exit;  */
		
		$prod = $this->_db->prepare($sql);
			
		$prod->execute(array(':idbuzon'=>$id_ult,':nombre_archivo'=>$nombreArchivo,':mime'=>$mime,':id_usr_registro'=> $iduser,
							 ':ip_usr_registro'=>$ip_usr));
		
		$arr = $prod->errorInfo();
		
		return $arr;

	}
}
?>	