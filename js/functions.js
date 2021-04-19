function printMessage(msg) {
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

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

function playGame(playerInput) {   
    
    clearMessages();   

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    const computerMove = getMoveName(randomNumber);

    const playerMove = getMoveName(playerInput);

    console.log('Wylosowana liczba to: ' + randomNumber);

    console.log('Gracz wpisał: ' + playerInput);

    printMessage('Mój ruch to: ' + computerMove);
        
    printMessage('Twój ruch to: ' + playerMove);

    printMessage('Wynik to : ' + displayResult(computerMove, playerMove));
} 