<?php
class consultaController extends Controller {
	public function __construct() {
		parent::__construct ();
		if (!isset($_SESSION['user'])){
			$this->redireccionar ('index');
		}
		else if($_SESSION['perfil']=='AGENTE' || $_SESSION['perfil']=='SUPERVISOR'){
			$this->redireccionar ('error');
		}

	}

	public function index() {
		$objModel =$this->loadModel('consulta');
		$this->_view->tipo_operacion=$objModel->getOperacion();
		$this->_view->tipo_documento=$objModel->getDocumento();
		//$this->_view->campania=$objModel->getCampania();
		$this->_view->familia=$objModel->getFamilia();
		$this->_view->plan=$objModel->getPlan();
		//$this->_view->acuerdo=$objModel->getAcuerdo();
		//$this->_view->tope=$objModel->getTope();
		$this->_view->equipo=$objModel->getEquipo();
		//$this->_view->departamento=$objModel->getDepartamento();
		//$this->_view->modalidad=$objModel->getModalidad();
		$this->_view->operador=$objModel->getOperador();
		$this->_view->setJs ( array ('consulta' ) );
		$this->_view->renderizar ( 'consulta' );
	}

	public function modalidad($modalidad_venta){

		$objModel=$this->loadModel('consulta');
		$modalidad_ve=$objModel->getModalidad($modalidad_venta);
		$html='';
		$html.="<option value='' selected>SELECCIONE</option>";
		foreach($modalidad_ve as $indice =>$value):
		$html.="<option value='$value[0]'> $value[1]</option>";
		endforeach;
		echo $html;
	}

	public function campania($campania,$campania2,$campania3,$campania4,$campania5){
		$objModel=$this->loadModel('consulta');
		$campania_ve=$objModel->getCampania($campania,$campania2,$campania3,$campania4,$campania5);
		$html='';
		$html.="<option value='' selected='selected'>SELECCIONE</option>";
		foreach($campania_ve as $indice =>$value):
		$html.="<option value='$value[0]'> $value[1]</option>";
		endforeach;
		echo $html;
	}

	public function plazo($plazo,$plazo2,$plazo3){
		$objModel=$this->loadModel('consulta');
		$campania_ve=$objModel->getAcuerdo($plazo,$plazo2,$plazo3);
		$html='';
		$html.="<option value='' selected='selected'>SELECCIONE</option>";
		foreach($campania_ve as $indice =>$value):
		$html.="<option value='$value[0]'> $value[1]</option>";
		endforeach;
		echo $html;
	}

	public function tope($tope,$tope2,$tope3){
		$objModel=$this->loadModel('consulta');
		$campania_ve=$objModel->getTope($tope,$tope2,$tope3);
		$html='';
		$html.="<option value='' selected='selected'>SELECCIONE</option>";
		foreach($campania_ve as $indice =>$value):
		$html.="<option value='$value[0]'> $value[1]</option>";
		endforeach;
		echo $html;
	}

	public function plan($familia){

		$objModel=$this->loadModel('consulta');
		$planes=$objModel->getPlanes($familia);
		$html='';
		$html.="<option value='' selected='selected'>SELECCIONE</option>";
		foreach($planes as $indice =>$value):
			$html.="<option value='$value[0]'> $value[1]</option>";
		endforeach;
		echo $html;
	}

	public function insertConsulta(){

		$nombre=trim($_POST['nombres']);
		$apellidopat=trim($_POST['apellidopat']);
		$apellidomat=trim($_POST['apellidomat']);
		$tipo_documento=trim($_POST['tipo_documento']);
		$documento=trim($_POST['documento']);
		$contacto=trim($_POST['contacto']);
		$nacimiento=trim($_POST['nacimiento']);
		$observaciones=addslashes(trim($_POST['observaciones']));
		$tipo_operacion=trim($_POST['tipo_operacion']);
		$modalidad=trim($_POST['modalidad_venta']);
		$json=$_POST['arraysito'];
		$iduser=trim($_SESSION['user']);
		$ip_usr=$_SERVER['REMOTE_ADDR'];
		$json=json_decode("$json", true);
		$mime = null;
		$pdf = null;

		$objModel=$this->loadModel('consulta');
		$id_ult=$objModel->getInsert($nombre,$apellidopat,$apellidomat,$documento,$contacto,$observaciones,
		$iduser,$ip_usr,$tipo_operacion,$tipo_documento,$modalidad,$nacimiento);

		if($id_ult[0]!='00000'){
			$idconsulta='';
			$log_error=$objModel->insertError($idconsulta,$id_ult[2],$iduser,$ip_usr);
			echo "1";
			exit;
		}

		if (isset($_FILES ['documentos_pdf'])){

			$nombreArchivo = $id_ult[1].".pdf"; //basename($_FILES['documentos_pdf']['name']);
			$destino_archivo = "temp/".$nombreArchivo ;

			$tempArchivo = $_FILES ['documentos_pdf']['tmp_name'];

			if(move_uploaded_file($_FILES['documentos_pdf']['tmp_name'],$destino_archivo))
			{
				$mimes_permitidos = array('application/pdf');
				$mime = $_FILES ['documentos_pdf'] ['type'];
				$pdf='';

				if (!in_array($mime, $mimes_permitidos)){
					unlink($destino_archivo);
					/*$fp = fopen($destino_archivo,"rb");
					$contenido = fread($fp, filesize($destino_archivo));
					$pdf = pg_escape_bytea($contenido);
					fclose($fp);*/
				}
				else{
					$result_pdf = $objModel->insertArchivo($id_ult[1],$nombreArchivo, $mime,$iduser,$ip_usr);

					if($result_pdf[0]!='00000'){
						$idconsulta=$id_ult[1];
						$log_error=$objModel->insertError($idconsulta,$result_pdf[2],$iduser,$ip_usr);
						echo "2";
						exit;
					}
				}
			}
		}

		foreach($json as $plan):
				$array=$array+1;
		 	foreach($plan as $dato):
			 	$contenido=$contenido+1;
		 	endforeach;
	 	endforeach;

	 	for($i=0;$i<$array;$i++){

	 		$idcampania=$json[$i][10];
	 		$idplazo=$json[$i][11];
	 		$idfamilia=$json[$i][12];
	 		$idplan=$json[$i][13];
	 		$idproducto=$json[$i][14];
	 		$idtipoconsumo=$json[$i][15];
	 		$cuota=$json[$i][6];
	 		$telefono=$json[$i][7];
	 		$idmodalidad_ope=$json[$i][16];
	 		$idoperador=$json[$i][17];

	 		$result_plan=$objModel->getInsertplan($id_ult[1],$idcampania,$idplazo,$idfamilia,$idplan,$idproducto,$idtipoconsumo,$cuota,$telefono,
	 					$idmodalidad_ope,$idoperador,$iduser,$ip_usr);
	 	}

	 	if($result_plan[0]!='00000'){
	 		$idconsulta=$id_ult[1];
	 		$log_error=$objModel->insertError($idconsulta,$result_plan[2],$iduser,$ip_usr);
	 		echo "3";
	 		exit;
	 	}

	 	$estado=1;
	 	$motivo=1;
	 	$observaciones_bitacora=addslashes($observaciones);

	 	$bitacora=$objModel->getInsertbitacora($id_ult[1],$estado,$motivo,$observaciones_bitacora,$iduser,$ip_usr);

	 	if($bitacora[0]!='00000'){
	 		$idconsulta=$id_ult[1];
	 		$log_error=$objModel->insertError($idconsulta,$bitacora[2],$iduser,$ip_usr);
	 		echo "4";
	 		exit;
	 	}

	 	echo "ok";
	}
}

?>
