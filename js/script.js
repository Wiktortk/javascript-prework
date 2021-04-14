let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

let playerMove = getMoveName(playerInput);

console.log('Wylosowana liczba to: ' + randomNumber);

console.log('Gracz wpisał: ' + playerInput);

printMessage('Mój ruch to: ' + computerMove);
    
printMessage('Twój ruch to: ' + playerMove);

printMessage('Wynik to : ' + displayResult(computerMove, playerMove));