
<?php
session_start();

include("conexion_usuarios.php");

$nombre = trim($_POST["nombre"] ?? "");
$apellido = trim($_POST["apellido"] ?? "");
$email = trim($_POST["email"] ?? "");
$usuario = trim($_POST["usuario"] ?? "");
$passwordOriginal = $_POST["password"] ?? "";

if ($nombre === "" || $apellido === "" || $email === "" || $usuario === "" || $passwordOriginal === "") {
    echo "Completá todos los campos.";
    echo "<br><a href='index.html'>Volver a POP ART</a>";
    exit;
}

$password = password_hash($passwordOriginal, PASSWORD_DEFAULT);

$consulta = mysqli_prepare($conexion,
    "SELECT id FROM usuarios WHERE email = ? OR usuario = ?"
);

mysqli_stmt_bind_param($consulta, "ss", $email, $usuario);
mysqli_stmt_execute($consulta);

$resultado = mysqli_stmt_get_result($consulta);

if (mysqli_num_rows($resultado) > 0) {
    echo "Ese correo o nombre de usuario ya está registrado.";
    echo "<br><a href='index.html'>Volver a POP ART</a>";
    exit;
}

$news = "no";

$insertar = mysqli_prepare($conexion,
    "INSERT INTO usuarios (nombre, apellido, email, usuario, password, newsletter)
    VALUES (?, ?, ?, ?, ?, ?)"
);

mysqli_stmt_bind_param($insertar, "ssssss",
    $nombre, $apellido, $email, $usuario, $password, $news
);

if (mysqli_stmt_execute($insertar)) {

    $_SESSION["nombre"] = $nombre;
    $_SESSION["apellido"] = $apellido;
    $_SESSION["email"] = $email;

    header("Location: index.html");
    exit;

} else {
    echo "No se pudo completar el registro.";
    echo "<br><a href='index.html'>Volver a POP ART</a>";
}
?>
