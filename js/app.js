//console.log('ok')

// Recupero elementi dal DOM

const gridDOMElement = document.querySelector('.grid')

const selectDOMElement = document.getElementById('difficulty-select')

const playBtnDOMElement = document.querySelector('.play-btn')



playBtnDOMElement.addEventListener('click', function() {
    creaGriglia()
})



// funzione di generazione delle celle

// Questa funzione crea una griglia di celle con numeri progressivi
// Il numero di celle dipende dal valore selezionato dall'utente
// Il colore di sfondo delle celle cambia quando si clicca su di esse
function creaGriglia() {
    // Svuoto il contenuto dell'elemento gridDOMElement
    gridDOMElement.innerHTML = "";
    // Ottengo il numero di celle dalla selezione dell'utente
    const cellNumber = parseInt(selectDOMElement.value);
    // Creo un ciclo for per generare le celle
    for (let i = 0; i < cellNumber; i++) {
      // Calcolo il numero da inserire nella cella
      const n = i + 1;
      // Creo un elemento html per la cella con la classe appropriata in base al numero di celle
      let htmlCell = `<div class="grid-cell cell${cellNumber}">${n}</div>`;
      // Aggiungo l'elemento html al contenuto dell'elemento gridDOMElement
      gridDOMElement.innerHTML += htmlCell;
    }
    // Selezion tutti gli elementi con la classe grid-cell
    const cellDOMElement = document.querySelectorAll(".grid-cell");
    // Creo un ciclo for per aggiungere un evento click a ogni cella
    for (let i = 0; i < cellDOMElement.length; i++) {
      // Ottengo l'elemento corrente dal ciclo
      const currentCellDOMElement = cellDOMElement[i];
      // Aggiungo una funzione anonima che cambia il colore di sfondo della cella quando si clicca su di essa
      currentCellDOMElement.addEventListener("click", function () {
        currentCellDOMElement.classList.add("bg-color");
      });
    }
  }
  