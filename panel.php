
<?php
session_start();

// Verificar que el usuario haya iniciado sesión
if (!isset($_SESSION["nombre"])) {
    header("Location: index.html");
    exit;
}

$nombre = htmlspecialchars($_SESSION["nombre"], ENT_QUOTES, "UTF-8");
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>POP-ART SHOP</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Nunito+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ENCABEZADO -->

    <header class="header">

        <a href="index.html" class="logo">
            <img src="img/logo.png" alt="Logo Pop Art">
        </a>

        <nav class="menu">
            <a href="index.html">INICIO</a>
            <a href="historia.html">HISTORIA</a>
            <a href="arte-y-tecnicas.html">ARTE Y TÉCNICAS</a>
            <a href="artistas.html">ARTISTAS</a>
            <a href="galeria.html">GALERÍA</a>
            <a href="contacto.html">CONTACTO</a>
        </nav>

    </header>


    <!-- PORTADA DE LA TIENDA -->

    <main class="tienda-pop">

        <section class="tienda-portada">

            <span>ESPACIO EXCLUSIVO PARA MIEMBROS</span>

            <h1>POP-ART SHOP</h1>

            <h2>¡HOLA, <?php echo strtoupper($nombre); ?>!</h2>

            <p>
                Bienvenido/a a nuestra tienda exclusiva.
                Encontrá productos inspirados en el universo del Pop Art.
            </p>

            <a href="#productos" class="tienda-boton">
                EXPLORAR PRODUCTOS
            </a>

        </section>


        <!-- CATÁLOGO -->

        <section class="tienda-catalogo" id="productos">

            <div class="tienda-titulo">

                <span>EDICIÓN POP</span>

                <h2>NUESTROS PRODUCTOS</h2>

                <p>
                    Diseño, color y arte para llevar a todos lados.
                </p>

            </div>


            <div class="productos-grid">


                <!-- PRODUCTO 1 -->

                <article class="producto">

                    <div class="producto-imagen">
                        <img src="img/productos/remera.jpg" alt="Remera POP">
                    </div>

                    <div class="producto-info">

                        <h3>Remera POP</h3>

                        <p>Remera estampada estilo cómic.</p>

                        <strong>$18.000</strong>

                        <button class="agregar-carrito" data-nombre="Remera POP" data-precio="18000">
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                </article>


                <!-- PRODUCTO 2 -->

                <article class="producto">

                    <div class="producto-imagen">
                        <img src="img/productos/tote-bag.jpg" alt="Tote bag artística">
                    </div>

                    <div class="producto-info">

                        <h3>Tote bag artística</h3>

                        <p>Bolsa de tela con diseño Pop Art.</p>

                        <strong>$12.500</strong>

                        <button class="agregar-carrito" data-nombre="Tote bag artística" data-precio="12500">
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                </article>


                <!-- PRODUCTO 3 -->

                <article class="producto">

                    <div class="producto-imagen">
                        <img src="img/productos/poster.jpg" alt="Poster Pop Art">
                    </div>

                    <div class="producto-info">

                        <h3>Poster Pop Art</h3>

                        <p>Lámina decorativa a todo color.</p>

                        <strong>$9.000</strong>

                        <button class="agregar-carrito" data-nombre="Poster Pop Art" data-precio="9000">
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                </article>


                <!-- PRODUCTO 4 -->

                <article class="producto">

                    <div class="producto-imagen">
                        <img src="img/productos/taza.jpg" alt="Taza ilustrada">
                    </div>

                    <div class="producto-info">

                        <h3>Taza ilustrada</h3>

                        <p>Taza con ilustración inspirada en el Pop Art.</p>

                        <strong>$8.500</strong>

                        <button class="agregar-carrito" data-nombre="Taza ilustrada" data-precio="8500">
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                </article>


                <!-- PRODUCTO 5 -->

                <article class="producto">

                    <div class="producto-imagen">
                        <img src="img/productos/stickers.jpg" alt="Pack de stickers">
                    </div>

                    <div class="producto-info">

                        <h3>Pack de stickers</h3>

                        <p>Stickers coloridos con diseños pop.</p>

                        <strong>$4.500</strong>

                        <button class="agregar-carrito" data-nombre="Pack de stickers" data-precio="4500">
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                </article>


                <!-- PRODUCTO 6 -->

                <article class="producto">

                    <div class="producto-imagen">
                        <img src="img/productos/cuaderno.jpg" alt="Cuaderno creativo">
                    </div>

                    <div class="producto-info">

                        <h3>Cuaderno creativo</h3>

                        <p>Cuaderno para tus ideas y dibujos.</p>

                        <strong>$7.500</strong>

                        <button class="agregar-carrito" data-nombre="Cuaderno creativo" data-precio="7500">
                            AGREGAR AL CARRITO
                        </button>

                    </div>

                </article>


            </div>

        </section>


        <!-- CARRITO -->

        <section class="carrito-seccion" id="carrito">

            <h2>MI CARRITO</h2>

            <p class="carrito-ayuda">
                Tus productos seleccionados:
            </p>

            <div id="listaCarrito">

                <p class="carrito-vacio">
                    Todavía no agregaste productos.
                </p>

            </div>


            <div class="carrito-total">

                <span>TOTAL:</span>

                <strong id="totalCarrito">$0</strong>

            </div>


            <button id="confirmarCompra" class="tienda-boton">
                CONFIRMAR COMPRA
            </button>



            <p id="mensajeCompra" class="mensaje-compra"></p>

        </section>


        

        <div class="tienda-sesion">

            <a href="salir.php">CERRAR SESIÓN</a>

        </div>

    </main>


    <!-- PIE DE PÁGINA -->

    <footer class="footer-pop">

        <p>POP-ART | Explorá, descubrí y disfrutá el arte.</p>

    </footer>


  

    <script>

        let carrito = [];

        const botonesAgregar = document.querySelectorAll(".agregar-carrito");

        const listaCarrito = document.getElementById("listaCarrito");

        const totalCarrito = document.getElementById("totalCarrito");

        const confirmarCompra = document.getElementById("confirmarCompra");

        const mensajeCompra = document.getElementById("mensajeCompra");


        // AGREGAR PRODUCTOS

        botonesAgregar.forEach(function(boton) {

            boton.addEventListener("click", function() {

                const nombre = this.dataset.nombre;

                const precio = Number(this.dataset.precio);

                carrito.push({
                    nombre: nombre,
                    precio: precio
                });

                mensajeCompra.textContent = "";

                actualizarCarrito();

            });

        });


        // ACTUALIZAR CARRITO Y TOTAL

        function actualizarCarrito() {

            listaCarrito.innerHTML = "";

            let total = 0;


            if (carrito.length === 0) {

                listaCarrito.innerHTML =
                    '<p class="carrito-vacio">Todavía no agregaste productos.</p>';

            }


            carrito.forEach(function(producto, indice) {

                total += producto.precio;

                const elemento = document.createElement("div");

                elemento.className = "carrito-producto";


                const nombre = document.createElement("span");

                nombre.textContent = producto.nombre;


                const precio = document.createElement("strong");

                precio.textContent =
                    "$" + producto.precio.toLocaleString("es-AR");


                const eliminar = document.createElement("button");

                eliminar.textContent = "QUITAR";


                eliminar.addEventListener("click", function() {

                    carrito.splice(indice, 1);

                    actualizarCarrito();

                });


                elemento.appendChild(nombre);

                elemento.appendChild(precio);

                elemento.appendChild(eliminar);

                listaCarrito.appendChild(elemento);

            });


            totalCarrito.textContent =
                "$" + total.toLocaleString("es-AR");

        }


        // CONFIRMAR COMPRA

        confirmarCompra.addEventListener("click", function() {

            if (carrito.length === 0) {

                mensajeCompra.textContent =
                    "¡Primero agregá algún producto al carrito!";

                return;

            }


            mensajeCompra.textContent =
                "¡YA HICISTE TU COMPRA! 🎉 Gracias por elegir POP-ART.";


            carrito = [];

            actualizarCarrito();

        });

    </script>

</body>

</html>
