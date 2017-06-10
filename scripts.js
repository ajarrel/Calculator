var buttonArray = document.querySelectorAll("button");
var firstNumberArray = [];
function arrayParsinter(array){
  let firstNumber = 0;
  let secondNumber = 0;
}
for(i=0; i < buttonArray.length; i++){

  let buttonId = document.getElementById(buttonArray[i].id);
  let className = buttonId.class;
  console.log(buttonId);
  if(buttonId === "1" || buttonId === "2" || buttonId === "3" || buttonId === "4" || buttonId === "5" || buttonId === "6" || buttonId === "7" || buttonId === "8" || buttonId === "9" || buttonId === "0"){
    buttonId.addEventListener('click', function storePrint(){
      console.log("button Clicked" + buttonId.id);
      let output = document.getElementById('output');
      firstNumberArray.push(buttonId.id);
      console.log(firstNumberArray);
    });
  }
}
