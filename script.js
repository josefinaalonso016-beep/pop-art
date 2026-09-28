document.addEventListener("DOMContentLoaded", function () {


    const modalOverlay = document.getElementById("modalOverlay");
    const btnAbrirModal = document.getElementById("btnAbrirModal");
    const btnCerrarModal = document.getElementById("btnCerrarModal");

    const formLogin = document.getElementById("formLogin");
    const formRegistro = document.getElementById("formRegistro");

    const linkIrARegistro = document.getElementById("linkIrARegistro");
    const linkIrALogin = document.getElementById("linkIrALogin");

    const usuariosRegistrados = {
        "test@popart.com": "123456"
    };

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

    if (linkIrARegistro) {
        linkIrARegistro.addEventListener("click", function (e) {
            e.preventDefault();
            if (formLogin) formLogin.classList.add("oculto");
            if (formRegistro) formRegistro.classList.remove("oculto");
        });
    }

    if (linkIrALogin) {
        linkIrALogin.addEventListener("click", function (e) {
            e.preventDefault();
            if (formRegistro) formRegistro.classList.add("oculto");
            if (formLogin) formLogin.classList.remove("oculto");
        });
    }

    if (formLogin) {
        formLogin.addEventListener("submit", function (e) {
            e.preventDefault();
            const inputs = formLogin.querySelectorAll("input");
            const email = inputs[0].value.trim().toLowerCase();
            const password = inputs[1].value;

            if (usuariosRegistrados.hasOwnProperty(email)) {
                if (usuariosRegistrados[email] === password) {
                    alert("¡Ya estás registrado e iniciaste sesión con éxito!");
                    if (modalOverlay) modalOverlay.classList.remove("activo");
                    formLogin.reset();
                } else {
                    alert("El usuario o la contraseña no son correctos.");
                }
            } else {
                alert("El usuario o la contraseña no son correctos (si no tenés cuenta, registrate primero).");
            }
        });
    }

    if (formRegistro) {
        formRegistro.addEventListener("submit", function (e) {
            e.preventDefault();
            const inputs = formRegistro.querySelectorAll("input");
            const email = inputs[1].value.trim().toLowerCase();
            const password = inputs[2].value;

            if (usuariosRegistrados.hasOwnProperty(email)) {
                alert("Este correo ya está registrado. Por favor iniciá sesión.");
            } else {
                usuariosRegistrados[email] = password;
                alert("¡Te registraste con éxito! Ya tenés tu cuenta creada.");
                formRegistro.reset();
                formRegistro.classList.add("oculto");
                if (formLogin) formLogin.classList.remove("oculto");
            }
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
    const textoModal = document.getElementById('textoModal');
    const btnCerrarVisor = document.getElementById('btnCerrarVisor');
    const tarjetasGaleria = document.querySelectorAll('.item-galeria');

    tarjetasGaleria.forEach(tarjeta => {
        tarjeta.addEventListener('click', () => {
            const rutaImagen = tarjeta.getAttribute('data-img');
            const tituloImagen = tarjeta.getAttribute('data-titulo');

            if (imgModal && modalVisor) {
                imgModal.src = rutaImagen;
                if (textoModal) textoModal.textContent = tituloImagen;
                modalVisor.classList.add('activo');
            }
        });
    });

    if (btnCerrarVisor) {
        btnCerrarVisor.addEventListener('click', () => {
            if (modalVisor) modalVisor.classList.remove('activo');
        });
    }

    if (modalVisor) {
        modalVisor.addEventListener('click', (e) => {
            if (e.target === modalVisor) {
                modalVisor.classList.remove('activo');
            }
        });
    }


    const formContacto = document.getElementById('formContacto');
    const mensajeEstado = document.getElementById('mensajeEstado');

    if (formContacto) {
        formContacto.addEventListener('submit', function (e) {
            e.preventDefault();

            const nombreInput = document.getElementById('nombreContacto');
            const emailInput = document.getElementById('emailContacto');
            const mensajeInput = document.getElementById('mensajeContacto');

            const nombre = nombreInput ? nombreInput.value.trim() : '';
            const email = emailInput ? emailInput.value.trim() : '';
            const mensaje = mensajeInput ? mensajeInput.value.trim() : '';

            if (mensajeEstado) {
                mensajeEstado.className = 'mensaje-estado';
                mensajeEstado.textContent = '';

                if (!email || !email.includes('@') || !email.includes('.')) {
                    mensajeEstado.textContent = 'Te faltó una información importante: ingresá un mail válido.';
                    mensajeEstado.classList.add('error');
                    return;
                }

                if (!nombre || !mensaje) {
                    mensajeEstado.textContent = 'Completá todos los campos.';
                    mensajeEstado.classList.add('error');
                    return;
                }

                mensajeEstado.textContent = '¡Lo enviaste exitosamente!';
                mensajeEstado.classList.add('exito');

                formContacto.reset();
            }
        });
    }

});


const infoTecnicas = {
    pintura: {
        titulo: "PINTURA POP ART",
        color: "#ff3377",
        descripcion: "La pintura Pop Art se caracterizó por el uso de acrílicos de tonos saturados, bordes nítidos (hard-edge) y superficies planas sin textura de pincelada visible, imitando la estética de las impresiones publicitarias.",
        extra: "💡Exponentes clave: Roy Lichtenstein (famoso por imitar los puntos Ben-Day de los cómics) y Andy Warhol."
    },
    serigrafia: {
        titulo: "SERIGRAFÍA Y GRABADO",
        color: "#ffd900",
        descripcion: "La serigrafía permitió a los artistas industrializar el proceso creativo. Mediante mallas y tintas, podían replicar una misma imagen decenas de veces, desmitificando la idea de la 'obra única y original'.",
        extra: "💡Dato Pop: Las famosas series de Marilyn Monroe y las latas de Sopa Campbell fueron creadas mediante serigrafía técnica."
    },
    escultura: {
        titulo: "ESCULTURA Y SOFT SCULPTURE",
        color: "#0099ff",
        descripcion: "Los escultores Pop trasladaron objetos de consumo masivo a la tridimensionalidad, alterando sus escalas, materiales (usando vinilo, telas rellenas o metal) y reubicándolos en galerías de arte.",
        extra: "💡Exponente clave: Claes Oldenburg creó esculturas gigantes de hamburguesas, tenedores e inodoros blandos."
    },
    diseno: {
        titulo: "DISEÑO GRÁFICO Y CÓMICS",
        color: "#ffd900",
        descripcion: "El Pop Art borró las fronteras entre las bellas artes y el diseño comercial. Incorporó tipografías en negrita, bocadillos de diálogo de historietas y composiciones tomadas directamente de afiches publicitarios.",
        extra: "💡Recurso visual: El uso del delineado negro grueso y tramas de puntos industriales."
    },
    cine: {
        titulo: "CINE Y FOTOGRAFÍA",
        color: "#ff3377",
        descripcion: "A través del collage fotográfico y las películas experimentales de 16mm, los artistas registraron el culto a la celebridad, el consumismo de la época y el frenético ritmo urbano de los años 60.",
        extra: "💡Dato Pop: 'The Factory', el estudio de Warhol, fue el epicentro de la producción audiovisual pop."
    }
};


function filtrarGaleria(categoria, botonSeleccionado) {
    const botones = document.querySelectorAll('.btn-filtro');
    botones.forEach(btn => btn.classList.remove('activo'));
    if (botonSeleccionado) {
        botonSeleccionado.classList.add('activo');
    }

    const tarjetas = document.querySelectorAll('.item-galeria');
    tarjetas.forEach(tarjeta => {
        if (categoria === 'todos' || tarjeta.classList.contains(categoria)) {
            tarjeta.classList.remove('oculto');
        } else {
            tarjeta.classList.add('oculto');
        }
    });
}