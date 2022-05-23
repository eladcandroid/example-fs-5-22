function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function showRandomNumber() {
  const input = document.querySelector("input");
  console.log(input.value);

  const element = document.querySelector(".random-num-container .random-num");
  element.innerHTML = getRandomIntInclusive(1, 10);
}

// showRandomNumber();

const buttons = document.querySelectorAll(".random-button");

console.log(buttons);

for (let button of buttons) {
  console.log(button);
  button.onclick = showRandomNumber;
  button.onmouseover = function () {
    console.log("SHUKI!!!!!");
    const myColor = "pink";
    button.style.color = myColor;
    button.style.fontSize = "25px";
  };
  button.onmouseout = function () {
    button.style.color = "green";
  };
}
// button.onclick = showRandomNumber;

// button.onmouseover = function () {
//   console.log("SHUKI!!!!!");
//   const myColor = "pink";
//   button.style.color = myColor;
//   button.style.fontSize = "25px";
// };
// button.onmouseout = function () {
//   button.style.color = "green";
// };
