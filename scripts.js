var buttonArray = document.querySelectorAll("button");
var firstNumberArray = [];
function arrayParsinter(array){
  let firstNumber = 0;
  let secondNumber = 0;
  for(i=0; i < array.length; i++){
    let arrayVal = array[i];
    if(arrayVal != "*" || arrayVal != "/" || arrayVal != "+" || arrayVal != "-")
  }
}

for(i=0; i < buttonArray.length; i++){

  let buttonId = document.getElementById(buttonArray[i].id);
  let className = buttonId.class;
  console.log(buttonId);
  if(buttonId === "one" || buttonId === "two" || buttonId === "three" || buttonId === "four" || buttonId === "five" || buttonId === "six" || buttonId === "seven" || buttonId === "eight" || buttonId === "nine" || buttonId === "zero"){
    buttonId.addEventListener('click', function storePrint(){
      console.log("button Clicked" + buttonId.id);
      let output = document.getElementById('output');
      firstNumberArray.push(buttonId.id);
      console.log(firstNumberArray);
    });
  }
}
