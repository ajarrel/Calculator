
//=======Creating click event and targeting display=====//

var numbers, display, currentVal, operators, mainArray; //setting global variables all at once for use later
currentVal = '';
mainArray = [];
operators = document.getElementsByClassName('operator');
numbers = document.getElementsByClassName('number'); //get every elem with class 'number' and add to array
display = document.getElementById('display');
operators

for(i = 0; i < numbers.length; i++){ //loop through every elem with class number and bind a click event handler to them
    
    numbers[i].addEventListener('click', function(e){ //onclick to each elem with class number, set the textContent of display to itself plus the value of the number elem clicked
        
        currentVal += e.srcElement.value; //keep current number in a variable
        display.textContent = display.textContent + e.srcElement.value; //set the display equal to the current display value plus the value of the number clicked
        
    });
}

for(i = 0; i < operators.length; i++){
        
    operators[i].addEventListener('click', function(e){ //when operator is clicked, push currentVal to mainArray, update display, reset currentVal
        
        mainArray.push( currentVal ); //push the currentVal (it's a string) to mainArray
        currentVal = ''; //currentVal needs to be reset after it's pushed to the array
        
        mainArray.push( e.srcElement.value ); //push the operator symbol to the mainArray (also a string)
        
        display.textContent = display.textContent + ' ' + e.srcElement.value + ' '; //set display equal to itself plus bracketing spaces around the operator symbol
        
    });
}

                    
// event listener on the button .
document.getElementById('period').addEventListener("click", function(event) {
    // display the string of the number in the display
    document.getElementById('display').textContent = ".";
  }, false);

//===============function that concatenates input on display=========//










//==========Creating an Array to use in functions below======//


  var clickedButtons = []

function getValue(e) {
    var buttonValue = parseInt(e.target.textContent);
    clickedButtons.push(buttonValue);

}

function numberTrack() {
    var buttonValue = document.getElementsByClassName('button');

    for (var i = 0; i < buttonValues.length; i++) {
        buttonValue[i].onclick = getValue;
    }

}
console.log(clickedButtons);

//======Operation Functions========//

function operate(n1, n2, operand){ // n1 and n2 are numbers stored as strings, operated in that order.  operand is expected to be a string with one of 4 values (+, -, *, /)
  n1 = parseFloat(n1);  //convert string into value
  n2 = parseFloat(n2);  //convert string into value

if(operand === "*"){ //if else statement to handle the operation of the numbers.
  return n1 * n2;
}
else if(operand==="/"){
  return n1 / n2;
}
else if(operand==="+"){
  return n1 + n2;
}
else if(operand==="-"){
  return n1 - n2;
}
else{
  return false; //in case user inputs an unaccepted operand.
 }
}
