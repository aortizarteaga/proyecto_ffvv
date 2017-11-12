<?php
class registroModel extends Model {
	public function __construct() {
		parent::__construct ();
	}

	public function getTipousuario(){
		$sql = "SELECT id_buzon_tipo, descripcion FROM `a365_buzon_tipo_usuario` WHERE flg_activo = 'Y' ";

		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod->fetchAll();
	}

	public function getAcceso(){
		$sql = "SELECT id_buzon_pagina,descripcion FROM `a365_buzon_pagina`";

		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod->fetchAll();
	}

	public function getAsociar(){
		$sql = "SELECT id_emision_usuario,id_emision_usuario AS descripcion FROM `gc_emision_usuario` WHERE `id_tipo_usuario`=2";

		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod->fetchAll();
	}

	public function insertarusuario($tipo_documento,$documento,$nombres,$apellidos,
												$telefono1,$telefono2,$direccion,$email,$tipo_usuarios,$usuario,$password,$iduser,$ip_usr){

				$sql_insert = "INSERT INTO `a365_buzon_usuario` SET   id_buzon_usuario ='$usuario',
																															PASSWORD ='$password',
																															id_tipo_usuario ='$tipo_usuarios',
																															nombres ='$nombres',
																															apellidos ='$apellidos',
																															id_tipo_documento ='$tipo_documento',
																															nro_documento='$documento',
																															email='$email',
																															telefono_principal='$telefono1',
																															telefono_secundario='$telefono2',
																															direccion='$direccion',
																															id_usr_registro='$iduser',
																															ip_usr_registro='$ip_usr'";


				$prod = $this->_db->prepare ( $sql_insert );
				$prod->execute ();

				$arr = $prod->errorInfo();

					return $arr;

	}

	public function insertPaginas($paginas,$usuario,$iduser){
		$sql_insert = "INSERT INTO `a365_buzon_usuario_pagina`(`id_buzon_pagina`,`id_buzon_usuario`,
					   `id_usr_registro`) VALUES(:id_buzon_pagina,:id_buzon_usuario,:id_usr_registro)";

		$prod = $this->_db->prepare ( $sql_insert );

		$prod->execute(array(':id_buzon_pagina'=> $paginas,
							':id_buzon_usuario'=> $usuario,
							':id_usr_registro'=>$iduser));

		$arr = $prod->errorInfo ();
		array_push ($arr,$sql_error);
		return $arr;

	}

	public function insertError($idconsulta,$id_ult,$iduser,$ip_usr,$tipo_error,$sql_script){

		$sql = "INSERT INTO gc_emision_log_error(id_emision,nombre_error,id_usr_registro,ip_usr_registro,tipo_error,sql_script)
				VALUES(:idemision,:nombre_error,:id_usr_registro,:ip_usr_registro,:tipo_error,:sql_script)";

		$prod = $this->_db->prepare($sql);

		$prod->execute(array(':idemision'=>$idconsulta,':nombre_error'=>$id_ult,':id_usr_registro'=> $iduser,
				':ip_usr_registro'=>$ip_usr,':tipo_error'=>$tipo_error,':sql_script'=>$sql_script));

	}

	public function findUser($usuario){
		$sql = "SELECT id_emision_usuario FROM gc_emision_usuario WHERE `id_emision_usuario`=:id_usuario";
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id_usuario'=>$usuario));
		return $prod->fetch();
	}

	public function findAgencia($documento_agencia){
		$sql = "SELECT id_emision_agencia FROM `gc_emision_agencia` WHERE `documento`=:id_agencia";
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id_agencia'=>$documento_agencia));
		return $prod->fetch();
	}

}
?>
