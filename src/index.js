import randomColor from "randomcolor";
import copy from "copy-to-clipboard";

const colorDiv = document.getElementById("color");
const colorChangerBtn = document.getElementById("change-color");
const copyText = document.getElementById("copy-text");

const changeColor = () => {
  const color = randomColor();
  colorDiv.innerText = color;
  document.body.style.backgroundColor = color;

  const randomButtonAndTextBorder = randomColor();
  colorChangerBtn.style.borderColor = randomButtonAndTextBorder;
  colorDiv.style.borderColor = randomButtonAndTextBorder;
};

// Intially running it to give a random colored UI at the start.
changeColor();

colorChangerBtn.addEventListener("click", () => {
  changeColor();
});

colorDiv.addEventListener("click", () => {
  copy(colorDiv.innerText);
  copyText.style.display = "block";

  setInterval(() => {
    copyText.style.display = "none";
  }, 1500);
});
