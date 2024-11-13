// Declaración de variables
var tries = 0;
let chosenWord = [];
var userName = document.getElementById("userName");
let users = [];
var userIterator = 0;
var divWord = document.getElementById("word"); 
var btnGenerateWord = document.getElementById("btnGenerateWord");
const btnAddUser = document.getElementById("btnAddUser");
const img = document.getElementById("img");
const usersTable = document.getElementById('usersTable');


// Función de reseteo de juego

function resetGame(){
  tries = 0;
  chosenWord = [];
  users = [];
  userIterator = 0;
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

//Añadir usuarios al juego
btnAddUser.addEventListener('click', () => {
  // Función para añadir usuarios
  const newUser = userName.value;
  users.push(newUser);

  const newRow = document.createElement('tr');
  const cell = document.createElement('td');
  cell.textContent = newUser;
  newRow.appendChild(cell);
  usersTable.appendChild(newRow);
  //Limpiar el imput
  userName.value = '';
  /*
  function addUser(){
    users[userIterator] = userName;
    userIterator++;
  }*/
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

