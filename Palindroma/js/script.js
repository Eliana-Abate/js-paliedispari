/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

var displayUserWord = document.getElementById('user-word');

var displayPalindromeCheck = document.getElementById('palindrome-check');



var userWord = checkPalindrome();
console.log(userWord);
displayUserWord.innerText = 'L\'utente ha scritto: ' + userWord;

var result = isPalindrome(userWord);
console.log(userWord + ' è palindroma? ' + result);



function checkPalindrome (word) {
    word = prompt('Inserisci una parola').toLowerCase();

    return word;
}



function isPalindrome(emme) {

    var em = Math.floor(emme.length / 2);
    console.log(em);

    for (var i = 0; i < em; i++) {

      if (emme[i] !== emme[emme.length - i - 1]){
        displayPalindromeCheck.innerText = 'La parola scelta dall\'utente non è palindroma';
        return false;
      } 

    } 
    displayPalindromeCheck.innerText = 'La parola scelta dall\'utente è palindroma';
    return true;
  } 


 