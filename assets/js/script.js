//Changing Title Effect
const b = baffle(".title");
b.set({
  characters: '█<▓ ░█▒█▒ ░▒/░█ ▓▒▓ █/██▒ █▓█/ █▒█ ░█▒█ ▓░█▒',
  speed: 120
});

var i = 1;
let changeTitle = () => {
  let titles = ["Full-stack Web Developer", "UI/UX Designer", "JavaScript Programmer", "Front-end Developer"];
  if (i == titles.length) {
    i = 0;
  }
  b.text(currentText => titles[i]).reveal(1500);
  i++;
}

setInterval(changeTitle, 3200);
