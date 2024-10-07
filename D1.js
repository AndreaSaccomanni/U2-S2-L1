/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*Ci sono tre datatype principali in JavaScript: 
 il dato stinga, il dato numerico e il dato booleano.
-Le stringhe di testo sono valori letterali, quindi sequenza di caratteri che vanno scritti tra apici, singoli o doppi.  
Possono contenere anche numeri, ma verrano considerati comunque come caratteri testuali.
-Il dato numerico comprende i numeri interi e i float, ossia i decimali, + ∞ e - ∞ e non ha bisogno di apici.
-I valori booleani ammettono solamente due tipi di risposta: true o false. Vengono utilizzati per verificare una condizione e far prendere delle decisioni al nostro codice.*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let myname = "Andrea";
console.log("myname: " + myname);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let a = 12;
let b = 20;
let somma = a + b;
console.log("la somma è: " + somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log("Il valore di x è : " + x);
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
myname = "Saccomanni";
console.log("Nuovo valore della variabile myname: " + myname);
/*IMPOSSIBILITA' DI RIASSEGNARE UN VALORE AD UNA VARIABILE DICHIARATA CON IL COSTRUTTO CONST
const nome = "Marco";
nome = "Filippo";
console.log(nome); ===> Uncaught TypeError: Assignment to constant variable.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let sottrazione = 4 - x;
console.log("La differenza tra 4 ed x è: " + sottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "john";
let name2 = "John";
console.log("variabile");
/*if (name1 === name2) {
  console.log("le due variabili sono uguali");
} else {
  console.log("le due variabili sono diverse");
}*/
let verificaComparazione = name1 === name2 ? "Le due variabili sono uguali" : "Le due variabili sono diverse perchè sono Case Sensitive";
console.log(verificaComparazione);
name2 = name2.toLowerCase();
console.log("Ora name2 è diventato: " + name2);
console.log("Ora le due variabili sono diventate uguali? " + (name1 === name2));
