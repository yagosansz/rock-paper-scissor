let gameImg = document.getElementsByClassName('gameimg')

let playerPick = 0;
let robotPick = 0;
let winner = -1; // 0: draw - 1: player wins, 2: robot wins

// 1 - Rock
// 2 - Paper
// 3 - Scissor
let gameLogic = function(playerOption, robotOption) {
    if((playerOption == 1 && robotOption == 1) || (playerOption == 2 && robotOption == 2) || (playerOption == 3 && robotOption == 3)) {
        winner = 0
    } else if(playerOption == 1 && robotOption == 3) {
        winner = 1
    } else if(playerOption == 2 && robotOption == 1) {
        winner = 1
    } else if(playerOption == 3 && robotOption == 2) {
        winner = 1
    } else {
        winner = 2
    }
    return winner;
}

let whoWins = function(winner) {
    let message = document.getElementById('messageResult')
    console.log('Winner ID:', winner)
    if(winner === 0) {
        message.innerHTML = 'DRAW';
    } else if(winner === 1) {
        message.innerHTML = 'Player WINS !!!';
    } else if (winner === 2) {
        message.innerHTML = 'Robot WINS !!!';
    }
}

for(let i = 0; i < gameImg.length; i++) {
    // Image fades when user hovers over it
    gameImg[i].addEventListener('mouseenter', function() {
        gameImg[i].style.opacity = '0.5';
    })
    gameImg[i].addEventListener('mouseleave', function() {
        gameImg[i].style.opacity = '1.0';
    })

    // Adding click event to player's options
    gameImg[i].addEventListener('click', function(element) {
        let tempId = element.target.parentNode.id;
        let tempPick = tempId.split('-')[0];
        if (tempPick === 'player') {
            playerPick = tempId.split('-')[2];
            // Randomizes robot's play everytime the player plays!
            robotPick = Math.floor((Math.random() * 3) + 1)
            console.log('Player picks', playerPick);
            console.log('Robot picks', robotPick);
            whoWins(gameLogic(playerPick, robotPick));
            console.log('-----------------------------');
        } else {
            // Player is not able to select from the Robot's side
            alert('You are NOT the Robot!');
        }
    })
}
