let die;
let first=getRandom();
let second=getRandom();
let dice=[first,second];
let sum = dice[0]+dice[1];
console.log(dice)
let hasBlack = false;
let isAlive = true;
let message = "";
let mesEl=document.getElementById("message");
let strBtn=document.getElementById("str-btn");
let sumEl = document.getElementById("sum");
let diceEl = document.querySelector("#dice");
let newBtn=document.getElementById("new-btn");

strBtn.addEventListener("click",startGame);

newBtn.addEventListener("click",newdie);

function getRandom(){
    return ( Math.floor( Math.random() * 10) + 1 );
}

function startGame(){
    if(isAlive==true && hasBlack==false){
        diceEl.textContent="dice : " ;
        for(let i=0;i<dice.length;i++){
            diceEl.textContent += dice[i] +" ";
        }
        sumEl.textContent="Sum : " + sum ;
        if(sum < 21){
            message = "Roll the dice";
        }
        else if(sum == 21){
            message = "Hurrah! You have got a Blackjack";
            hasBlack = true ;
        }
        else{
            message = "You are out of the game !";
            isAlive = false;
        }
        mesEl.innerHTML=message;
    }
    else{
        dice=[first,second];
        sum = dice[0]+dice[1];
        hasBlack = false;
        isAlive = true;
        message = "";
        startGame();
    }
}

function newdie(){
    if(isAlive==true && hasBlack==false){
        die=getRandom();
        sum+=die;
        dice.push(die);
        startGame();
    }
    else if(isAlive==false){
        message="Oh no! you lose <br> Want to start the game again ?";
    }
    else if(hasBlack==true){
        message="You won!!! <br> Start the game again..."
    }
    mesEl.innerHTML=message;
   
}