var yours;
var theirs;
var yourScore=0;
var theirScore=0;
var rounds=0;

function game(){
  var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(cards)
  shuffle(cards);
}

function round(){
  theirs=shuffledCards[0];
  shuffledCards.shift();
  score();
}
function score(){
if(yours>theirs){
  yourScore++;
  console.log(yours)
  document.getElementById("score").innerHTML = yourScore;
  }
  else if(yours<theirs){
    theirScore++;
    document.getElementById("score1").innerHTML = theirScore;
  }
  else if(yours=theirs){
    yourScore;
    theirScore;
  }
if(rounds>9){
    results();
  }
}



function shuffle(cards) {
  var m = cards.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }
  console.log(cards)
  var shuffledCards= cards;
  console.log(shuffledCards)
  return shuffledCards;
}





function results(){
  if(yourScore>theirScore){
    window.alert("You Win!");
  }
  else if(yourScore<theirScore){
    alert("You Lose :(")
  }
  else{
    alert("Tie.")
  }
}




function showCard(){
var image=document.getElementById(img2);
image.src='twoofhearts.jpg';

}

function one(){
yours=1;
rounds++;
document.getElementById("One").disabled = true;
round();
}
function two(){
yours=2;
rounds++;
document.getElementById("Two").disabled = true;
round();
}
function three(){
yours=3;
rounds++;
document.getElementById("Three").disabled = true;
round();
}
function four(){
yours=4;
rounds++;
document.getElementById("Four").disabled = true;
round();
}
function five(){
yours=5;
rounds++;
console.log(yours)
document.getElementById("Five").disabled = true;
round();
}
function six(){
yours=6;
rounds++;
console.log(yours)
document.getElementById("Six").disabled = true;
round();
}
function seven(){
yours=7;
rounds++;
document.getElementById("Seven").disabled = true;
round();
}
function eight(){
yours=8;
rounds++;
document.getElementById("Eight").disabled = true;
round();
}
function nine(){
yours=9;
rounds++;
document.getElementById("Nine").disabled = true;
round();
}
function ten(){
yours=10;
rounds++;
document.getElementById("Ten").disabled = true;
round();
}
