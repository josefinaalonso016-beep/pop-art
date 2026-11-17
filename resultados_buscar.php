
<?php
include("conexion.php");

$buscar = trim($_POST["buscar"] ?? "");

$sql = "SELECT * FROM artistas
        WHERE nombre LIKE ?
        OR bio LIKE ?";

$stmt = mysqli_prepare($conexion, $sql);

if (!$stmt) {
    die("Error en la consulta: " . mysqli_error($conexion));
}

$texto = "%" . $buscar . "%";

mysqli_stmt_bind_param($stmt, "ss", $texto, $texto);
mysqli_stmt_execute($stmt);

$resultados = mysqli_stmt_get_result($stmt);
$cantidad = mysqli_num_rows($resultados);

$imagenes = [
    "Andy Warhol" => "img/andy-warhol.jpg",
    "Roy Lichtenstein" => "img/roy-lichtenstein.jpg",
    "Keith Haring" => "img/keith-haring.jpg",
    "Robert Rauschenberg" => "img/robert-rauschenberg.jpg"
];
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Resultados - Pop Art</title>

    <link rel="stylesheet" href="style.css">

    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Nunito+Sans:wght@400;700;800&display=swap" rel="stylesheet">
</head>

<body>

<div class="contenedor-web">

    <header class="header">

        <a href="index.html" class="logo">
            <img src="img/logo.png" alt="Logo Pop Art">
        </a>

        <nav class="menu">
            <a href="index.html">INICIO</a>
            <a href="historia.html">HISTORIA</a>
            <a href="arte-y-tecnicas.html">ARTE Y TÉCNICAS</a>
            <a href="artistas.html" class="activo">ARTISTAS</a>
            <a href="galeria.html">GALERÍA</a>
            <a href="contacto.html">CONTACTO</a>
        </nav>

    </header>


    <main class="contenido-historia">

        <div class="cartel-titulo">
            <h1>resultados</h1>
        </div>

        <p>
            Buscaste:
            <strong><?php echo htmlspecialchars($buscar); ?></strong>
        </p>

        <p>
            Cantidad de resultados: <?php echo $cantidad; ?>
        </p>


        <section class="grid-obras-top">

            <?php if ($cantidad > 0) { ?>

                <?php while ($artista = mysqli_fetch_assoc($resultados)) { ?>

                    <?php
                    $nombre = $artista["nombre"];
                    $imagen = $imagenes[$nombre] ?? "img/logo.png";
                    ?>

                    <article class="card-obra">

                        <div class="img-container-obra">

                            <img
                                src="<?php echo htmlspecialchars($imagen); ?>"
                                alt="<?php echo htmlspecialchars($nombre); ?>"
                            >

                        </div>

                        <?php
                        // Mostramos el HTML que ya está guardado en MySQL
                        echo $artista["bio"];
                        ?>

                    </article>

                <?php } ?>

            <?php } else { ?>

                <p>No se encontraron artistas con ese nombre.</p>

            <?php } ?>

        </section>

        <a href="artistas.html">Volver a artistas</a>

    </main>

</div>


<!-- MODAL DE ARTISTAS -->

<div class="modal-overlay" id="modalArtista">

    <div class="modal-popart modal-artista">

        <button class="cerrar-popart" id="btnCerrarArtista" aria-label="Cerrar">
            ✕
        </button>

        <div class="modal-popart-header" id="artistaHeader">

            <h2 id="artistaNombre">NOMBRE</h2>

            <p class="artista-rol" id="artistaRol"></p>

        </div>

        <div class="modal-artista-body">

            <div class="artista-top">

                <img class="artista-foto" id="artistaFoto" src="" alt="">

                <div class="artista-fichas" id="artistaFichas"></div>

            </div>

            <h3 class="artista-subtitulo">SU HISTORIA</h3>

            <div class="artista-bio" id="artistaBio"></div>

            <h3 class="artista-subtitulo">OBRAS CLAVE</h3>

            <ul class="artista-obras" id="artistaObras"></ul>

            <div class="modal-extra-info" id="artistaCuriosidad"></div>

        </div>

    </div>

</div>


<script src="script.js"></script>

</body>
</html>

<?php
mysqli_stmt_close($stmt);
mysqli_close($conexion);
?>
