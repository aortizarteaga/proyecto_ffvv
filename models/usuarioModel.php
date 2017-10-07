<?php
class usuarioModel extends Model {
	public function __construct() {
		parent::__construct ();
	}

	public function validUser($user,$pass){
		$sql ="SELECT id_buzon_usuario FROM a365_buzon_usuario WHERE id_buzon_usuario = :id AND password = :pass";
		
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$user,':pass'=>$pass));
		
		if ($prod->rowCount()) return true;
		 else return false; 

		/*  if ($prod->rowCount()){
		 	$reg=$prod->fetch();
		 	if($reg['id_tipo_usuario']==4 && $_SERVER['REMOTE_ADDR']!='143.137.147.210'){
		 		return true;
		 	}
		 	else{
		 		return false;
		 	}
		 } */

	}
	
	public function getNombre($user){
		$sql="SELECT CONCAT(nombres,'',apellidos) as nombres,tusu.descripcion FROM a365_buzon_usuario usu 
			  INNER JOIN a365_buzon_tipo_usuario tusu ON usu.id_tipo_usuario=tusu.id_buzon_tipo 
			  WHERE id_buzon_usuario= :id";
	
		$prod = $this->_db->prepare($sql);
		$prod->execute(array(':id'=>$user));
		
		return $prod->fetch();
	}
	
	public function getMenu($user){
		
		$data;
		
		$sql="SELECT bup.id_buzon_pagina,
			  bp.descripcion,
			  bp.tipo,
			  bp.ubicacion 
			  FROM a365_buzon_usuario_pagina bup,a365_buzon_pagina bp 
			  WHERE bup.id_buzon_pagina=bp.id_buzon_pagina AND 
			  bup.id_buzon_usuario='$user' ORDER BY bp.tipo,bp.descripcion";
		
		$result = $this->_db->query($sql) or die('Error '.$sql);
		
		foreach($result as $indice=>$value):
			$data[trim($value[0])][trim($value[2])]=array('DESCRIPCION'=>trim($value[1]),'UBICACION'=>trim($value[3]));
		endforeach;
		
		return $data;
		
	}
}
?>	