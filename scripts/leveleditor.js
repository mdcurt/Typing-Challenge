import { updateSentence } from "./gameloader";
export const levelEditorToggle = document.getElementsByClassName("level-editor");
  levelEditorToggle.addEventListener("click", levelEditor())
  const levelEditorHTML = `${selectedArray}`
  function levelEditor() {
    if (levelEditorToggle.innerHTML === "Play Game") {updateSentence(), levelEditorToggle.innerHTML = "Level Editor"} else {
      const levelEditorSentences = document.querySelector('.sentences-js');
      levelEditorSentences.innerHTML = levelEditorHTML;

    }
  }