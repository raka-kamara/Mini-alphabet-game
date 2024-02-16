


function handleKeyboardButtonPress(event){
    const playerPressed = event.key;

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

        setTextElementValueById('current-score', updatedScore);

         removeBackgroundColorById(expectedAlphabet);
        continueGame();
     }
     else{
        console.log('Oh no!!');

       const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;

        setTextElementValueById('current-life', updatedLife);

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
    hidElementById('home-screen');
    hidElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);
    continueGame()
}

function gameOver(){
    hidElementById('play-ground');
    showElementById('final-score');

    // update final score
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('game-score', lastScore);

    // clear last alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}