const calcBtn = document.getElementById("caclBtn");

const loveCalc = () => {
  let result = document.getElementById("result");
  let randomNbr = Math.floor(Math.random() * 100);
  result.textContent = randomNbr + `%`;
  let text = document.getElementById("text");
  if (randomNbr >= 75) {
    text.innerHTML = `Wow . I can hear the wedding bells toll!`;
  } else if (randomNbr >= 60) {
    text.innerHTML = `Your love needs a little more love.`;
  } else if (randomNbr >= 50) {
    text.innerHTML = `Your love is frozen. Let it go. Let it go..`;
  } else if (randomNbr > 50) {
    text.innerText = `You need more love`;
  } else if (randomNbr == 80 || randomNbr <= 100) {
    text.innerText = `You Need  lots more love  .. Please keep try`;
  } else {
    text.innerText = `Low Lover`;
  }

  // input files
  let yourName = document.getElementById("yourName").value;
  let loverName = document.getElementById("yourLover").value;
  if (yourName == isNaN || yourName == "") {
    alert("Please Enter Your Name");
  } else if (loverName == isNaN || yourName == "") {
    alert("please enter your lover name");
  }
};
calcBtn.addEventListener("click", () => {
  loveCalc();
});
