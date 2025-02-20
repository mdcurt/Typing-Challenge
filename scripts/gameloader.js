/*function renderSentences(easyParagraphs) {
  const sentencesHTML = easyParagraphs.map((sentences)=> `
  <div class="sentence-container">
  ${sentences.text}
  </div>
  `).join('');

const sentencesjs = document.querySelector('.sentences-js');
  sentencesjs.innerHTML = sentencesHTML
}
renderSentences(easyParagraphs); */

//import all three difficulty level arrays from data/sentences.js
import { easyParagraphs, moderateParagraphs, hardParagraphs} from "../data/sentences.js";
import { checkTyping } from "./checktyping.js";
import { timer } from "./timerscript.js";

//map radio button values to difficulty level arrays
export const difficultyLevels = {
  EASY: easyParagraphs,
  MODERATE: moderateParagraphs,
  HARD: hardParagraphs
};

//fetch which radio button is checked and store this value in variable
function updateSentence() {
const selectedDifficulty = document.querySelector('input[name="difficulty"]:checked');
//take variable from above (a string) and extract array variable from radio button map 
if (selectedDifficulty) {
const difficultyValue = selectedDifficulty.value;
const selectedArray = difficultyLevels[difficultyValue];
renderRandomSentence(selectedArray);
}}

//render HTML with random sentence from an aaray as a parameter. Also render a textarea
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
       )"
      ></textarea>

      <p id="timer-display"></p>`;

  const sentencesjs = document.querySelector('.sentences-js');
  sentencesjs.innerHTML = sentenceHTML;

  const textarea = document.getElementById("prompt");
  textarea.addEventListener("input", (event) => {
checkTyping(event, randomSentence);
const timerText = document.getElementById("timer-display");
if (!timerText.innerHTML) {
  timer();
}
  });
  }

document.querySelectorAll('input').forEach(radio => {
radio.addEventListener('change', updateSentence);
});
/*renderRandomSentence(selectedArray);*/
updateSentence();