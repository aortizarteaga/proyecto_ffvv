<?php
class configuracionController extends Controller {
	public function __construct() {
		parent::__construct ();
		if (!isset($_SESSION['user'])){
			$this->redireccionar ('index');
		}
			
	}
	
	public function index() {
		$this->_view->setJs(array('configuracion'));
		$this->_view->renderizar('configuracion');
	}
	
	public function pswdValidate(){
		
		$user = trim($_POST['user']);
		$old_pswd = sha1(trim($_POST['old_pswd']));
		
		$objModel=$this->loadModel('configuracion');
		$result=$objModel->validPswd($user,$old_pswd);
		
		echo $result;
	}
	
	public function pswdUpdate(){
	
		$user = trim($_POST['user']);
		$new_pswd = sha1(trim($_POST['new_pswd']));
	
		$objModel=$this->loadModel('configuracion');
		$result=$objModel->udpatePswd($user,$new_pswd);
	
		echo $result[0];
	}
	
}

?>