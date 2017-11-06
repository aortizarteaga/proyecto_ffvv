<?php

class usuarioController extends Controller{

	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$this->_view->setJs(array('usuario'));
		$this->_view->renderizar('usuario');
	}
}


?>
