<?php

class indexController extends Controller{

	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$this->_view->setJs(array('index'));
		$this->_view->renderizar('index',true);
	}

	public function login(){
		$user = trim($_POST['user']);
		$pass = sha1(trim($_POST['pass']));

		$intentos = isset($_COOKIE['intentos'])?$_COOKIE['intentos']:1;

		if ($intentos>3) {
			echo 'Sistema Bloqueado';
		}
		else
		{

			$objModel=$this->loadModel('usuario');

			if ($objModel->validUser($user,$pass)){

				$return=$objModel->getNombre($user);
				$_SESSION['user']=$user;
				$_SESSION['nombre']=$return[0];
				$_SESSION['perfil']=$return[1];
				$_SESSION['menu'] = $objModel->getMenu($user);
				$intentos=1;
				setcookie('intentos',$intentos,time()+60);
				echo '1';
			}
			else
				echo 'Usuario y/o Password incorrecto';
		}

		$intentos++;
		setcookie('intentos',$intentos,time()+60);

	}

	public function logout(){

		unset($_SESSION['user']);
		unset($_SESSION['menu']);
		$this->redireccionar('index');
	}


}


?>
