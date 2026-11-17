
<?php
session_start();

header("Content-Type: application/json; charset=UTF-8");

if (isset($_SESSION["nombre"])) {
    echo json_encode([
        "logueado" => true,
        "nombre" => $_SESSION["nombre"]
    ]);
} else {
    echo json_encode([
        "logueado" => false
    ]);
}
?>
