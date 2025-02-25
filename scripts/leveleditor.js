import { updateSentence, getSelectedArray } from "./gameloader.js";

export const levelEditorToggle = document.querySelector(".level-editor");
function renderLevelEditor() {
const selectedArray = getSelectedArray();

const levelEditorHTML = selectedArray.map((sentence)=> `
<textarea name="updateSentence" id="updateSentence" cols="30" rows="10">${sentence.text}</textarea>
<button class="edit">Update
</button>
<button class="delete">Delete
</button>
`);

levelEditorHTML.push(`<textarea name="addSentence" id="addSentence" cols="30" rows="10"></textarea>
<button class="add">Add Sentence</button>
`);
const levelEditorSentences = document.querySelector('.sentences-js');
      levelEditorSentences.innerHTML = levelEditorHTML.join(''); // UPDATED
}
  levelEditorToggle.addEventListener("click", levelEditor)
  function levelEditor() {
    if (levelEditorToggle.innerHTML === "Play Game") {updateSentence();
       levelEditorToggle.innerHTML = "Level Editor";
      } else {
      renderLevelEditor();
      levelEditorToggle.innerHTML = "Play Game";

    }
  }