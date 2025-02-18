function renderSentences(easyParagraphs){
  const sentencesHTML = easyParagraphs.map((sentences)=> `
  <div class="sentence-container">
  ${sentences.text}
  </div>
  `)

const sentencesjs = document.querySelector('.sentences-js');
  sentencesjs.innerHTML = sentencesHTML;}