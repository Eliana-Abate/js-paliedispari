/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var userWord = checkPalindrome();
console.log(userWord);

var result = isPalindrome(userWord);
console.log(userWord + ' è palindroma? ' + result);


function checkPalindrome (word) {
    word = prompt('Inserisci una parola');

    return word;
}



function isPalindrome(emme) {

    var em = Math.floor(emme.length / 2);
    console.log(em);

    for (var i = 0; i < em; i++) {

      if (emme[i] !== emme[emme.length - i - 1]){
      return false;
      } 

    } 
    return true;
  } 


 