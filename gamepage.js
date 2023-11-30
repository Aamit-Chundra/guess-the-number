// generation of random value
var y = Math.floor(Math.random()*10+1)
// count of attempts

// until hit

player_name = localStorage.getItem("player_name")

function submit(){

    var x = document.getElementById("guessField").value

if(x == y){

alert("CONGRATULATIONS!!!"+ player_name+" YOU GUESSED IT RIGHT IN"+ guess +"GUESS")

var guess = 1

}else if(x>y){

guess++;
alert("OPPS SORRY !! TRY A SMALLER NUMBER")

}else{

    guess++;
    alert("OPPS SORRY !! TRY A GREATER NUMBER")

}
}
  
// function for the number sent by the user


function playAgain(){

y = Math.floor(Math.random()*10+1)

}


