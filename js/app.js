/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const input = document.getElementsByClassName('key');
const startButton = document.getElementById('btn__reset');


/* Event listener that starts the game once the button is pressed.
   Resets the game whenever the button is pressed
   So lives/chances are full again
*/
startButton.addEventListener('click', () =>{
    game = new Game();
    game.resetGame();
    game.startGame();
    document.addEventListener('keydown', game.handleInteraction);
    for(let i = 0; i < input.length; i++){
        input[i].addEventListener('click', game.handleInteraction);
    }
});



