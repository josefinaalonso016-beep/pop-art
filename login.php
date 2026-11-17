
<?php
session_start();

include("conexion_usuarios.php");

$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

$consulta = mysqli_prepare($conexion,
    "SELECT id, nombre, apellido, email, password
    FROM usuarios
    WHERE email = ?"
);

mysqli_stmt_bind_param($consulta, "s", $email);
mysqli_stmt_execute($consulta);

$resultado = mysqli_stmt_get_result($consulta);

if ($usuario = mysqli_fetch_assoc($resultado)) {

    if (password_verify($password, $usuario["password"])) {

        $_SESSION["nombre"] = $usuario["nombre"];
        $_SESSION["apellido"] = $usuario["apellido"];
        $_SESSION["email"] = $usuario["email"];

        header("Location: panel.php");
        exit;

    } else {
        header("Location: index.html?error=password");
        exit;
    }

} else {
    header("Location: index.html?error=email");
    exit;
}
?>
