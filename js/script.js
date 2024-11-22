document.querySelector('.btn').addEventListener('click', () => {
    const video = document.querySelector('.video-1 video');
    const videoSrc = video.src;
  
    if (videoSrc) {
      video.src = ' ';
      video.style.display = 'none';
      const image = document.createElement('img');
      image.src = '\ProyectFinal\img\CIBERSEGURIDAD.jpg';
      image.style.width = '300px';
      image.style.height = '200px';
      image.style.border = '1px solid #ccc';
      image.style.backgroundColor = '#f4f4f4';
      video.parentNode.appendChild(image);
    } else {
      const image = document.querySelector('.video-1 img');
      image.parentNode.removeChild(image);
      video.src = 'C:\Users\rafae\OneDrive\Escritorio\ProyectFinal\img\ 7255101-uhd_4096_2160_30fps.mp4'; 
      video.style.display = 'block';
    }
  });

// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  // Selecciona el botón "Watch video"
  const watchVideoBtn = document.querySelector('.watch-video-btn');

  // Añade un evento de clic al botón
  watchVideoBtn.addEventListener('click', () => {
    // Selecciona el párrafo
    const parrafo = document.querySelector('.texto p');

    // Reemplaza el contenido del párrafo
    parrafo.textContent = 'Tu socio confiable en ciberseguridad, protegiendo tus datos y sistemas con soluciones avanzadas.';
  });
});



//contacto js

  document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
  
    const response = await fetch('/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, mensaje }),
    });
  
    if (response.ok) {
      alert('Datos enviados correctamente');
      document.getElementById('contact-form').reset();
    } else {
      alert('Error al enviar los datos');
    }
  });

  //productos js

document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.boton-obtener');

  botones.forEach((boton) => {
    boton.addEventListener('click', () => {
      const mensaje = document.createElement('p');
      mensaje.textContent = 'El producto ha sido obtenido exitosamente.';
      mensaje.classList.add('mensaje-exito');

      const producto = boton.closest('.producto');
      producto.appendChild(mensaje);

      setTimeout(() => {
        mensaje.remove();
      }, 3000);
    });
  });
});

  

 