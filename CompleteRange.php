<?php
class CompleteRange{

    public $var = array(-3,-5,-1,-10,6,-8,9);

    public function build() {

	    $array=$this->var;
      $array = array_filter($array, function ($v) { return $v > 0; });
	    $maximo=max($array);
	    $minimo=min($array);
      $arraysito=array();

		  for ($i=$minimo; $i <= $maximo; $i++){
          $arraysito[]=$i;
		  }
      echo json_encode($arraysito);
    }
}

 $pruebita= new CompleteRange;
 $pruebita->build();
?>
