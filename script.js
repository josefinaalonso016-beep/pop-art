document.addEventListener("DOMContentLoaded", function () {

  
    const modalOverlay = document.getElementById("modalOverlay");
    const btnAbrirModal = document.getElementById("btnAbrirModal");
    const btnCerrarModal = document.getElementById("btnCerrarModal");

    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");

    const linkIrARegistro = document.getElementById("linkIrARegistro");
    const linkIrALogin = document.getElementById("linkIrALogin");

   

    if (btnAbrirModal) {
        btnAbrirModal.addEventListener("click", function () {
            if (modalOverlay) modalOverlay.classList.add("activo");
        });
    }

    if (btnCerrarModal) {
        btnCerrarModal.addEventListener("click", function () {
            if (modalOverlay) modalOverlay.classList.remove("activo");
        });
    }

    if (modalOverlay) {
        modalOverlay.addEventListener("click", function (e) {
            if (e.target === modalOverlay) {
                modalOverlay.classList.remove("activo");
            }
        });
    }
if (linkIrARegistro && formLogin && formRegistro) {
    linkIrARegistro.addEventListener("click", function (e) {
        e.preventDefault();
        formLogin.classList.add("oculto");
        formRegistro.classList.remove("oculto");
    });
}

if (linkIrALogin && formRegistro && formLogin) {
    linkIrALogin.addEventListener("click", function (e) {
        e.preventDefault();
        formRegistro.classList.add("oculto");
        formLogin.classList.remove("oculto");
    });
}

    const cards = document.querySelectorAll(".card-tecnica");
    const modalTecnica = document.getElementById("modalTecnica");
    const btnCerrarTecnica = document.getElementById("btnCerrarTecnica");

    const modalHeader = document.getElementById("modalHeader");
    const modalTitulo = document.getElementById("modalTitulo");
    const modalDescripcion = document.getElementById("modalDescripcion");
    const modalExtra = document.getElementById("modalExtra");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            const clave = card.getAttribute("data-tecnica");
            const data = infoTecnicas[clave];

            if (data && modalTecnica) {
                modalTitulo.textContent = data.titulo;
                modalHeader.style.backgroundColor = data.color;
                modalDescripcion.textContent = data.descripcion;
                modalExtra.innerHTML = data.extra;
                modalTecnica.classList.add("activo");
            }
        });
    });

    if (btnCerrarTecnica) {
        btnCerrarTecnica.addEventListener("click", () => {
            if (modalTecnica) modalTecnica.classList.remove("activo");
        });
    }

    if (modalTecnica) {
        modalTecnica.addEventListener("click", (e) => {
            if (e.target === modalTecnica) {
                modalTecnica.classList.remove("activo");
            }
        });
    }

const modalVisor = document.getElementById('modalVisor');
    const imgModal = document.getElementById('imgModal');
    const captionModal = document.getElementById('captionModal');
    const cerrarModal = document.getElementById('cerrarModal');
    
    const tarjetasGaleria = document.querySelectorAll('.item-galeria, .card-referente, .tarjeta-obra');

    
    function cerrarVisorModal() {
        if (modalVisor) {
            modalVisor.classList.remove('activo');
        }
    }


    tarjetasGaleria.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const imgInterna = tarjeta.querySelector('img');
            const tituloInterno = tarjeta.querySelector('h3') || tarjeta.querySelector('h4') || tarjeta.querySelector('p');

            const rutaImagen = tarjeta.getAttribute('data-img') || (imgInterna ? imgInterna.src : '');
            const tituloImagen = tarjeta.getAttribute('data-titulo') || 
                                 (tituloInterno ? tituloInterno.textContent : '') || 
                                 (imgInterna ? imgInterna.alt : '');

            if (imgModal && modalVisor && rutaImagen) {
                imgModal.src = rutaImagen;
                if (captionModal) captionModal.textContent = tituloImagen;
                modalVisor.classList.add('activo');
            }
        });
    });


    if (cerrarModal) {
        cerrarModal.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            cerrarVisorModal();
        });
    }


    if (modalVisor) {
        modalVisor.addEventListener('click', function (e) {
        
            if (e.target === modalVisor || e.target === cerrarModal) {
                cerrarVisorModal();
            }
        });
    }

    const botonesFiltro = document.querySelectorAll('.btn-filtro, .filtros-galeria button, .filtro-btn');
    
    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', function () {
        
            botonesFiltro.forEach(btn => btn.classList.remove('activo'));
           
            this.classList.add('activo');

           
            let categoria = this.getAttribute('data-filtro') || 
                            this.getAttribute('onclick')?.match(/'([^']+)'/)?.[1] || 
                            this.textContent.trim().toLowerCase();

          
            if (categoria.includes('warhol')) categoria = 'warhol';
            else if (categoria.includes('lichtenstein')) categoria = 'lichtenstein';
            else if (categoria.includes('haring')) categoria = 'haring';
            else if (categoria.includes('rauschenberg')) categoria = 'rauschenberg';
            else if (categoria.includes('todos')) categoria = 'todos';

            filtrarGaleria(categoria, this);
        });
    });

   const formContacto = document.getElementById('formContacto');

if (formContacto) {
    formContacto.addEventListener('submit', function(e) {

        const nombre = document.getElementById('nombreContacto').value.trim();
        const email = document.getElementById('emailContacto').value.trim();
        const mensaje = document.getElementById('mensajeContacto').value.trim();

        if (!nombre || !email || !mensaje) {
            e.preventDefault();
            alert('Completá todos los campos.');
            return;
        }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    e.preventDefault();
    alert('Ingresá un email válido.');
    return;
}
        
    });
}
 
});

const infoTecnicas = {
    pintura: {
        titulo: "PINTURA POP ART",
        color: "#ff3377",
        descripcion: "La pintura Pop Art se caracterizó por el uso de acrílicos de tonos saturados, bordes nítidos (hard-edge) y superficies planas sin textura de pincelada visible, imitando la estética de las impresiones publicitarias.",
        extra: "Exponentes clave: Roy Lichtenstein (famoso por imitar los puntos Ben-Day de los cómics) y Andy Warhol."
    },
    serigrafia: {
        titulo: "SERIGRAFÍA Y GRABADO",
        color: "#ffd900",
        descripcion: "La serigrafía permitió a los artistas industrializar el proceso creativo. Mediante mallas y tintas, podían replicar una misma imagen decenas de veces, desmitificando la idea de la 'obra única y original'.",
        extra: "Dato Pop: Las famosas series de Marilyn Monroe y las latas de Sopa Campbell fueron creadas mediante serigrafía técnica."
    },
    escultura: {
        titulo: "ESCULTURA Y SOFT SCULPTURE",
        color: "#0099ff",
        descripcion: "Los escultores Pop trasladaron objetos de consumo masivo a la tridimensionalidad, alterando sus escalas, materiales (usando vinilo, telas rellenas o metal) y reubicándolos en galerías de arte.",
        extra: "Exponente clave: Claes Oldenburg creó esculturas gigantes de hamburguesas, tenedores e inodoros blandos."
    },
    diseno: {
        titulo: "DISEÑO GRÁFICO Y CÓMICS",
        color: "#ffd900",
        descripcion: "El Pop Art borró las fronteras entre las bellas artes y el diseño comercial. Incorporó tipografías en negrita, bocadillos de diálogo de historietas y composiciones tomadas directamente de afiches publicitarios.",
        extra: "Recurso visual: El uso del delineado negro grueso y tramas de puntos industriales."
    },
    cine: {
        titulo: "CINE Y FOTOGRAFÍA",
        color: "#ff3377",
        descripcion: "A través del collage fotográfico y las películas experimentales de 16mm, los artistas registraron el culto a la celebridad, el consumismo de la época y el frenético ritmo urbano de los años 60.",
        extra: "Dato Pop: 'The Factory', el estudio de Warhol, fue el epicentro de la producción audiovisual pop."
    }
};


function filtrarGaleria(categoria, botonSeleccionado) {
    const tarjetas = document.querySelectorAll('.item-galeria, .card-referente, .tarjeta-obra');
    
    tarjetas.forEach(tarjeta => {
        if (categoria === 'todos' || tarjeta.classList.contains(categoria)) {
            tarjeta.style.display = '';
            tarjeta.classList.remove('oculto');
        } else {
            tarjeta.style.display = 'none';
            tarjeta.classList.add('oculto');
        }
    });
}




document.addEventListener("DOMContentLoaded", function () {

    var overlay = document.getElementById("modalArtista");
    if (!overlay) return;

    function abrir(card) {
        var d = card.querySelector(".artista-detalle");
        var img = card.querySelector(".img-container-obra img");
        if (!d) return;

        document.getElementById("artistaNombre").textContent = d.querySelector("h2").textContent;
        document.getElementById("artistaRol").textContent = d.querySelector(".artista-rol").textContent;
        document.getElementById("artistaHeader").style.backgroundColor = d.dataset.color || "#ffd900";

        var foto = document.getElementById("artistaFoto");
        foto.src = img.getAttribute("src");
        foto.alt = img.alt;

        document.getElementById("artistaFichas").innerHTML = d.querySelector(".artista-fichas").innerHTML;
        document.getElementById("artistaBio").innerHTML = d.querySelector(".artista-bio").innerHTML;
        document.getElementById("artistaObras").innerHTML = d.querySelector(".artista-obras").innerHTML;
        document.getElementById("artistaCuriosidad").textContent = d.querySelector(".artista-curiosidad").textContent;

        overlay.querySelector(".modal-artista-body").scrollTop = 0;
        overlay.classList.add("activo");
        document.body.style.overflow = "hidden";
    }

    function cerrar() {
        overlay.classList.remove("activo");
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".btn-mas-info").forEach(function (btn) {
        btn.addEventListener("click", function () {
            abrir(btn.closest(".card-obra"));
        });
    });

    document.getElementById("btnCerrarArtista").addEventListener("click", cerrar);

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) cerrar(); // clic afuera de la ventana
    });

    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") cerrar();
    });
});




// COMPROBAR SI HAY UNA SESIÓN INICIADA

document.addEventListener("DOMContentLoaded", function () {

    fetch("sesion.php")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo consultar la sesión");
            }
            return response.json();
        })
        .then(data => {

            if (data.logueado) {

                const textoRegistro = document.getElementById("textoRegistro");
                const btnAbrirModal = document.getElementById("btnAbrirModal");

                if (textoRegistro && btnAbrirModal) {

                    textoRegistro.innerHTML = "";

                    const saludo = document.createElement("strong");
                    saludo.textContent = "¡HOLA, " + data.nombre.toUpperCase() + "!";

                    const bienvenida = document.createElement("span");
                    bienvenida.textContent = "¡Ya estás registrada en la revolución POP ART!";

                    textoRegistro.appendChild(saludo);
                    textoRegistro.appendChild(bienvenida);

                    const cerrar = document.createElement("a");
                    cerrar.href = "cerrar_sesion.php";
                    cerrar.className = "boton-registro";
                    cerrar.textContent = "CERRAR SESIÓN";

                    btnAbrirModal.replaceWith(cerrar);
                }

            }

        })
        .catch(error => console.log("Error al comprobar la sesión:", error));

});

document.addEventListener("DOMContentLoaded", function () {

    const parametros = new URLSearchParams(window.location.search);
    const error = parametros.get("error");

    if (error) {

        const btnAbrirModal = document.getElementById("btnAbrirModal");
        const mensaje = document.getElementById("errorLogin");

        if (btnAbrirModal && mensaje) {

            btnAbrirModal.click();

            if (error === "email") {
                mensaje.textContent = "Ese correo no está registrado. ¡Registrate para formar parte de POP ART!";
            }

            if (error === "password") {
                mensaje.textContent = "La contraseña es incorrecta. Intentá nuevamente.";
            }

            // Limpia el parámetro de la dirección
            window.history.replaceState({}, document.title, "index.html");
        }
    }

});