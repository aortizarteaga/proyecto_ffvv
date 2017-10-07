<?php
$server="192.168.120.15";
$database="asterisk";
$user="cron";
$pass="Mf2r834rgFe129s1";

$db_link_vicidial=mysql_connect("$server", "$user", "$pass");

if(!$db_link_vicidial)
{
	echo "Error: No se puede conectar a la BD Vicidial de BACKOFFICE, Informe a Sistemas!!!";
	exit;
}

mysql_select_db("asterisk",$db_link_vicidial);

?>
