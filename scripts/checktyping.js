export function checkTyping(event, sentence) {
  const userInput = event.target.value;
  const displayText = document.querySelectorAll("#display-text span");
//loop through each character and compare
  for (let i = 0; i < displayText.length; i++) {
    if (i < userInput.length) {
      if (userInput[i] === sentence[i]) {
        displayText[i].computedStyleMap.color = "green"; //correct typed color
      } else {
        displayText[i].computedStyleMap.color = "red"; // Incorrect typed color
      }
      } else {
        displayText[i].computedStyleMap.color = "black"; // Reset untyped characters
      }
    }
  }