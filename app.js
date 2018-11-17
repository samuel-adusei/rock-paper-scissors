let userScore = 0; // have to change this 
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
        
}



function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord  = "user".fontsize(3).sup();
    const smallCompWord  = "comp".fontsize(3).sup();

result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord} " you win "`;     
   }   


function lose(userChoice, compChoice) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord  = "user".fontsize(3).sub();
    const smallCompWord  = "comp".fontsize(3).sub();

result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord} " you loser "`;     
    
}

function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord  = "user".fontsize(3).sup();
    const smallCompWord  = "comp".fontsize(3).sup();

result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(compChoice)}${smallCompWord} " you draw "`;      
}


function game(userChoice) {
    const compChoice = getCompChoice();
    switch (userChoice + compChoice) {
    case "rs":
    case "pr":
    case "sp":
            
            win(userChoice, compChoice);
            break;
    case "rp":
    case "ps":
    case "sr":
            lose(userChoice, compChoice);
            break;
    case "rr":
    case "pp":
    case "ss":
            draw(userChoice, compChoice);
            break;
            
            
    }
}



// this is the main func
function main(){
rock_div.addEventListener('click', function(){
    game("r");
});
                        
paper_div.addEventListener('click', function(){
    game("p");
});
                        
scissors_div.addEventListener('click', function(){
    game("s");
                        
});
}

main();