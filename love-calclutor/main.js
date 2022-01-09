const calcBtn = document.getElementById("caclBtn");

const loveCalc = () => {
  // input value
  let yourName = document.getElementById("yourName").value;
  let loverName = document.getElementById("yourLover").value;
  let result = document.getElementById("result");
  let randomNbr = Math.floor(Math.random() * 100);
  result.textContent = randomNbr + `%`;
  let text = document.getElementById("text");
  if (randomNbr >= 75) {
    text.innerHTML = `${yourName} and ${loverName} true love`;
  } else if (randomNbr >= 60) {
    text.innerHTML = `${yourName} and ${loverName} the best lover`;
  } else if (randomNbr >= 50) {
    text.innerHTML = `${yourName} and ${loverName} Your love is frozen. Let it go. Let it go..`;
  } else if (randomNbr > 50) {
    text.innerText = ` ${yourName} and ${loverName} You need more love`;
  } else if (randomNbr == 80 || randomNbr <= 100) {
    text.innerText = ` ${yourName} and ${loverName} You Need  lots more love  .. Please keep try`;
  } else {
    text.innerText = `Low Lover`;
  }
};
calcBtn.addEventListener("click", () => {
  // input files
  let yourName = document.getElementById("yourName").value;
  let loverName = document.getElementById("yourLover").value;

  if (yourName == "" && loverName == "") {
    alert("Please input Enter You name and your lover name");
  } else if (loverName == "") {
    alert("Enter Your Lover Name");
  } else if (yourName == "") {
    alert("Enter Your Lover Name");
  } else {
    loveCalc();
  }
});

console.log('Tarif Al Hasan');
