import { updateSentence, getSelectedArray } from "./gameloader.js";

export const levelEditorToggle = document.querySelector(".level-editor");
function renderLevelEditor() {
const selectedArray = getSelectedArray();

const levelEditorHTML = selectedArray.map((sentence)=> `
<div class="editable-sentence-container> 
<div class="sentence">${sentence.text} </div>
<button class="edit">Edit
</button>
<button class="delete">Delete
</button>
</div>

`);

levelEditorHTML.push(`<button class="add">Add Sentence</button>`);
const levelEditorSentences = document.querySelector('.sentences-js');
      levelEditorSentences.innerHTML = levelEditorHTML;
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