
<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    include("conexion.php");

    $nombre = trim($_POST["nombre"] ?? "");
    $email = trim($_POST["email"] ?? "");
    $mensaje = trim($_POST["mensaje"] ?? "");

  
    if ($nombre === "" || $email === "" || $mensaje === "") {
        header("Location: contacto.html?estado=faltan_datos");
        exit();
    }

   if (
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    !preg_match('/\.[A-Za-z]{2,}$/', $email)
) {
    header("Location: contacto.php?estado=email_invalido");
    exit();
}

    $sql = "INSERT INTO contactos (nombre, email, mensaje)
            VALUES (?, ?, ?)";

    $stmt = mysqli_prepare($conexion, $sql);

    if ($stmt) {

        mysqli_stmt_bind_param($stmt, "sss", $nombre, $email, $mensaje);

        if (mysqli_stmt_execute($stmt)) {

            mysqli_stmt_close($stmt);
            mysqli_close($conexion);

            header("Location: contacto.html?estado=exito");
            exit();

        } else {

            mysqli_stmt_close($stmt);
            mysqli_close($conexion);

            header("Location: contacto.html?estado=error");
            exit();
        }

    } else {

        mysqli_close($conexion);

        header("Location: contacto.html?estado=error");
        exit();
    }

} else {

    header("Location: contacto.html");
    exit();
}

?>
