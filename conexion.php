<?php
$servidor = "localhost";
$usuario = "root";
$password = "";
$base_de_datos = "martes";

$conexion = mysqli_connect($servidor, $usuario, $password, $base_de_datos);

if (!$conexion) {
    die("Fallo la conexión: " . mysqli_connect_error());
}
?>