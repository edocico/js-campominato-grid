console.log('ok')

// Recupero elementi dal DOM

const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)
const selectDOMElement = document.getElementById('difficulty-select')
console.log(selectDOMElement)
console.log(selectDOMElement.value)
const playBtnDOMElement = document.querySelector('.play-btn')
console.log(playBtnDOMElement)


playBtnDOMElement.addEventListener('click', function() {
    creaGriglia()
})



// funzione di generazione delle celle

// Questa funzione crea una griglia di celle con numeri progressivi
// Il numero di celle dipende dal valore selezionato dall'utente
// Il colore di sfondo delle celle cambia quando si clicca su di esse
function creaGriglia() {
    // Svuota il contenuto dell'elemento gridDOMElement
    gridDOMElement.innerHTML = "";
    // Ottieni il numero di celle dalla selezione dell'utente
    const cellNumber = parseInt(selectDOMElement.value);
    // Crea un ciclo for per generare le celle
    for (let i = 0; i < cellNumber; i++) {
      // Calcola il numero da inserire nella cella
      const n = i + 1;
      // Crea un elemento html per la cella con la classe appropriata in base al numero di celle
      let htmlCell = `<div class="grid-cell cell${cellNumber}">${n}</div>`;
      // Aggiungi l'elemento html al contenuto dell'elemento gridDOMElement
      gridDOMElement.innerHTML += htmlCell;
    }
    // Seleziona tutti gli elementi con la classe grid-cell
    const cellDOMElement = document.querySelectorAll(".grid-cell");
    // Crea un ciclo for per aggiungere un evento click a ogni cella
    for (let i = 0; i < cellDOMElement.length; i++) {
      // Ottieni l'elemento corrente dal ciclo
      const currentCellDOMElement = cellDOMElement[i];
      // Aggiungi una funzione anonima che cambia il colore di sfondo della cella quando si clicca su di essa
      currentCellDOMElement.addEventListener("click", function () {
        currentCellDOMElement.classList.add("bg-color");
      });
    }
  }
  