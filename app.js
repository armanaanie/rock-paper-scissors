let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random() * 3);
    return options[randIdx];
}
const msg=document.querySelector("#msg")
const showWinner=(userWin ,userChoice,compChoice )=>{
    userScore++;
    userScorePara.innerText=userScore;
    if(userWin){console.log("you win")
        msg.innerText=`You win!Your ${userChoice} beats ${compChoice}.`;
    msg.style.backgroundColor="green"
    }
    else{
       compScore++;
    compScorePara.innerText=compScore; 
        console.log("try again")
        msg.innerText=`Opps! ${compChoice} beats your ${userChoice}.`;
        msg.style.backgroundColor="red"
    }
}
const drawGame= () =>{
    console.log("game was draw")
}
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=",compChoice);

if(userChoice===compChoice){
    drawGame();
    msg.innerText="It's draw!Try Again!"
    msg.style.backgroundColor="yellow"
}else{
    let userWin =true;
    if(userChoice==="rock"){
       userWin= compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }else{userWin=compChoice==="rock"?false:true}
    showWinner(userWin,userChoice,compChoice);
}}



choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute("id");
     playGame(userChoice)
    })
})


