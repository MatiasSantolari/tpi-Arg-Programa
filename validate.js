// Agregamos un listener para el evento "submit" del formulario
document.getElementById('mi-formulario').addEventListener('submit', function(event) {
    // Validamos el formulario
    var errors = validate(this, {
      // Definimos las reglas de validación para cada campo
      nombre: {
        presence: true,
        length: { minimum: 3 }
      },
      email: {
        presence: true,
        email: true
      },
      mensaje: {
        presence: true,
        length: { maximum: 100 }
      }
    });

    // Si hay errores, detenemos el envío del formulario y mostramos los errores
    if (errors) {
      event.preventDefault();
      alert(JSON.stringify(errors));
    }
  });
