// Selecting the necessary elements
let key = document.querySelector(".keys");
let display = document.querySelector(".dispAns");
let cancleKey = document.querySelector(".keyCanc");
display.value = 0;
strA = "";

// Function to handle key press
function pressKey(event) {
  let clickBtn = event.target;
  if (clickBtn.innerHTML == "=") {
    strA = eval(strA).toString();
    display.value = strA;
  } else {
    strA = strA + event.target.innerHTML;
    display.value = strA;
  }
}

// Adding event listener to the keys container
key.addEventListener("click", pressKey);
cancleKey.addEventListener("click", () => {
  display.value = 0;
  strA = "";
});
