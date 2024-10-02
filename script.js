const rockChoice=document.getElementById("rock");
const paperChoice=document.getElementById("paper");
const scissorsChoice=document.getElementById("scissors");
const playerScoreText=document.getElementById("player-score");
const computerScoreText=document.getElementById("computer-score");
const result=document.getElementById("result-text");
const restartBtn=document.getElementById("reset-btn")
const choices=["Rock","Paper","Scissors"];

let playerScore=0;
let computerScore=0;
let gameEnded=false;
function computerResult(){
    let choiceNum;
    choiceNum=Math.floor(Math.random()*3);
    return choices[choiceNum];
}

function hasPlayerWon(playerChoice,computerChoice){

    if(computerChoice==="Rock" && playerChoice==="Paper" || computerChoice==="Paper" && playerChoice==="Scissors" ||computerChoice==="Scissors" && playerChoice==="Rock"){
        return true;
    }
}

function winGame(playerScore,computerScore){
    if(playerScore===3){
        result.innerText="Player Won!!";
        console.log(restartBtn);
        console.log(restartBtn.dis)
        restartBtn.style.display = "block";
        gameEnded=true;
    }
    if(computerScore===3){
        result.innerText="Computer Won!!";
        console.log(restartBtn);
        restartBtn.style.display = "block";
        gameEnded=true;

    }
    
}

function showResult(playerChoice){
    if (gameEnded) return;
let computerChoice=computerResult();

    if(hasPlayerWon(playerChoice,computerChoice)){
        playerScore++;
        playerScoreText.innerText=playerScore;
        result.innerText=`Player won this round!! ${playerChoice} beats ${computerChoice}.`
    }
    else if(playerChoice===computerChoice){
        result.innerText=`Draw!! Both chose ${playerChoice}.`
    }
    else{
        computerScore++;
        computerScoreText.innerText=computerScore;
        result.innerText=`Computer won this round!! ${computerChoice} beats ${playerChoice}.`
    }
    winGame(playerScore,computerScore)
}

function allClear(){
    playerScore=0;
    computerScore=0; 
    

    playerScoreText.innerText = playerScore;
    computerScoreText.innerText = computerScore;
    result.innerText="Start Playing."
    gameEnded = false; // Reset game state

    restartBtn.style.display = "none"; 
}


rockChoice.addEventListener("click",()=>{
    showResult(choices[0]);
});
paperChoice.addEventListener("click",()=>{
    showResult(choices[1]);
});
scissorsChoice.addEventListener("click",()=>{
    showResult(choices[2]);
});

restartBtn.addEventListener("click",()=>{
    allClear();
});