// Obtener referencia al formulario de contacto
const contactForm = document.getElementById('contact-form');

// Escuchar el evento de envío del formulario
contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validar los campos del formulario
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Por favor, complete todos los campos del formulario.');
    return; // Detener el envío del formulario
  }

  // Enviar los datos del formulario al servidor (puedes usar Ajax o Fetch API)

  // Limpiar el formulario después del envío
  contactForm.reset();
});


