<?php
class configuracionModel extends Model {
	public function __construct() {
		parent::__construct ();
	}

	public function validPswd($user,$pass){
		$sql ="SELECT id_buzon_usuario FROM a365_buzon_usuario WHERE id_buzon_usuario = :id AND password = :pass";
		
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$user,':pass'=>$pass));
		
		if ($prod->rowCount()) return true;
		 else return false;

	}
	
	public function udpatePswd($user,$new_pswd){
		
		$sql_update = "UPDATE a365_buzon_usuario SET password=:password WHERE id_buzon_usuario = :id_buzon_usuario";
		
		$prod = $this->_db->prepare($sql_update);
			
		$prod->execute(array(':password'=> $new_pswd,':id_buzon_usuario'=> $user,));
		
		$result = $prod->errorInfo();
		return $result;
		
	}
	
}
?>	