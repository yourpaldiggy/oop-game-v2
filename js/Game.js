/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
        this.activeGame = true;
    }

    createPhrases(){
        const phrase = [
            new Phrase( 'may the force be with you'),
            new Phrase( 'offence is the best defense'),
            new Phrase('as thick as thieves'),
            new Phrase('cut and run'),
            new Phrase('learn the ropes')
        ];

        return phrase;

    }

    // Randomly selects a phrase from the array
    getRandomPhrase() {
        let random = Math.floor(Math.random() * this.phrases.length);
        let quote = this.phrases[random];
        return quote;


    };

    startGame(){
        // Hides the title screen to begin the game
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();

        

    };
    // Checks to see if you've completed phrase within the chance limit
    checkForWin(){
        const hiddenLetters = document.getElementsByClassName('hide letter');
        return hiddenLetters.length === 0 ? true:false;
        

    }
    // Removes a heart from the screen when a chance has been used incorrectly
    removeLife(){
        let chances = document.getElementById('scoreboard').firstElementChild.children;
        chances[this.missed].innerHTML = `
            <li class="tries"><img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30"></li>`;
        this.missed++;
        

    }

    gameOver(gameWon){
        const header = document.getElementById('game-over-message');
        const overlay = document.getElementById('overlay');
        overlay.style.display = '';
        let endingScreen = '';
        if(gameWon){
            endingScreen = 'You Won, Congrats!';
            overlay.classList.add('win');
            overlay.classList.remove('lose');

        } else{
            endingScreen = 'You Lost, Better Luck Next Time!';
            overlay.classList.add('lose');
            overlay.classList.remove('win');
        }
        header.textContent = endingScreen;
        this.activeGame = false;

    }
    // Deals with interaction with the on screen keyboard
    handleInteraction(e){

        if(game.activeGame){
            if(!e.key){
                e.target.disabled = true;
            
            if(game.activePhrase.checkLetter(e.target.textContent)){
                e.target.classList.add('chosen');
                game.activePhrase.showMatchedLetter(e.target.textContent);
            } else {
                e.target.classList.add('wrong');
                game.removeLife();
            }
        } else {
            for(let i = 0; i < input.length; i++){
                if(e.key === input[i].textContent){
                    input[i].disabled = true;
                    if(game.activePhrase.checkLetter(e.key)){
                        input[i].classList.add('chosen');
                        game.activePhrase.showMatchedLetter(e.key);
                    } else {
                        input[i].classList.add('wrong');
                        game.removeLife();
                    }
                }
            }
        }
        if(game.missed > 4){
            game.gameOver(false);
        } else {
            if(game.checkForWin()){
                game.gameOver(true);
            }
        }
    }
}
    // Win or lose, this makes the game playable after the game is over
resetGame(){
    this.activeGame = true;
    this.missed = 0;
    const phrase = document.getElementById('phrase').firstElementChild;
    phrase.textContent = '';
    for(let i = 0; i < input.length; i++){
        input[i].disabled = false;
        input[i].classList.remove('wrong');
        input[i].classList.remove('chosen');

    }
    let chances = document.getElementById('scoreboard').firstElementChild.children;
    for(let i = 0; i < chances.length; i++){
        chances[i].innerHTML = `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`;
    }

}


    
}