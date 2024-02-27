
const audio = new Audio();

let isGamePlayOn = false;

const artBoard = document.getElementById("artboard");

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

    if (isGamePlayOn == false) return;

    if(playerPressed === 'Escape'){
        gameOver();
      
    }
    
    // get random alphabet
     const currentAlphabetElement = document.getElementById('current-alphabet');
     const currentAlphabet = currentAlphabetElement.innerText;
     const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
     

     if(playerPressed === expectedAlphabet){
        console.log('You got a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;

        
        audio.src = "../audio/success.mp3";
        audio.play();

        

        setTextElementValueById('current-score', updatedScore);

         removeBackgroundColorById(expectedAlphabet);
        continueGame();
     }
     else{
        console.log('Oh no!!');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;

        const updatedLifePercentage = (updatedLife / 5) * 100;

        

        setTextElementValueById('current-life', updatedLife);

        audio.src = "../audio/wrong-answer.mp3";
        audio.play();

        if(updatedLife === 0){
            gameOver();
        }

         
     }

}

document.addEventListener('keyup', handleKeyboardButtonPress)







function continueGame(){
    const alphabet = getARandomAlphabet();

    console.log(alphabet)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //  set background color
     setBackgroundColorById(alphabet);  



      
}

function play(){

    isGamePlayOn = true;


    hidElementById('home-screen');
    hidElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame()
}

function gameOver(){

    isGamePlayOn = false;

    hidElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    // clear last alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}