export function checkTyping(event, sentence) {
  const userInput = event.target.value;
  const displayText = document.querySelectorAll("#display-text span");


//loop through each character and compare
  for (let i = 0; i < displayText.length; i++) {
    if (userInput === sentence.text) {
      alert("Good job; check back in a week for an update that tabulates your score!");
      /* scoreModal(sentence.text); */
    } else {
    if (i < userInput.length) {
      if (userInput[i] === sentence.text[i]) {
        displayText[i].style.backgroundColor = "green"; //correct typed color
      } else {
        displayText[i].style.backgroundColor = "red"; // Incorrect typed color
      }
      } else {
        displayText[i].style.backgroundColor = "white"; // Reset untyped characters
      }
    }}
    }
  
  