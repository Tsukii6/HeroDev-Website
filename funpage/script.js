let compWord = document.querySelector(".word")
let hint = document.querySelector(".hint span")
const refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
inputWord = document.querySelector("input");
let correctWord, counter;
const time = document.querySelector(".time span b");

const initTimer = maxTime => {
  clearInterval(counter)
  counter = setInterval(() => {
    if (maxTime > 0){
      maxTime--
      return time.innerHTML = maxTime; 
    }
    clearInterval(counter)
    alert(`Time's up ${correctWord} was the correct word`)
    initGame()
  }, 1000)
}

const initGame = () => {
  initTimer(30)
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  console.log(randomObj)
  let wordArray = randomObj.word.split(""); 
  for(let i=wordArray.length -1; i > 0; i-- ){
    let j = Math.floor(Math.random() * wordArray.length);
    let temp = wordArray[i];
    wordArray[i] = wordArray[j]
    wordArray[j] = temp
  }
  compWord.innerHTML = wordArray.join("")
  hint.innerHTML = randomObj.hint
  correctWord = randomObj.word
}

initGame()

refreshBtn.addEventListener("click", initGame)
checkBtn.addEventListener("click", () => {
  if(!inputWord.value) return alert("Please enter a word check")
  if (correctWord === inputWord.value) {
    alert(`Congrats!! ${correctWord} is a correct word`)
    initGame()
  }else {
    alert(`Oops! ${inputWord.value} is not a correct word`)
    initGame()
  }
})


