// Manejo de navegación y secciones
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');
const cerrarSesionButton = document.getElementById('cerrar-sesion');
let usuarioIniciado = false;

links.forEach(link => {
    link. ('click', function(event) {
        event.preventDefault();
        sections.forEach(section => section.classList.add('hidden'));
        const sectionId = link.getAttribute('href').substring(1);
        document.getElementById(sectionId).classList.remove('hidden');
    });
});

function mostrarFormulario(formularioId) {
    document.querySelectorAll('#usuarios > div').forEach(div => div.classList.add('hidden'));
    document.getElementById(formularioId).classList.remove('hidden');
}

function mostrarMensajeRegistro(event) {
    event.preventDefault();
    alert("¡Tu cuenta ha sido registrada exitosamente!");
    usuarioIniciado = true;
    cerrarSesionButton.classList.remove('hidden');
}

function mostrarMensajeInicio(event) {
    event.preventDefault();
    if (usuarioIniciado) {
        alert("¡Inicio de sesión exitoso!");
    } else {
        alert("Por favor, registra una cuenta primero.");
    }
}

function verificarSesion() {
    if (!usuarioIniciado) {
        alert("Debes iniciar sesión para comprar este servicio.");
    } else {
        alert("Compra realizada con éxito.");
    }
}

function cerrarSesion() {
    alert("Sesión cerrada.");
    usuarioIniciado = false;
    cerrarSesionButton.classList.add('hidden');
}