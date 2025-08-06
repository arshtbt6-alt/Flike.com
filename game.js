function playGame() {
  const choices = ["Red", "Green", "Violet"];
  const userChoice = prompt("Choose one: Red, Green, Violet");
  const result = choices[Math.floor(Math.random() * choices.length)];
  if (userChoice && userChoice.toLowerCase() === result.toLowerCase()) {
    alert("You Win! 🎉 The result was: " + result);
  } else {
    alert("You Lose! 😢 The result was: " + result);
  }
}
