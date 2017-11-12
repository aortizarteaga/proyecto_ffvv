<?php
class mantenimientoController extends Controller {
	public function __construct() {
		parent::__construct ();
		if (!isset($_SESSION['user']))
			$this->redireccionar ('index');
	}

	public function index() {
		$objModel =$this->loadModel('consulta');
		$objModel2 =$this->loadModel('registro');
		$this->_view->tipo_documento=$objModel->getDocumento();
		$this->_view->tipo_usuario=$objModel2->getTipousuario();
		$this->_view->setJs ( array ('mantenimiento' ) );
		$this->_view->renderizar ( 'mantenimiento' );
	}

	public function getListado(){
		$objModel=$this->loadModel('mantenimiento');
		$listado=$objModel->getListado();

		foreach ($listado as $reg):
		$miArray['data'][]=$reg;
		endforeach;

		echo json_encode ($miArray);
	}

	public function getMantenimientoupdate($idusuario){
		$objModel=$this->loadModel('mantenimiento');
		$datos_listado=$objModel->getUsuarioupdate($idusuario);
		echo $datos_listado[0].",".$datos_listado[1].",".$datos_listado[2].",".$datos_listado[3].",".$datos_listado[4].",".$datos_listado[5].",".$datos_listado[6]
		.",".$datos_listado[7].",".$datos_listado[8].",".$datos_listado[9].",".$datos_listado[10].",".$datos_listado[11];
	}

	public function UpdateUsuario(){

		$tipo_documento=trim($_POST['tipo_documento']);
		$documento=trim($_POST['documento']);
		$nombres=strtoupper(trim($_POST['nombres']));
		$apellidos=strtoupper(trim($_POST['apellidos']));
		$telefono1=trim($_POST['telefono1']);
		$telefono2=trim($_POST['telefono2']);
		$email=strtoupper(trim($_POST['email']));
		$asociar_usuario=$_POST['direccion'];
		$tipo_usuario=trim($_POST['tipo_usuarios']);
		$usuario=trim($_POST['usuario']);
		$password=sha1(trim($_POST['password']));
		$flg_activo=trim($_POST['flg_activo']);
		$iduser=trim($_SESSION['user']);
		$ip_usr=trim($_SERVER['REMOTE_ADDR']);
		if($flg_activo=='on')$flg_activo='Y';else $flg_activo='N';

		$objModel=$this->loadModel('mantenimiento');


		$Update_user=$objModel->updateUser($tipo_documento,$documento,$nombres,
									 $apellidos,$telefono1,$telefono2,$email,$tipo_usuario,$usuario,$password,$iduser,$ip_usr,
									 $flg_activo);


		echo "0";

	}

}

?>
