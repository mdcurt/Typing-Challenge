import { wordCount } from "./utils.js ";
import { stopTimer, intervalId } from "./timerscript.js";
import { updateSentence }  from "./gameloader.js";
export function checkTyping(event, sentence) {
  const userInput = event.target.value;
  const displayText = document.querySelectorAll("#display-text span");


//loop through each character and compare
  for (let i = 0; i < displayText.length; i++) {
    if (userInput === sentence.text) {
      const elapsedTime = stopTimer(intervalId);
      const currentSentence = wordCount(sentence.text);
      const wordsPerMinute = Math.floor(currentSentence / (elapsedTime / 60000));
      console.log(elapsedTime, currentSentence, wordsPerMinute);

      // Display the modal
  const modal = document.getElementById("resultModal");
  const modalText = document.getElementById("modalText");
  const closeModal = document.getElementsByClassName("close")[0];

  modalText.textContent = "YOU TYPED " + wordsPerMinute + " WORDS PER MINUTE!";
  modal.style.display = "block";

  // Close the modal when the user clicks on <span> (x)
  closeModal.onclick = function() {
    modal.style.display = "none";
  }

  // Close the modal when the user clicks anywhere outside of the modal
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
      updateSentence();
      break;

    } else {
    if (i < userInput.length) {
      if (userInput[i] === sentence.text[i]) {
        displayText[i].style.backgroundColor = 'rgb('+159+','+204+','+46+')'; //correct typed color
      } else {
        displayText[i].style.backgroundColor = "red"; // Incorrect typed color
      }
      } else {
        displayText[i].style.backgroundColor = 'rgb('+244+','+244+','+249+')' ; // Reset untyped characters
      }
    }}
    }
  
  