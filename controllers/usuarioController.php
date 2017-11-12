<?php

class usuarioController extends Controller{

	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$objModel =$this->loadModel('consulta');
		$objModel2 =$this->loadModel('registro');
		$this->_view->tipo_documento=$objModel->getDocumento();
		$this->_view->tipo_usuario=$objModel2->getTipousuario();
		$this->_view->tipo_acceso=$objModel2->getAcceso();
		$this->_view->setJs(array('usuario'));
		$this->_view->renderizar('usuario');
	}

	public function insertarusuario(){

		$tipo_documento=trim($_POST['tipo_documento']);
		$documento=trim($_POST['documento']);
		$nombres=strtoupper(trim($_POST['nombres']));
		$apellidos=strtoupper(trim($_POST['apellidos']));
		$telefono1=trim($_POST['telefono1']);
		$telefono2=trim($_POST['telefono2']);
		$direccion=strtoupper(trim($_POST['direccion']));
		$email=strtoupper(trim($_POST['email']));
		$tipo_usuarios=trim($_POST['tipo_usuarios']);
		$usuario=trim($_POST['usuario']);
		$password=sha1(trim($_POST['password']));
		$grupo=$_POST['grupo'];
		$iduser=trim($_SESSION['user']);
		$ip_usr=trim($_SERVER['REMOTE_ADDR']);

		$objModel=$this->loadModel('registro');
		$insert_id=$objModel->insertarusuario($tipo_documento,$documento,$nombres,$apellidos,
													$telefono1,$telefono2,$direccion,$email,$tipo_usuarios,$usuario,$password,$iduser,$ip_usr);

		$longitud=count($grupo);

		for($i=0;$i<$longitud;$i++){
			$paginas=trim($grupo[$i]);
			$insert_paginas=$objModel->insertPaginas($paginas,$usuario,$iduser);

		}

		echo "0";

	}
}

?>
