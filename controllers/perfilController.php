<?php
class perfilController extends Controller {
	public function __construct() {
		parent::__construct ();
		if (!isset($_SESSION['user'])){
			$this->redireccionar ('index');
		}	
	}
	
	public function index(){
		$this->_view->setJs(array('perfil'));
		$this->_view->renderizar('perfil');
	}
}

?>