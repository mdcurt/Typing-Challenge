//import all three difficulty level arrays from data/sentences.js
import { easyParagraphs, moderateParagraphs, hardParagraphs} from "../data/sentences.js";
//import dynamic typing verifier
import { checkTyping } from "./checktyping.js";
//import timer function
import { timer } from "./timerscript.js";

// simple click noise when typing
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
function playClickSound() {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(1000, audioCtx.currentTime);
  gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.start();
  oscillator.stop(audioCtx.currentTime + 0.02);
}


//export object of radio button values mapped to difficulty level arrays
export const difficultyLevels = {
  EASY: easyParagraphs,
  MODERATE: moderateParagraphs,
  HARD: hardParagraphs
};

export function getSelectedArray() {
  const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked');
  //take variable from above (a string) and extract array variable from radio button map 
  const difficultyValue = selectedDifficulty.value;
console.log(selectedDifficulty.value);
return difficultyLevels[difficultyValue];
}
//fetch which radio button is checked and store this value in variable

export function updateSentence() {
const selectedArray = getSelectedArray();
renderRandomSentence(selectedArray);
}

//render HTML with a random sentence from selected array, a textarea, a timer, and a submit button 
function renderRandomSentence(paragraphsArray) {
  const randomIndex = Math.floor(Math.random() * paragraphsArray.length);

const randomSentence =paragraphsArray[randomIndex];

  const sentenceHTML =
  `
  <h2>Type this:</h2>
  <div class="sentence-container">
    <p id="display-text">${randomSentence.text.split('').map(char => `<span>${char}</span>`).join('')}</p>
  </div>
  <br>
  <textarea
        class="prompt"
        name="prompt"
        id="prompt"
        cols="30"
        rows="10"
       )
      ></textarea>
     <br>

      <p id="timer-display"></p>`;

  const sentencesjs = document.querySelector('.sentences-js');
  sentencesjs.innerHTML = sentenceHTML;
//call typing checker with each typed input in the generated textarea.  Also check if timer is running.  If not, call timer function.
  const textarea = document.getElementById("prompt");
  let timerStarted = false;

  textarea.addEventListener("input", (event) => {
    if (!timerStarted) {
      timer();
      timerStarted = true;
    }
    checkTyping(event, randomSentence);
    playClickSound();
  });
}
//Check to see if user has checked a different difficulty level.  If so, update sentence accordingly. 
document.querySelectorAll('input').forEach(radio => {
radio.addEventListener('change', updateSentence);
});
updateSentence();