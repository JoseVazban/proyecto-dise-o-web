function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const mensaje = document.getElementById('mensaje').value;
  
    if (nombre === '') {
      alert('El nombre es obligatorio');
      return false;
    }
  
    if (correo === '') {
      alert('El correo electrónico es obligatorio');
      return false;
    }
  
    if (!/\S+@\S+\.\S+/.test(correo)) {
      alert('El correo electrónico no es válido');
      return false;
    }
  
    if (mensaje === '') {
      alert('El mensaje es obligatorio');
      return false;
    }
  
    return true;
  }
  
  function cambiarTema() {
    const body = document.body;
    const header = document.getElementsByTagName('header')[0];
  
    body.classList.toggle('tema-oscuro');
    header.classList.toggle('tema-oscuro');
  }
  
  document.getElementById('contacto').onsubmit = validarFormulario;
  document.getElementById('tema').onclick = cambiarTema;
  
  const inicio = document.getElementById('inicio');
  inicio.style.opacity = 0;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      inicio.style.opacity = 1;
    }
  });
  
  const habilidades = document.getElementsByClassName('habilidades-grid')[0];
  habilidades.style.opacity = 0;
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 500) {
      habilidades.style.opacity = 1;
    }
  });