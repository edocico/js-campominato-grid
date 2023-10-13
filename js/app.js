console.log('ok')

// Recupero elementi dal DOM

const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)
const selectDOMElement = document.getElementById('difficulty-select')
console.log(selectDOMElement)
console.log(selectDOMElement.value)
const playBtnDOMElement = document.querySelector('.play-btn')
console.log(playBtnDOMElement)
/* const cellNumber = parseInt(selectDOMElement.value)
console.log(cellNumber) */

playBtnDOMElement.addEventListener('click', function() {
    gridDOMElement.innerHTML = ''
    const cellNumber = parseInt(selectDOMElement.value)
    console.log(cellNumber)
    for (let i = 0; i < cellNumber; i++) {
        const n = i + 1
        let htmlCell 
        if (cellNumber === 100) {
            let htmlCell = `<div class="grid-cell cell100">${n}</div>`
            console.log(htmlCell)
            gridDOMElement.innerHTML += htmlCell
        } else if (cellNumber === 81) {
            let htmlCell = `<div class="grid-cell cell81">${n}</div>`
            console.log(htmlCell)
            gridDOMElement.innerHTML += htmlCell
        } else if (cellNumber === 49) {
            let htmlCell = `<div class="grid-cell cell49">${n}</div>`
            console.log(htmlCell)
            gridDOMElement.innerHTML += htmlCell
        }
        
    }
    const cellDOMElement = document.querySelectorAll('.grid-cell')
    console.log(cellDOMElement)
    for (let i = 0; i < cellDOMElement.length; i++) {
        const currentCellDOMElement = cellDOMElement[i]
        currentCellDOMElement.addEventListener('click', function() {
            currentCellDOMElement.classList.add('bg-color')
        })
    }  
})



// funzione di generazione delle celle

/* function cellGeneration(iNumber) {
    
    for (let i = 0; i < iNumber; i++) {
        const n = i + 1
        // let htmlCell
        if (iNumber === 100) {
            let htmlCell = `<div class="grid-cell cell100">${n}</div>`
            gridDOMElement.innerHTML += htmlCell
        } else if (iNumber === 81) {
            let htmlCell = `<div class="grid-cell cell81">${n}</div>`
            gridDOMElement.innerHTML += htmlCell
        } else if (iNumber === 49) {
            let htmlCell = `<div class="grid-cell cell49">${n}</div>`
            gridDOMElement.innerHTML += htmlCell
        }
        
    }
    return  gridDOMElement.innerHTML += htmlCell

    /* cellDOMElements = document.querySelectorAll('.grid-cell')

    for (let i = 0; i < cellDOMElements.length; i++) {
        const currentCellElement = cellDOMElements[i]
    }  */
//} */