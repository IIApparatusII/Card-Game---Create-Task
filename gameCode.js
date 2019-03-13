var yours;
var theirs;
var yourScore=0;
var theirScore=0;
var rounds=0;
var shuffled=false;
var shuffledCards=[];

var aceHearts="Hearts/aceHearts.jpg"
var twoHearts="Hearts/twoHearts.jpg"
var threeHearts="Hearts/threeHearts.jpg"
var fourHearts="Hearts/fourHearts.jpg"
var fiveHearts="Hearts/fiveHearts.jpg"
var sixHearts="Hearts/sixHearts.jpg"
var sevenHearts="Hearts/sevenHearts.jpg"
var eightHearts="Hearts/eightHearts.jpg"
var nineHearts="Hearts/nineHearts.jpg"
var tenHearts="Hearts/tenHearts.jpg"

var enemyDeck= [aceHearts, twoHearts, threeHearts, fourHearts, fiveHearts, sixHearts, sevenHearts, eightHearts, nineHearts, tenHearts];

//Order of Events
//1. Gives instructions
//2. Pick first card, assigned to yours (log yours) DONE
//3.Opponent cards are shuffled (log cards, shuffled cards) DONE
//4.New shuffled array is saved (log new array to check) DONE
//5.First value in array is chosen (log first value), and then assigned to theirs (log theirs)DONE
//6.First value is removed (log shuffledCards after shift)DONE
//7.Evaluate whether theirs or yours is larger, change score accordingly DONE
//8.Variable shuffled is set to true (log value of shuffled)DONE
//9.When choosing second card, program skips shuffle and goes straight to round (shuffledCards should now have 8 values)

//function choose(){
//  console.log(shuffled)
//  if(shuffled=0){
//    game();
//  }
//  else{
//    round(shuffledCards);
//  }
//}
////////FIRST ROUND///////


function game(){
  var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log("shuffled:" + shuffled)


//  if(shuffled=false){
  shuffle(cards);
//  }
//  else if(shuffled=true){
//    round(shuffledCards);
//  }
}

function shuffle(cards) {
  var m = cards.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = cards[m];
    cards[m] = cards[i];
    cards[i] = t;
  }
  shuffled=true;
  console.log(cards)
   shuffledCards= cards;
  console.log(shuffledCards)
  round(shuffledCards);
}
////////////////////////////

////////EVERY ROUND///////
function round(shuffledCards){
  theirs=(shuffledCards[0]);
  console.log("theirs:" + theirs);
  shuffledCards.shift();
  console.log(shuffledCards)
  shuffled=true;
  showCard(theirs);
}

function showCard(theirs){

document.getElementById('enemie').src= enemyDeck[theirs-1];
console.log("The computer is reading function showCard")
console.log("Theirs-1: " + (Number(theirs)-1))
console.log(enemyDeck[theirs-1])

  score();
}


function score(){
if(yours>theirs){
  yourScore++;
  console.log("yours:" + yours)
  console.log(shuffled)
  document.getElementById("score").innerHTML = yourScore;
  }
  else if(yours<theirs){
    theirScore++;
    console.log("yours:" + yours)
    console.log(shuffled)
    document.getElementById("score1").innerHTML = theirScore;
  }
  else if(yours=theirs){
    console.log("yours:" + yours)
    console.log(shuffled)
    yourScore;
    theirScore;
  }

if(rounds>9){
    results();
  }
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

function disappearOne(){
 document.getElementById("One").className= "show";
 document.getElementById('mine').src= "Spades/aceSpades.png";
}
function disappearTwo(){
 document.getElementById("Two").className= "show";
 document.getElementById('mine').src= "Spades/2spades.png";
}
function disappearThree(){
 document.getElementById("Three").className= "show";
 document.getElementById('mine').src= "Spades/3spades.png";
}
function disappearFour(){
 document.getElementById("Four").className= "show";
 document.getElementById('mine').src= "Spades/4spades.png";
}
function disappearFive(){
 document.getElementById("Five").className= "show";
 document.getElementById('mine').src= "Spades/5spades.png";
}
function disappearSix(){
 document.getElementById("Six").className= "show";
 document.getElementById('mine').src= "Spades/6spades.png";
}
function disappearSeven(){
 document.getElementById("Seven").className= "show";
 document.getElementById('mine').src= "Spades/7spades.png";
}
function disappearEight(){
 document.getElementById("Eight").className= "show";
 document.getElementById('mine').src= "Spades/8spades.png";
}
function disappearNine(){
 document.getElementById("Nine").className= "show";
 document.getElementById('mine').src= "Spades/9spades.png";
}
function disappearTen(){
 document.getElementById("Ten").className= "show";
 document.getElementById('mine').src= "Spades/10spades.png";
}
////////////////////////////////


///ANIMATION/////

/////////

/// YOUR CARD FUNCTIONS///
function one(){
yours=1;
rounds++;
document.getElementById("One").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}


function two(){
yours=2;
rounds++;
document.getElementById("Two").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}


function three(){
yours=3;
rounds++;
document.getElementById("Three").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}


function four(){
yours=4;
rounds++;
document.getElementById("Four").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}

function five(){
yours=5;
rounds++;
console.log(yours)
document.getElementById("Five").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}

function six(){
yours=6;
rounds++;
console.log(yours)
document.getElementById("Six").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}

function seven(){
yours=7;
rounds++;
document.getElementById("Seven").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}

function eight(){
yours=8;
rounds++;
document.getElementById("Eight").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
//   round(shuffledCards);
 }
}

function nine(){
yours=9;
rounds++;
document.getElementById("Nine").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}

function ten(){
yours=10;
rounds++;
document.getElementById("Ten").disabled = true;
if(shuffled==false){
  game();
}
 else{
   round(shuffledCards);
 }
}
/////////////////
