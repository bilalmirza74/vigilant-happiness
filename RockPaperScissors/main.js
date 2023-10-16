var plyscore =0;
var comscore =0;
function myfunc(){
var userChoice = document.getElementById("input").value;
var uc =document.getElementById('pc');
  uc = uc.innerHTML = "You :" + " " + userChoice
var computerChoice = Math.random(); 
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} document.getElementById('ch').innerHTML = "Computer: " + computerChoice;

document.getElementById('result').innerHTML = compare(userChoice,computerChoice);
document.getElementById('input').value = "";
document.getElementById('pscore').innerHTML = "You : " + plyscore;
document.getElementById('cscore').innerHTML = "Computer : "  + comscore;
}
function compare(choice1, choice2){
if (choice1 == choice2){
    return "The result is a tie!";    
} else if (choice1 == "rock") {
    if (choice2 == "scissors"){
    	plyscore = plyscore+1;
        return "rock wins";
        
    } else {
    	comscore = comscore+1;
        return "paper wins";
    }
} else if (choice1 == "paper") {
    if (choice2 == "rock"){
    	plyscore = plyscore+1;
        return "paper wins";
    } else {
    	comscore = comscore+1;
        return "scissors wins";
    }
} else if (choice1 == "scissors") {
    if (choice2 == "rock"){
    	plyscore = plyscore+1;
        return "rock wins";
    } else {
    	comscore = comscore+1;
        return "scissors wins";
    }
}
}
function rest(){
  plyscore = 0;
  comscore = 0;
  document.getElementById('pscore').innerHTML = "You : "  + plyscore;
  document.getElementById('cscore').innerHTML = "Computer : "  + comscore;
}