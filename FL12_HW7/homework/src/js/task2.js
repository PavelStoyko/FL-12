let playConfirm = confirm('Do you want to play a game?');
let numberRange = 8;
let numberRangeStep = 4;
let prizeMultiplication = 2;
let prize = 100;
let totalPrize = 0;
let playAgainConfirm = true;
if (!playConfirm){
    alert('You did not become a billionaire, but can.');
} else{
    while (playAgainConfirm){
        let number = Math.floor(Math.random()*numberRange);
        let isGuess = false;
        for (let i=0; i<3; i++){
            if(i===1){
                prize = prize/prizeMultiplication;
            } else if (i===2){
                prize = prize/prizeMultiplication;
            }
            let guess = +prompt(`Choose a roulette pocket number from 0 to ${numberRange}
                          Attempts left: ${3-i}
                                total prize: ${totalPrize}$
                                Possible prize on current attempt: ${prize}$     
                                ${number}      
                        `);
            if(guess === number){
                isGuess = true;
                totalPrize = totalPrize+prize;
                break;
            }
        }
        if (isGuess){
            let continueGame = confirm(`Congratulation, you won! Your prize is: ${totalPrize}$. Do you want to continue?`);
            if(!continueGame){
                alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
                playAgainConfirm = confirm('Do you want to play again?');
            } else{
                numberRange = numberRangeStep + numberRange;
                prize = prize*prizeMultiplication;
                playAgainConfirm = true;
            }
        } else {
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
            playAgainConfirm = confirm('Do you want to play again?');
        }
    }
}