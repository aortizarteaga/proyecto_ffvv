<?php
class mantenimientoModel extends Model {
	public function __construct() {
		parent::__construct ();
	}

	public function getListado(){

		$sql = "SELECT
						bu.`id_buzon_usuario`,
						bu.`nombres`,
						bu.`apellidos`,
						bt.descripcion AS tipo_documento,
						bu.`nro_documento`,
						bu.`id_buzon_usuario` AS opciones
						FROM `a365_buzon_usuario` bu
						INNER JOIN `a365_buzon_tipo_documento` bt ON bu.id_tipo_documento=bt.id_buzon_tipo_doc";

		$prod = $this->_db->prepare($sql);
		$prod->execute();
		$result=$prod->fetchAll(PDO::FETCH_ASSOC);
		return $result;

	}

	public function getListadocriterio($fecha_inicial,$fecha_final){

		$criterio="DATE(eu.`fecha_registro`) BETWEEN '$fecha_inicial' AND '$fecha_final'";

		$sql = "SELECT eu.`id_emision_usuario` AS usuario,
				ea.`nombre`,
				ea.`documento`,
				ea.`direccion`,
				eup.`descripcion`,
				eu.`telefono_principal`,
				eu.`telefono_secundario`,
				eu.`email_principal`,
				'' as opciones
				FROM `gc_emision_usuario` eu LEFT JOIN
				`gc_emision_agencia` ea ON eu.`id_tipo_agencia`=ea.`id_emision_agencia`
				INNER JOIN `gc_emision_ubigeo_paises` eup ON eup.`id_emision_ubigeo`=eu.`id_ubigeo_pais`
				WHERE $criterio";

		$prod = $this->_db->prepare($sql);
		$prod->execute();
		$result=$prod->fetchAll(PDO::FETCH_ASSOC);
		return $result;

	}

	public function getUsuarioupdate($idusuario){
		$sql = "SELECT
                eu.`id_buzon_usuario`,
                eu.`id_tipo_usuario`,
                eu.`id_tipo_documento`,
                eu.`nro_documento`,
                eu.`nombres`,
                eu.`apellidos`,
                eu.`email`,
                eu.`telefono_principal`,
                eu.`telefono_secundario`,
                eu.`direccion`,
                eu.`password`,
                eu.`flg_activado`
                FROM `a365_buzon_usuario` eu
                WHERE eu.`id_buzon_usuario`='$idusuario'";

		$prod = $this->_db->prepare($sql);
		$prod->execute();
		return $prod->fetch();
	}

    public function updateUser($tipo_documento,$documento,$nombres,$apellidos,$telefono1,$telefono2,
																$email,$tipo_usuario,$usuario,$password,$iduser,$ip_usr,$flg_activo){

				$hoy=date('Y-m-d H:i:s');

				$sql_update = "UPDATE `a365_buzon_usuario` SET `id_buzon_usuario` = '$usuario',`password` = '$password',`id_tipo_usuario` = '$tipo_usuario',`nombres` = '$nombres',`apellidos` = '$apellidos',`id_tipo_documento` = '$tipo_documento',
                              `nro_documento` = '$documento',`telefono_principal` = '$telefono1',`telefono_secundario` = '$telefono2',`email` = '$email',
                              `id_usr_registro_mod` = '$iduser',`ip_usr_registro_mod`= '$ip_usr',`flg_activado`='$flg_activo',
                              `fecha_registro_mod` = '$hoy' WHERE `id_buzon_usuario` = '$usuario'";

				$prod = $this->_db->prepare ( $sql_update );
				$prod->execute ();
				$arr = $prod->errorInfo ();
				return $arr;
	}

}
?>
