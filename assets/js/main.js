/* javascript */

var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;

document.getElementById("submitguess").onclick = function () {
  var x = document.getElementById("guessField").value;
  var percentageDiff = ((y - x) / x) * 100;
  if (x == y) {
    alert(`Nice Job Dude, you guessed the number in ${guess} guesses`);
  } else if (x > y) {
    /* if guessed number is greater than actual number*/
    guess++;
    alert(
      `Shrek says you need to decrease your guess by ${percentageDiff}%!`
    );
  } else {
    guess++;
    alert(`Shrek says that you need to increase your guess by ${percentageDiff}%`);
  }
};

const showImage = () => {
  document.getElementById("shrek-image").style.display = "block";
  document.getElementById("shrek").style.visibility = "hidden";
};
