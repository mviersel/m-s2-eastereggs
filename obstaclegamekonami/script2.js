// FIRST HALF
const pressed = [];
const secretCode = 'enorm';
var audio = new Audio('nobullshit.mp3');
var codewordEntered = false; // Flag to track whether the codeword has been entered

// Event listener for keyup events on the window
window.addEventListener('keyup', e => {
    pressed.push(e.key);
    pressed.splice(0, pressed.length - secretCode.length);

    const word = pressed.join('');
    console.log(pressed);
    const game = document.getElementById('achtergrond');

    if (word === secretCode && !codewordEntered) {
        game.style.visibility = 'visible';
        codewordEntered = true; // Set the flag to true after the codeword is entered
        startGame(); // Call the function to start the game
    } else {
        game.style.visibility = 'hidden';
    }

    if (word === secretCode) {
        console.log('DIT IS ENORM!');
        audio.play();
    }
});

// SECOND HALF
// Encapsulate the game-related code in a function
function startGame() {
    var gameElement = document.createElement("div");
    gameElement.id = "game";
    document.getElementById("main").appendChild(gameElement);

    var characterElement = document.createElement("div");
    characterElement.id = "character";
    gameElement.appendChild(characterElement);

    var obstacleElement = document.createElement("div");
    obstacleElement.id = "obstacle";
    gameElement.appendChild(obstacleElement);

    var tekstElement = document.createElement("div");
    tekstElement.id = "tekst";
    tekstElement.innerHTML = "Klik met je muis om te springen";
    document.getElementById("main").appendChild(tekstElement);

    var character = document.getElementById("character");
    var obstacle = document.getElementById("obstacle");
    var resultDiv = document.getElementById("result");

    var score = 0;
    var obstacleScored = false;

    // Event listener for character click to trigger jumping
    document.addEventListener('click', function () {
        spring();
    });

    function spring() {
        if (character.classList != "animate") {
            character.classList.add("animate");
        }
        setTimeout(function () {
            character.classList.remove("animate");
        }, 500);
    }

    var checkDead = setInterval(function () {
        // Only start the obstacle animation if the codeword has been entered
        if (codewordEntered) {
            var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
            var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
    
            if (obstacleLeft < 35 && obstacleLeft >= 1 && characterTop >= 130) {
                obstacle.style.animation = "none";
                obstacle.style.display = "none";
                resultDiv.textContent = "Je bent geraakt! Score: " + score;
            } 
            else if (obstacleLeft <= 5) {
                score++;  // Increment the score only when the obstacle is avoided
                console.log(score);
                obstacleScored = true;
                obstacle.style.animation = "obstacle 1.5s infinite linear"; // Restart obstacle animation
                obstacle.style.display = "block"; // Make obstacle visible again
            }
    
            if (obstacleLeft < -5) {
                obstacleScored = false;

            }
            
            // Update the score in real-time
            resultDiv.textContent = "Score: " + score;
        }
    }, 40);
        
}
