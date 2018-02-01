var numString = "";
var operations = [];
var index = 0;
var resultFlag = false;

/*
*This function is triggered when a number is pressed on the
*calculator.
*
*@param num the number that was pressed
*/
function number(num){
  if(resultFlag){
    air();
    resultFlag = false;
  }
  document.getElementById("display").innerHTML = "";
  numString = numString + num;
  updateNumString();
  operations[index] = numString;
  updateOperations();
}

/*
*This function is triggered when an operator is pressed on the
*calculator.
*
*@param op the operator that was pressed (+, -, x, or ÷)
*/
function operation(op){
  if(resultFlag){
    var result = document.getElementById("display").innerHTML;
    air();
    operations.push(result);
    document.getElementById("display").innerHTML = result;
    resultFlag = false;
  }
  operations.push(op);
  updateOperations();
  index = index + 2;
  numString = "";
}

/*
*This function is triggered when the percent button is pressed on the
*calculator.
*
*@purpose divides the current displayed number by 100
*/
function percent(){
  if(operations.length != 0 && !resultFlag){
    var num = parseFloat(numString);
    num = num / 100;
    numString = num.toString();
    updateNumString();
    operations.pop();
    operations.push(num);
    updateOperations();
  }
}

function decimal(){
  alert("decimal");
}

/*
*@purpose updates the display of the current operation chain in
*the display window of the calculator
*/
function equals(){
  var postfix = toPostfix(operations);
  var result = evaluatePostfix(postfix);
  var display = document.getElementById("display");
  display.innerHTML = result;
  var display1 = document.getElementById("operations");
  resultFlag = true;
}

function negate(){
  if(operations.length != 0 && !resultFlag){
    var num = parseFloat(numString);
    num = num * -1;
    numString = num.toString();
    updateNumString();
    operations.pop();
    operations.push(num);
    updateOperations();
  }
}

/*
*@purpose clears everything
*/
function air(){
  numString = "";
  var display = document.getElementById("display");
  display.innerHTML = "0";
  var display1 = document.getElementById("operations");
  display1.innerHTML = "";
  operations.length = 0
  index = 0;
  resultFlag = false;
}

/*
*@purpose updates the display of the current number being inputed
*/
function updateNumString(){
  var display = document.getElementById("display");
  display.innerHTML = numString;
}

/*
*@purpose updates the display of the current operation chain in
*the display window of the calculator
*/
function updateOperations(){
  var display = document.getElementById("operations");
  var opString = operations[0];
  for(i=1; i<operations.length; i++){
    opString = opString + " " + operations[i];
  }
  display.innerHTML = opString;
}

/*
*takes two numbers and an operation (+, -, x, or ÷) and returns
*the result of the operation
*
*@param num1 the first operand
*@param num2 the second operand
*@param opcode the operation to perform
*@return the result of num1 opcode num2
*/
function calculate(num1, num2, opcode){
  if(opcode == "+"){
    return num1 + num2;
  }
  else if(opcode == "-"){
    return num1 - num2;
  }
  else if(opcode == "x"){
    return num1 * num2;
  }
  else if(opcode == "÷"){
    return num1 / num2;
  }
  return -9999;
}

/*
*Takes an infix representation of a string of arithmetic operations
*and converts it to postfix notation
*
*@param infix an array of characters representing infix notation
*@return an array of characters representing the postfix notation
*/
function toPostfix(infix){
  var stack = [];
  var queue = [];

  for(i=0; i<infix.length; i++){
    //current char is +
    if(infix[i] == "+" || infix[i] == "-"){
      if(stack.length == 0){
        stack.push(infix[i]);
      }
      else{
        while(stack.length > 0){
          var temp = stack.pop();
          queue.push(temp);
        }
        stack.push(infix[i]);
      }
    }
    //current char is x
    else if(infix[i] == "x" || infix[i] == "÷"){
      while(stack[stack.length-1] == 'x' || stack[stack.length-1] == '÷'){
        var temp = stack.pop();
        queue.push(temp);
      }
      if(stack[stack.length-1] != 'x' && stack[stack.length-1] != '÷'){
        stack.push(infix[i]);
      }
    }
    else{
      queue.push(infix[i]);
    }
  }
  while(stack.length > 0){
    var temp = stack.pop();
    queue.push(temp);
  }
  return queue;
}

/*
*Evaluates a postfix expression
*
*@param postfix an array of chars representing a valid postfix expression
*@return the evaluation of the expression
*/
function evaluatePostfix(postfix){
  var stack = [];
  //traverse length of array
  for(i=0; i<postfix.length; i++){
    if(postfix[i] == '+' || postfix[i] == 'x' || postfix[i] == '-' || postfix[i] == '÷'){
      var op1 = stack.pop();
      var op2 = stack.pop();
      var result = calculate(op2, op1, postfix[i]);
      stack.push(result);
    }
    else{
      var parsed = parseFloat(postfix[i]);
      stack.push(parsed);
    }
  }
  return stack[0];
}
