let display = document.querySelector("#display");
const buttons = document.querySelectorAll(".items");

let string = "";
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log(e.target.textContent);
    if (e.target.textContent === "=") {
      if(string ===""){
        display.value = "";
      }else{
        string = eval(string);
        display.value = string;
      } 
    } else if (e.target.textContent === "C") {
      string = "";
      display.value = "";
    } else if (e.target.textContent === "+/-") {
      let number = Number(string);
      display.value = -number;
      string = String(-number);
    } else if (e.target.textContent === "AC") {
      string = string.substring(0, string.length - 1);
      display.value = string;
    } else {
      string += e.target.textContent;
      display.value = string;
      console.log(display.value);
    }
  });
});
