<?php
class panelController extends Controller {
	public function __construct() {
		parent::__construct ();
		if (!isset($_SESSION['user']))
			$this->redireccionar ('index');
	}
	
	public function index() {
		$objModel=$this->loadModel('panel');
		$this->_view->tipo_documento=$objModel->getDocumento();
		$this->_view->estado_consulta=$objModel->getEstado();
		$this->_view->setJs ( array ('panel' ) );
		$this->_view->renderizar ( 'panel' );
		
	}
	
	public function getMotivo($estado){
	
		$objModel=$this->loadModel('panel');
		$modalidad_ve=$objModel->getMotivo($estado);
		$html='';
		$html.="<option value='' selected>SELECCIONE</option>";
		foreach($modalidad_ve as $indice =>$value):
		$html.="<option value='$value[0]'> $value[1]</option>";
		endforeach;
		echo $html;
	}
	
	public function getConsultas($tipo_usuario){
		$objModel=$this->loadModel('panel');
		$user = $_SESSION ['user'];
		$var_fecha_actual=date('Y-m-d');
		//$var_fecha_actual='2017-03-14';
		$fecha_ini= date("Y-m-d", strtotime("$var_fecha_actual -2 day"));
		
		$consultas=$objModel->getConsulta($tipo_usuario,$user,$var_fecha_actual,$fecha_ini);

		foreach ($consultas as $reg):
			$miArray['data'][]=$reg;
		endforeach;
		
		echo json_encode ($miArray);
	}
	
	public function getConsultasPlanes($idbuzon){
		$objModel=$this->loadModel('panel');
		$planes=$objModel->getConsultasPlanes($idbuzon);
	
		foreach ($planes as $reg):
		$miArray['data'][]=$reg;
		endforeach;
		echo json_encode ($miArray);
	}
	
	public function getUpdateconsulta(){
		
		$idbuzon=$_POST['id_consulta'];
		$fecha_nacimiento=($_POST['nacimiento']!='')?$_POST['nacimiento']:NULL;
		$tipo_documento=$_POST['tipo_documento']!=''?$_POST['tipo_documento']:NULL;
		$nro_documento=$_POST['nro_doc']!=''?$_POST['nro_doc']:NULL;
		$nro_referencia=$_POST['referencia'];
		$precio=$_POST['precio']!=''?$_POST['precio']:NULL;
		$sec=$_POST['sec'];
		$fecha_sec=$_POST['fecha_sec']!=''?$_POST['fecha_sec']:NULL;
		
		$objModel=$this->loadModel('panel');
		$update_buzon=$objModel->getUpdateBuzon($idbuzon,$tipo_documento,$nro_documento,$nro_referencia,$precio,$sec,
												$fecha_sec,$fecha_nacimiento);
		
		echo $update_buzon[0];
	}
	
	public function getBitacora($idbuzon){
		$objModel=$this->loadModel('panel');
		$bitacora=$objModel->getBitacora($idbuzon);
	
		foreach ($bitacora as $reg):
		$miArray['data'][]=$reg;
		endforeach;
		echo json_encode ($miArray);
	}
	
	public function insertBitacora(){
		$idbuzon=trim($_POST['id_consulta_2']);
		$estado_consulta=trim($_POST['estado_consulta']);
		$motivo_consulta=trim($_POST['motivo_consulta']);
		$observaciones=trim($_POST['observaciones']);
		$iduser=trim($_SESSION['user']);
		$ip_usr=trim($_SERVER['REMOTE_ADDR']);
		
		$objModel=$this->loadModel('panel');
		$insert_bitacora=$objModel->getInsertBitacora($idbuzon,$estado_consulta,$motivo_consulta,$observaciones,$iduser,$ip_usr);
		
		echo $insert_bitacora;
	}
	
	public function getConsultasCriterio($tipo_usuario){
		
		$objModel=$this->loadModel('panel');
		
		$user = $_SESSION ['user'];
		$criterio=$_POST['criterio'];
		$fecha_inicio=date("Y-m-d", strtotime($_POST['fecha_inicio']));
		$fecha_fin=date("Y-m-d", strtotime($_POST['fecha_fin']));
		$criterios_busqueda=$_POST['criterios_busqueda'];
		
		/*$fecha_inicio='2017-02-10';
		$fecha_fin='2017-02-21';
		$criterio=1;
		 $criterios_busqueda=143; */
		
		$consultas_criterio=$objModel->getConsultaCriterio($tipo_usuario,$user,$criterio,$fecha_inicio,$fecha_fin,$criterios_busqueda);
		
		foreach ($consultas_criterio as $reg):
			$miArray['data'][]=$reg;
		endforeach;
	
		echo json_encode ($miArray);
	}
	
	public function getObservaciones(){
		$idbuzon=$_POST['idbuzon'];
		$objModel=$this->loadModel('panel');
		$consulta_obs=$objModel->getObservaciones($idbuzon);
		echo $consulta_obs[0];
	}
	
	public function getObservacionesiniciales(){
		$idbuzon=$_POST['idbuzon'];
		$objModel=$this->loadModel('panel');
		$consulta_obs_ini=$objModel->getObservacionesiniciales($idbuzon);
		echo $consulta_obs_ini[0];
	}
	
	public function getOcultarpdf(){
		$idbuzon=$_POST['idbuzon'];
		$objModel=$this->loadModel('panel');
		$consulta_pdf=$objModel->getOcultarpdf($idbuzon);
		echo count($consulta_pdf[0]);
	}

}

?>