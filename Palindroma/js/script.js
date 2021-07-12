/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

userWord = checkPalindrome();

var result = isPalindrome(userWord);
console.log(userWord + 'è palindroma?' + return);


function checkPalindrome (word) {
    word = prompt('Inserisci una parola');

    return word;
}




function isPalindrome(emme) {
    isPalindrome = false;

    var em = Math.floor(emme.length / 2);

    for (var i = 0; i < em; i++)
      if (emme[i] === emme.length - i - 1)
      return true;
  } 


 