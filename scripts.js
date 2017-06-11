
//=======Creating click event and targeting display=====//

// event listener on the button 9
document.getElementById('9').addEventListener("click", function(event) {
    // display the string of the number in the display
    document.getElementById('display').textContent = "9";
  }, false);

// event listener on the button 8
  document.getElementById('8').addEventListener("click", function(event) {
      // display the string of the number in the display
      document.getElementById('display').textContent = "8";
    }, false);

    // event listener on the button 7
    document.getElementById('7').addEventListener("click", function(event) {
        // display the string of the number in the display
        document.getElementById('display').textContent = "7";
      }, false);

      // event listener on the button 6
      document.getElementById('6').addEventListener("click", function(event) {
          // display the string of the number in the display
          document.getElementById('display').textContent = "6";
        }, false);

        // event listener on the button 5
        document.getElementById('5').addEventListener("click", function(event) {
            // display the string of the number in the display
            document.getElementById('display').textContent = "5";
          }, false);

          // event listener on the button 4
          document.getElementById('4').addEventListener("click", function(event) {
              // display the string of the number in the display
              document.getElementById('display').textContent = "4";
            }, false);

            // event listener on the button 3
            document.getElementById('3').addEventListener("click", function(event) {
                // display the string of the number in the display
                document.getElementById('display').textContent = "3";
              }, false);

              // event listener on the button 2
              document.getElementById('2').addEventListener("click", function(event) {
                  // display the string of the number in the display
                  document.getElementById('display').textContent = "2";
                }, false);

                // event listener on the button 1
                document.getElementById('1').addEventListener("click", function(event) {
                    // display the string of the number in the display
                    document.getElementById('display').textContent = "1";
                  }, false);

                  // event listener on the button 0
                  document.getElementById('0').addEventListener("click", function(event) {
                      // display the string of the number in the display
                      document.getElementById('display').textContent = "0";
                    }, false);

                    // event listener on the button +
                    document.getElementById('plus').addEventListener("click", function(event) {
                        // display the string of the number in the display
                        document.getElementById('display').textContent = "+";
                      }, false);

                      // event listener on the button /
                      document.getElementById('divide').addEventListener("click", function(event) {
                          // display the string of the number in the display
                          document.getElementById('display').textContent = "/";
                        }, false);

                        // event listener on the button *
                        document.getElementById('multiply').addEventListener("click", function(event) {
                            // display the string of the number in the display
                            document.getElementById('display').textContent = "*";
                          }, false);

                          // event listener on the button -
                          document.getElementById('minus').addEventListener("click", function(event) {
                              // display the string of the number in the display
                              document.getElementById('display').textContent = "-";
                            }, false);

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


var mainArray = []; //because the input will come in the following order (number)(operand)(number)(operand), and will be in a single array, the odd index values will always be number values, and the even index values will always be operands.  even index will be numbers stored as strings.  And odd indexes will be operands (+, -, /, *), stored as strings.
var currentVal = "";

for(i=0; i < mainArray.length; i+=3){
  var returnVal = operate(mainArray[1], mainArray[i+1], mainArray[i+2]);
}

var elemArray = document.getElementsByClassName("number"); // DOM HTML number elements must have a class called "number"
var operandArray = document.getElementsByClassName("operator"); // DOM HTML elements must have a class called "operator"



for(ix = 0; ix < elemArray.length; ix++){ //get every button that is a number element and bind this handler to it.

  elemArray[ix].addEventListener("click",function(e){
    var val = elemArray[ix].getAttribute("value"); // get the value of the DOM element (expected input intergers 1-9)
    currentVal += val; // += on a string will add the single string val to the end of the larger string currentVal.
  });

}

for(i2 = 0; i2 < operandArray.length; i2++){ // get every button that's an operator and bind this handler to it.

  operandArray[i2].addEventListener("click",function(e){ //when someone clicks an operand (+,-,/,*), push the currentVal into mainArray.  Then push the operator that sent it there next.
    mainArray.push( currentVal ); // This is a number as a string.
    mainArray.push( operandArray[i2].getAttribute("value")); //This is (+,-,*,/) as a string.
  });
}
