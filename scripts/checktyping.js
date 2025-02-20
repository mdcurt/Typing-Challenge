export function checkTyping(event, sentence) {
  const userInput = event.target.value;
  const displayText = document.querySelectorAll("#display-text span");

//loop through each character and compare
  for (let i = 0; i < displayText.length; i++) {
    if (i < userInput.length) {
      if (userInput[i] === sentence.text[i]) {
        displayText[i].style.color = "green"; //correct typed color
      } else {
        displayText[i].style.color = "red"; // Incorrect typed color
      }
      } else {
        displayText[i].style.color = "black"; // Reset untyped characters
      }
    }
    }
  
  