function playGame(playerInput) {   
    
    clearMessages()
     
   function getMoveName(computerMove) {
        if(computerMove == 1) {
            return 'kamień';
        } else if(computerMove == 2) {
            return 'papier';
        } else if(computerMove == 3) {
            return 'nożyce'; 
        } else{
            return 'nieznany ruch';
        }
    }

    function displayResult(computerMove, playerMove) {
        if( computerMove == 'kamień' && playerMove == 'papier') {
            return 'Ty wygrywasz!';
        } else if(computerMove == 'papier' && playerMove == 'nożyce') {
            return 'Ty wygrywasz!';
        } else if(computerMove == 'nożyce' && playerMove == 'kamień') {
            return 'Ty wygrywasz!';
        } else if(playerMove == 'papier' && computerMove == 'nożyce') {
            return 'Komputer wygrywa!';
        } else if(playerMove == 'nożyce' && computerMove == 'kamień') {
            return 'Komputer wygrywa!';
        } else if(playerMove == 'kamień' && computerMove == 'papier') {
            return 'Komputer wygrywa!';
        } else if(playerMove == 'papier' && computerMove == 'papier') {
            return 'Remis!';
        } else if(playerMove == 'nożyce' && computerMove == 'nożyce') {
            return 'Remis!';
        } else if(playerMove == 'kamień' && computerMove == 'kamień') {
            return 'Remis!';
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);

    //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

    let playerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Mój ruch to: ' + computerMove);
        
    printMessage('Twój ruch to: ' + playerMove);

    printMessage('Wynik to : ' + displayResult(computerMove, playerMove));
}  

document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3);
});