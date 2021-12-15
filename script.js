let gridSize = 16;
let boxSize = "32px";
let HSLIndex = 0;

const containerElement = document.querySelector("#container");
const input = document.querySelector("input");

containerElement.addEventListener("mousemove", () => (HSLIndex += 1));

function generateBoxes(gridSize) {
  boxSize = containerElement.offsetWidth / gridSize;
  containerElement.innerHTML = "";
  containerElement.style[
    "grid-template-columns"
  ] = `repeat(${gridSize}, ${boxSize}px)`;
  containerElement.style[
    "grid-template-rows"
  ] = `repeat(${gridSize}, ${boxSize}px)`;
  for (i = 0; i < gridSize ** 2; i++) {
    newBox = document.createElement("div");
    newBox.classList.add("box");
    containerElement.appendChild(newBox);
  }

  boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      box.style["background-color"] = `hsl(${HSLIndex % 360}, 100%, 75%)`;
    });
  });
}

generateBoxes(gridSize);

resetButton = document.querySelector("button");
resetButton.addEventListener("click", (e) => {
  boxes.forEach((box) => box.classList.remove("box-hover"));
  gridSize = input.value;
  generateBoxes(gridSize);
});
