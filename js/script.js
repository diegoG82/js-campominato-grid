// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// CREO UNA GRIGLIA 10 X 10
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// DICHIARAZIONI

const numberOfsquares = 100;
// const numbers = numbersInOrder(numberOfsquares);

// GENERO LA GRIGLIA 10X10 AL CLICK DEL TASTO PLAY

const btnPlay = document.getElementById("startgame");

btnPlay.addEventListener("click", function () {
  const grid = document.querySelector(".grid");

  // reset previuos boxes
  grid.innerHTML = "";

  // quante celle devo generare

  for (let i = 1; i <= numberOfsquares; i++) {
    //   const currentNumber = numbers[i];
    const newItem = generateGridItem(i);
    grid.append(newItem);
  }
});

//////////////////////////////////////////

// FUNZIONE PER CREARE IL TESTO
function generateGridItem(number) {
// CREO UN NODO
  const newSquare = document.createElement("div");
// AGGIUNGO AL NODO LA CLASSE
  newSquare.classList.add("grid-item");
//   creo elemento span con il numero
newSquare.innerHTML = `<span>${number}</span>`;
// al click aggiungiamo la classe azure
  newSquare.addEventListener("click", function () {
    newSquare.classList.add("azure");
  });
  return newSquare;
}

// FUNZIONE PER COLORARE IL TESTO DI AZZURRO
function handleItemClick() {
  //   const clickedNumber = parseInt(this.querySelector("span").textContent);
  this.classList.add("azure");
}
