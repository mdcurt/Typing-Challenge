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
      alert("You typed " + wordsPerMinute + " words per minute!");
      updateSentence();
      break;
      /* scoreModal(sentence.text); */
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
  
  