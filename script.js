let gameImg = document.getElementsByClassName('gameimg')

let playerPick = 0;
let playerScore = 0;
let robotPick = 0;
let robotScore = 0;
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
    let resultMessage = document.getElementById('messageResult')
    if(winner === 0) {
        resultMessage.innerHTML = 'DRAW';
    } else if(winner === 1) {
        resultMessage.innerHTML = 'Yoshimi WINS !!!';
        playerScore++;
        document.getElementById('player-score').innerHTML = `Score: ${playerScore}`
    } else if (winner === 2) {
        resultMessage.innerHTML = 'Bad Robot WINS !!!';
        robotScore++;
        document.getElementById('robot-score').innerHTML = `Score: ${robotScore}`
    }
}

for(let i = 0; i < gameImg.length; i++) {
    // Image fades when user hovers over it
    // gameImg[i].addEventListener('mouseenter', function() {
    //     gameImg[i].style.opacity = '0.2';
    // })
    // gameImg[i].addEventListener('mouseleave', function() {
    //     gameImg[i].style.opacity = '1.0';
    // })

    gameImg[i].style.opacity = '0.2'
    // Adding click event to player's options
    gameImg[i].addEventListener('click', function(element) {
        let tempId = element.target.parentNode.id;
        let tempPick = tempId.split('-')[0];
        
        if (tempPick === 'player') {
            // All images will have their opacity reduced,
            // but the ones that were selected (player/robot)
            for(let j = 0; j < gameImg.length; j++) {
                gameImg[j].style.opacity = '0.2';
            }

            playerPick = tempId.split('-')[2];
            document.getElementById('player-pick-' + playerPick).firstChild.style.opacity = '1.0'

            // Randomizes robot's play everytime the player plays!
            robotPick = Math.floor((Math.random() * 3) + 1)
            document.getElementById('robot-pick-' + robotPick).firstChild.style.opacity = '1.0'

            console.log('Yoshimi picks', playerPick);
            console.log('Robot picks', robotPick);
            
            whoWins(gameLogic(playerPick, robotPick));
            console.log('-----------------------------');
        } else {
            // Player is not able to select from the Robot's side
            alert('You are NOT the Robot!');
        }
    })
}
