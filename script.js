// Declaración de variables
var tries = 0;
var userIterator = 0;
var divWord = document.getElementById('word'); 
var btnGenerateWord = document.getElementById('btnGenerateWord');
const userName = document.getElementById('userName');
const btnAddUser = document.getElementById('btnAddUser');
const tblUsers = document.getElementById('tblUsers');
const img = document.getElementById('img');
const frmUsers = document.getElementById("frmUsers");

//Declaración de arreglos
let users = [];
let chosenWord = [];

//Cancelar el evento por defecto del formulario
frmUsers.addEventListener('submit', (event) => {
  event.preventDefault();
});

//Función agregar usuario
function addUser() {
  const newUser = userName.value;

  //Comprobar que se ha escrito un nombre
  if(!newUser) {
    alert('Ingrese un nombre');
    userName.focus();
    return;
  }

  //Añadir nuevos elementos a la tabla
  const newRow = document.createElement('tr');
  const cell = document.createElement('td');
  cell.textContent = newUser;
  cell.classList.add('new-cell');
  newRow.appendChild(cell);
  tblUsers.querySelector('tbody').appendChild(newRow);

  //Limpiar el input del nombre
  userName.value = '';
  userName.focus();
}

//Agregar usuarios al juego
btnAddUser.addEventListener('click', addUser);


// Función de reseteo de juego

function resetGame(){
  tries = 0;
  chosenWord = [];
  //users = [];
  //userIterator = 0;
}

// Petición para palabra random de API Greenborn
btnGenerateWord.addEventListener('click', () => {
function generateWord(){
        return new Promise((resolve, reject) => {
            // Usamos el ID introducido por el usuario para hacer la llamada a la API
            fetch(`https://clientes.api.greenborn.com.ar/public-random-word`)
              .then((response) => {
                if (response.ok) {
                  return response.json(); // Si la respuesta es exitosa, convertirla a JSON
                } else {
                  reject(new Error('There is not a word'));
                }
              })
              .then((data) => resolve(data)) // Resolver la promesa con los datos obtenidos
              .catch(() => reject(new Error('API connection failed'))); // Error en la conexión
        });
    }
})


// Función de reducción de intentos
function minusTries(){  
  tries--;
  switch(tries){
    case 1:
      img.scr = `img/ahorcado1.png`;
      console.log(tries);
      break;
    case 2:
      img.scr = `img/ahorcado2.png`;
      console.log(tries);
      break;
    case 3:
      img.scr = `img/ahorcado3.png`;
      console.log(tries);
      break;
    case 4:
      img.scr = `img/ahorcado4.png`;
      console.log(tries);
      break;
    case 5:
      img.scr = `img/ahorcado5.png`;
      console.log(tries);
      break;
    case 6:
      img.scr = `img/ahorcado6.png`;
      console.log(tries);
      break;
    default:
      img.scr = `img/ahorcado0.png`;
      console.log(tries);
  }
}

