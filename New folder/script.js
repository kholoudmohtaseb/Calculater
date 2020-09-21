

var zerobtn = document.getElementById("zerobtn");
var onebtn = document.getElementById("onebtn");
var twobtn = document.getElementById("twobtn");
var threbtn = document.getElementById("threbtn");
var fourbtn = document.getElementById("fourbtn");
var fivbtn = document.getElementById("fivbtn");
var sixbtn = document.getElementById("sixbtn");
var sevenbtn = document.getElementById("sevenbtn");
var eightbtn = document.getElementById("eightbtn");
var ninebtn = document.getElementById("ninebtn");
var dotbtn = document.getElementById("decimal");
var cbtn = document.getElementById("clear")

var numbtn = document.getElementsByClassName("btn-num");
var operatorbtn = document.getElementsByClassName("btn-operator");


function insert(val){
 calculator.display.value = calculator.display.value + val ; 
}

function equal() { 

if (operatorbtn.value === "+") {  
result += calculator.numbtn.value ;  

} else if (operatorbtn.value === "*") {  
result *= calculator.numbtn.value;  
  
} else if (operatorbtn.value === "-") {  
result -= calculator.numbtn.value  
  
} else if (operatorbtn.value === "/") {   
result /= calculator.numbtn.value; 
}
}

// clearing text-box 
function remove(){
calculator.display.value = ""; 
}