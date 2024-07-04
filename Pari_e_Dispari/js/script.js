// ----------PARI E DISPARI------------

//Dichiaro una variabile con un prompt per far scegliere all'utente se vuole giocare con il PARI o con il DISPARI

let pariDispari = prompt('Scegli "pari" o "dispari"')

//Dichiaro una variabile con un prompt per far inserire un numero all'utente da 1 a 5 facendo il parseInt del dato per averlo come intero e non come stringa

let numeroUser = parseInt(prompt('Scegli un numero da 1 a 5'))

//Creo una funzione il RETURN un numero generato randomicamente da 1 a 5 da assegnare successivamente come numero del computer

function numeroComputer () {
    return Math.floor(Math.random() * 5 + 1)
}

// Dichiaro una variabile somma per andare a sommare il numero dell'utente a quello randomico del PC

let numbAI = numeroComputer()
let somma = numeroUser + numbAI

// Dichiaro un flag per il numero PARI impostandolo a TRUE

// Creo una funzione per un IF per cambiare il flag in FALSE nel caso che la somma dei numeri sia DISPARI

//Con un IF dichiaro le 2 condizioni di vittoria dell'utente, ovvero che lui abbia scelto PARI e che il flag sia TRUE oppure che lui abbia scelto DISPARI e che il flag sia FALSE, altrimenti nell ELSE c'è la vittoria del PC.