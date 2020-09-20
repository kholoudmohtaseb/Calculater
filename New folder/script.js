function insert(num){
 calculator.display.value = calculator.display.value + num; 
}

// result of operations
function equal(){
  var result = calculator.display.value;
  calculator.display.value = eval(result);
}


// clearing text-box 
function remove(){
 calculator.display.value = ""; 
}