/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */ 



//! VARIABLES 

var choice = evenOddChoice();

var numberChoice = getNumber();

var computerChoice = computerRandom();

var sumResult = sumTotal(numberChoice, computerChoice);
console.log('La somma del numero scelto dall\'utente e del numero scelto dal computer è: ' + sumResult);

var sumCheck = isEven(sumResult);
console.log('La somma dei due numeri è pari? ' + sumCheck);




//! FUNCTIONS 

function evenOddChoice(userChoice) {
    
    userChoice = prompt('Scegli: pari o dispari?').toLowerCase();
    
    while (userChoice != 'pari' && userChoice != 'dispari') {
        userChoice = prompt('Scegli: pari o dispari?').toLowerCase();
    }

    console.log('L\'utente ha scelto: ' + userChoice); 
    return userChoice;
  }



function getNumber(userNumber) {
    
    userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

    while (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
      userNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));
    }
  
    console.log('Il numero scelto dall\'utente è: ' + userNumber);
    return userNumber;
  }



function computerRandom (computerNumber) {

    computerNumber = Math.floor(Math.random() * 5) + 1;
    console.log('Il numero scelto dal computer è: ' + computerNumber);

    return computerNumber;
}


function sumTotal (num1, num2) {
    var sum = num1 + num2;
    
    return sum;
}

function isEven(sum) {
    if (sum % 2 === 0) {
      
      return true;
    }
    return false;
  }



//! PRINT IN HTML

var displayUserChoice = document.getElementById('user-choice');
displayUserChoice.innerHTML = 'L\'utente ha scelto: ' + choice;

var displayUserNumber = document.getElementById('user-number');
displayUserNumber.innerHTML = 'Il numero scelto dall\'utente è: ' + numberChoice;

var displayComputerNumber = document.getElementById('computer-choice');
displayComputerNumber.innerHTML = 'Il numero generato dal computer è: ' + computerChoice;

var displaySumCheck = document.getElementById('sum-check');
var displayWinner = document.getElementById('winner');



//! CONDITIONS

if (sumCheck) {
    displaySumCheck.innerText = 'La somma dei due numeri è pari: ' + sumResult;
} else {
    displaySumCheck.innerText = 'La somma dei due numeri è dispari: ' + sumResult;
}


if (sumCheck && choice === 'pari') {
    displayWinner.innerText = 'Hai vinto!';
} else if (sumCheck === false && choice === 'dispari') {
    displayWinner.innerText = 'Hai vinto!';
} else {
    displayWinner.innerText = 'Hai perso!';
}



