function toggleMenu() {
  console.log('Toggle menu function called'); 
}

function toggleMenu() {
    const x = document.getElementById("myTopnav");
    const links = document.getElementById("myLinks");
    if (x.className === "topnav") {
      x.className += " responsive";
      links.style.display = "block";
    } else {
      x.className = "topnav";
      links.style.display = "none";
    }
  }

  function toggleDropdown() {
    const aboutDropdown = document.getElementById("aboutDropdown");
    aboutDropdown.style.display = aboutDropdown.style.display === 'block' ? 'none' : 'block';
  }



function toggleDropdown() {
const aboutDropdown = document.getElementById("aboutDropdown");
aboutDropdown.style.display = aboutDropdown.style.display === 'block' ? 'none' : 'block';
}



function checkInputs() {
  // Get all the input elements
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const subjectInput = document.getElementById("subject");
  const errorElement = document.getElementById("error");

  const emptyFields = [];

  // Check if any of the input elements are empty, if so, display error message
  if (firstNameInput.value === '') {
    emptyFields.push('First Name');
  }

  if (lastNameInput.value === '') {
    emptyFields.push('Last name');
  }
  if (subjectInput.value === '') {
    emptyFields.push('subject');
  }

  if (emptyFields.length > 0) {
    const errorMessage = `Please fill in: ${emptyFields.join(', ')}.`;
    errorElement.textContent = errorMessage;
    errorElement.style.display = 'block';
    return;
  }

  // Otherwise, hide the error message
  errorElement.textContent = '';
  errorElement.style.display = 'none';
}

 // Pop up
  // Función para mostrar el pop-up al cargar la página
  window.onload = function () {
    document.getElementById('popup').style.display = 'block';
  }

  // Función para cerrar el pop-up
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }

  // Funciones para los botones (puedes personalizar estas funciones según tus necesidades)
  function onButton1Click() {
    
    alert('Botón 1 clickeado');
  }

  function onButton2Click() {
    alert('Botón 2 clickeado');
  }