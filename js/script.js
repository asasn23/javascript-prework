// variables
var computerMove;
var playermove;
var randomNumber;
var playerInput;

// random number
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);

// computer move
if (randomNumber == '1') {
    computerMove = 'kamień';
  } else  if (randomNumber == '2') {
    computerMove = 'papier';
  } else {
    computerMove = 'nożyce';
  }

// player move
playerInput = prompt('Wybierz swój ruch! 1: Kamień, 2: Papier, 3: Nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playermove = 'kamień';
} else  if (playerInput == '2') {
  playermove = 'papier';
} else if (playerInput == '3') {
  playermove = 'nożyce';
} else {
  playermove = 'Wybrałeś liczbę inną niż 1,2,3...'
}

// print results
printMessage('Zagrałem ' + computerMove + '! Twój ruch to ' + playermove);