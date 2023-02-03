/*
project requirements:
~ Change the background color By generating Hax color by clicking a button and show code in the output field & add Hax code copy button

*/

// step - 1. create onload handler
window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const output = document.getElementById("output");
  const changeBtn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");

  changeBtn.addEventListener("click", function () {
    const bgColor = generateHaxColor();
    root.style.backgroundColor = bgColor;
    output.value = bgColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(output.value);
  });
}

// step - 2. random color generate function
function generateHaxColor() {
  //   // Hax(#000000), (#ffffff)
  //   // rgb(0, 0, 0), rgb(255, 255, 255);
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

// step - 3. collect all necessary reference.

// step - 4. handle the click event.

// step - 5. Hax code clipboard to copy button.
// ------------------- //
