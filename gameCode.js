var yours;
var theirs;
var yourScore=0;
var theirScore=0;
var rounds=0;
function game(){

  var cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var used= [];
  let i= cards.length;
  j=0;
shuffle();
//  while (i--) {
//    j = Math.floor(Math.random() * (i+1));
//    used.push(cards[j]);
//    cards.splice(j,1);
//console.log(cards.length);
}
function shuffle(cards) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function score(){
  if(yours>=5){
  theirs=yours-1;
}
if(yours<=5){
theirs=yours+1;
}

if(yours>theirs){
  yourScore++;
  console.log(yours)
  document.getElementById("score").innerHTML = yourScore;
  }
  else if(yours<theirs){
    theirScore++;
    document.getElementById("score1").innerHTML = theirScore;
  }
  else{
    yours;
    theirs;
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




function showCard(){
var image=document.getElementById(img2);
image.src='twoofhearts.jpg';

}

function one(){
yours=1;
rounds++;
document.getElementById("One").disabled = true;
score();
}
function two(){
yours=2;
rounds++;
document.getElementById("Two").disabled = true;
score();
}
function three(){
yours=3;
rounds++;
document.getElementById("Three").disabled = true;
score();
}
function four(){
yours=4;
rounds++;
document.getElementById("Four").disabled = true;
score();
}
function five(){
yours=5;
rounds++;
console.log(yours)
document.getElementById("Five").disabled = true;
score();
}
function six(){
yours=6;
rounds++;
console.log(yours)
document.getElementById("Six").disabled = true;
score();
}
function seven(){
yours=7;
rounds++;
document.getElementById("Seven").disabled = true;
score();
}
function eight(){
yours=8;
rounds++;
document.getElementById("Eight").disabled = true;
score();
}
function nine(){
yours=9;
rounds++;
document.getElementById("Nine").disabled = true;
score();
}
function ten(){
yours=10;
rounds++;
document.getElementById("Ten").disabled = true;
score();
}

