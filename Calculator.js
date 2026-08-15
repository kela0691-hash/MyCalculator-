const display=document.getElementById("display")
function addValue(value) {    
  const operators = ["+", "-", "*", "/"];
  if (operators.includes(value)) {
  let lastChar = display.value.slice(-1);
  if (operators.includes(lastChar)) {
  display.value = display.value.slice(0, -1);
        }
    }
  display.value +=value;
  if (display.value.length >= 12) {
    display.style.fontSize= "30px";
  }
    if (display.value.length >=18) {
      display.style.fontSize="20px";
    }
    if (display.value.length>=25) {
      display.style.fontSize="15px";
      }
}
function clearall(){
  display.value="";
  display.style.fontSize="40px";
}
function deletelast(){
    display.value=display.value.slice(0, -1);
}
function calculate() {
  const result=display.value=String(eval(display.value));
  if (result.length>=12) {
    display.style.fontSize="30px";
    if(result.length>=18){
      display.style.fontSize="20px";
    }
  }
}
function percentage() {
  display.value=Number(display.value)/100;
}
function square(){
  display.value=Number(display.value*display.value);
}