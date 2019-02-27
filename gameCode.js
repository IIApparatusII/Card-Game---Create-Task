var yours;
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



function shuffle([cards]){
console.log("hello world");
console.log(cards[1]);

}

function one(){
yours=1;
document.getElementById("One").disabled = true;
}
function two(){
yours=2;
document.getElementById("Two").disabled = true;
}
function three(){
yours=3;
document.getElementById("Three").disabled = true;
}
function four(){
yours=4;
document.getElementById("Four").disabled = true;
}
function five(){
yours=5;
console.log(yours)
document.getElementById("Five").disabled = true;
}
function six(){
yours=6;
console.log(yours)
document.getElementById("Six").disabled = true;
}
function seven(){
yours=7;
document.getElementById("Seven").disabled = true;
}
function eight(){
yours=8;
document.getElementById("Eight").disabled = true;
}
function nine(){
yours=9;
document.getElementById("Nine").disabled = true;
}
function ten(){
yours=10;
document.getElementById("Ten").disabled = true;
}
