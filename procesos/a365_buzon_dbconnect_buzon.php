<?php 
$server="192.168.102.14";
$database="aapeffvvdb_qa";
$user="aape";
$pass="aapepgdbserver";
$_str_conexion="host=".$server." port=5432 dbname=".$database." user=".$user." password=$pass";
$db_link_aape=pg_connect($_str_conexion);
?>