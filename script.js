let gridSize = 16;
let boxSize = "32px";

const containerElement = document.querySelector("#container");

function generateBoxes(gridSize) {
  boxSize = containerElement.offsetWidth / gridSize;
  containerElement.innerHTML = "";
  containerElement.style[
    "grid-template-columns"
  ] = `repeat(${gridSize}, ${boxSize}px)`;
  for (i = 0; i < gridSize ** 2; i++) {
    newBox = document.createElement("div");
    newBox.classList.add("box");
    newBox.style.width = boxSize + "px";
    newBox.style.height = boxSize + "px";
    containerElement.appendChild(newBox);
  }

  boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      box.classList.add("box-hover");
    });
  });
}

function getInput() {
  input = parseInt(prompt("Please choose a gridsize"));
  console.log(input);
  if (input === null) {
    return; //break out of the function early
  } else if (isNaN(input)) {
    alert("That is not a number!");
    input = getInput();
  } else if (input > 100 || input < 1) {
    alert("Please choose a number between 1 and a 100");
    input = getInput();
  } else {
    return input;
  }
}

generateBoxes(gridSize);

resetButton = document.querySelector("button");
resetButton.addEventListener("click", (e) => {
  boxes.forEach((box) => box.classList.remove("box-hover"));
  gridSize = getInput();
  generateBoxes(gridSize);
  console.log(gridSize);
});
