let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        string = eval(string);
        inputBox.value = string;
      } catch {
        inputBox.value = "Error";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      inputBox.value = string;
    } else if (value === "DEL") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else {
      string += value;
      inputBox.value = string;
    }
  });
});
