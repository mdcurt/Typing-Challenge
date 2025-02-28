import { updateSentence, getSelectedArray } from "./gameloader.js";
export const levelEditorToggle = document.querySelector(".level-editor");
function renderLevelEditor() {
const selectedArray = getSelectedArray();

const levelEditorHTML = selectedArray.map((sentence, index)=> `
<textarea name="updateSentence" class="updateSentence" id="updateSentence-${index}" cols="30" rows="10">${sentence.text}</textarea>
<button class="edit" id="edit-${index}">Update
</button>
<button class="delete" id="delete-${index}">Delete
</button>
`);

levelEditorHTML.push(`<textarea name="addSentence" id="addSentence" class="addSentence" cols="30" rows="10"></textarea>
<button class="add" id="addSentenceButton">Add Sentence</button>
`);
const levelEditorSentences = document.querySelector('.sentences-js');
      levelEditorSentences.innerHTML = levelEditorHTML.join(''); // UPDATED

      // Add event listeners for edit and delete buttons
  selectedArray.forEach((_, index) => {
    document.getElementById(`edit-${index}`).addEventListener('click', () => {
      const newText = document.getElementById(`updateSentence-${index}`).value;
      selectedArray[index].text = newText;
      updateSentence(selectedArray);
      renderLevelEditor(); // Re-render the editor to reflect changes
    });

    document.getElementById(`delete-${index}`).addEventListener('click', () => {
      selectedArray.splice(index, 1);
      updateSentence(selectedArray);
      renderLevelEditor(); // Re-render the editor to reflect changes
    });
  });

  // Add event listener for addSentence button
  document.getElementById('addSentenceButton').addEventListener('click', () => {
    const newSentenceText = document.getElementById('addSentence').value;
    if (newSentenceText.trim() !== "") {
      selectedArray.push({ text: newSentenceText });
      updateSentence(selectedArray);
      renderLevelEditor(); // Re-render the editor to reflect changes
    }
  });


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