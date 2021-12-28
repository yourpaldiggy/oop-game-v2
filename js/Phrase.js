/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();

    }


    /* Takes the randomly selected phrase and adds it
       As a hidden quote on the screen 
    */    
    addPhraseToDisplay(){

         const phraseDisplay = this.phrase.split('');

        phraseDisplay.forEach((letter) => {
        let eachLetter = document.createElement('li');
        eachLetter.classList = letter == " " ? "space" : "letter";
        eachLetter.classList.add('hide');
        eachLetter.textContent = letter;
        const parent = document.getElementById('phrase').firstElementChild;
        parent.appendChild(eachLetter);
        });
    }

    // Checks to see if the letter chosen is part of the phrase on screen
    checkLetter(letter){
        if(this.phrase.includes(letter)){
            return true;
            
        } else {
            return false;
        }
    
    }

    // If checkLetter() comes back true, shows the letter on screen
    showMatchedLetter(letter){
        const phrase = document.getElementById('phrase').firstElementChild.children;
        for(let i = 0; i < phrase.length; i++){
            if(phrase[i].textContent === letter){
               phrase[i].classList.add('show');
               phrase[i].classList.remove('hide');
            }
        }
        

    }
  

}