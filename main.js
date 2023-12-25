import './src/styles/normalize.css';
import './src/styles/style.css';

emailjs.init("AVry4BkR-IsSnZykY");

const form = document.getElementById("contact-form")

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Envía los datos del formulario por correo electrónico
  emailjs.send("service_odi1pko","template_nim1hw8", {
    from_name: name,
    reply_to: email,
    to_name: subject,
    message: message,
  })
  .then(function(response) {
    alert("Correo electrónico enviado exitosamente:");
  }, function(error) {
    alert("Error al enviar correo electrónico:");
  });
});