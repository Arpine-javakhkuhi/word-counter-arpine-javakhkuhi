document.getElementById("submit-btn")?.addEventListener("click", calculation);

document
  .getElementById("change-color")
  ?.addEventListener("click", changeBgColor);

async function calculation() {
  const text = document.getElementById("text").value.trim();

  if (!text) {
    const error_txt = document.getElementById("error");
    error_txt.style.display = "block";
    setTimeout(() => {
      error_txt.style.display = "none";
    }, 5000);

    return;
  }

  const wordsNum = await countWords(text);

  const lettersNum = await countLetters(text);

  const sentenceNum = countSentences(text);

  showResult(wordsNum, lettersNum, sentenceNum);
}

async function countLetters(text) {
  let let_length = 0;
  for (let i = 0; i < text.length; i++) {
    const upperCaseCharCode = text[i].toUpperCase().charCodeAt(0);

    // 64 is code for A, 91 is code for Z
    if (upperCaseCharCode > 64 && upperCaseCharCode < 91) {
      let_length++;
    }
  }

  return let_length;
}

async function countWords(text) {
  return text.split(/\s+/).length;
}

function countSentences(text) {
  return text.split(/[.!?]/).length - 1;
}

function showResult(words, letters, sentences) {
  const letters_num = document.getElementById("letters_num");
  letters_num.innerHTML = letters;

  const words_num = document.getElementById("words_num");
  words_num.innerHTML = words;

  const sentences_num = document.getElementById("sentences_num");
  sentences_num.innerHTML = sentences;
}

function changeBgColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  const mainContainer = document.querySelector(".main");
  mainContainer.style.backgroundColor = `#${randomColor}`;
}
