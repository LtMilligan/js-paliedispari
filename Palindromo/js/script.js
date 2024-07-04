// PALINDROMO

// Dichiaro una variabile con assegnato un prompt per far inserire all'utente la parola da controllare

let parola = prompt('Inserisci una parola');

// Dichiaro una variabile per assegnarla successivamente con il reverse della parola scelta

let reverseParola

// Dichiaro una funzione che ha come argomento la variabile della parola scelta dall'utente

function reverseString(parola) {
    // Faccio il reverse della parola e la comparo con un IF alla parola scelta. Se uguale mando a schermo che la parola è palindroma, altrimenti con ELSE mando che non lo è.
    reverseParola = parola.split('').reverse().join('')
    if (parola === reverseParola) {
        alert('La parola è palindroma')
    }else {
        alert('La parola NON è palindroma')
    }
}

reverseString(parola)
