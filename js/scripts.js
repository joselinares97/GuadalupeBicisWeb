/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById("submitButton").addEventListener("click", function(event) {
    // Prevenir el comportamiento por defecto del formulario
    event.preventDefault();

    // Capturar los valores de los campos del formulario
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Log para verificar que los valores se obtienen correctamente
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Validar que los campos no estén vacíos
    if (name === "" || phone === "" || message === "") {
        alert("Por favor, todos los campos son requeridos.");
        return;
    }

    // Crear el mensaje para WhatsApp
    var whatsappMessage = `Hola, soy ${name}. Mi teléfono es ${phone}. Tengo el siguiente mensaje: ${message}`;
    
    // Número de WhatsApp donde quieres recibir los mensajes (sin el +)
    var phoneNumber = "573025931546"; // Reemplaza con tu número de WhatsApp

    // Crear la URL de WhatsApp con el mensaje
    var whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir WhatsApp en una nueva ventana
    window.open(whatsappURL, '_blank');
});