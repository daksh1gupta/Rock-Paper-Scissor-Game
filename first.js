let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector(".msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

const gencompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const playgame = (userChoice) => {
    console.log("user choise is: ", userChoice);
    const compChoice = gencompChoice();
    console.log("comp choise is: ", compChoice);

    if(userChoice === compChoice){
        // draw condition
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "Rock"){
            // comp has choices 1) paper 2) scissors
            userWin = compChoice === "Paper" ? false : true;
        }else if(userChoice === "Paper"){
            // comp has choices 1) scissors 2) rock
            userWin = compChoice === "Scissors" ? false : true;
        }else{
            // comp has choices 1) rock 2) paper
            userWin = compChoice === "Rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
}

const drawGame = () => {
    console.log("Game was draw. ");
    msg.innerText = "Game was draw, play again";
    msg.style.backgroundColor = "#081b31";
}

const showWin = (userWin, userChoice, compChoice) => {
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        console.log("User Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    }else{
        compscore++;
        compScorePara.innerText = compscore;
        console.log("Comp lose");
        msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}. `;
        msg.style.backgroundColor = "red";
    }
}
