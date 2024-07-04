Ciao ragazzi, Esercizio di oggi:
nome repo: js-paliedispari
Palidroma
Chiedere all’utente di inserire una parola.
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente inserisce prima  "pari" o "dispari" poi inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Numero di push: 10 circa minimo
Errori da evitare
1 - Non effettuare la chiamata di funzione;
2 - Effettuare la chiamata di funzione in un console.log o in un alert ed assegnarlo ad una variabile
3 - Se la funzione ha il return non assegnare la chiamata di funzione ad una variabile
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento!

PALINDROMO

- Dichiaro una variabile con assegnato un prompt per far inserire all'utente la parola da controllare
- Dichiaro una variabile per assegnarla successivamente con il reverse della parola scelta
- dichiaro una funzione che ha come argomento la variabile della parola scelta dall'utente
- Faccio il reverse della parola e la comparo con un IF alla parola scelta. Se uguale mando a schermo che la parola è palindroma, altrimenti con ELSE mando che non lo è.

PARI E DISPARI

- Dichiaro una variabile con un prompt per far scegliere all'utente se vuole giocare con il PARI o con il DISPARI
- Dichiaro una variabile con un prompt per far inserire un numero all'utente da 1 a 5 facendo il parseInt del dato per averlo come intero e non come stringa
- Creo una funzione il RETURN un numero generato randomicamente da 1 a 5 da assegnare successivamente come numero del computer
- Dichiaro una variabile somma per andare a sommare il numero dell'utente a quello randomico del PC
- Dichiaro un flag per il numero PARI impostandolo a TRUE
- Creo una funzione per un IF per cambiare il flag in FALSE nel caso che la somma dei numeri sia DISPARI
- Con un IF dichiaro le 2 condizioni di vittoria dell'utente, ovvero che lui abbia scelto PARI e che il flag sia TRUE oppure che lui abbia scelto DISPARI e che il flag sia FALSE, altrimenti nell ELSE c'è la vittoria del PC.