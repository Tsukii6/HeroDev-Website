let compWord = document.querySelector(".word")
let hint = document.querySelector(".hint span")
const refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word"),
inputWord = document.querySelector("input");
let correctWord, counter;
const time = document.querySelector(".time span b");

//Setting time to 30s
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

//Starting the game
const initGame = () => {
  initTimer(30)
  let randomObj = words[Math.floor(Math.random() * words.length)]; // getting random object from words
  let wordArray = randomObj.word.split(""); //splitting each character and put it into array 
  for(let i=wordArray.length -1; i > 0; i-- ){
    let j = Math.floor(Math.random() * wordArray.length);
    let temp = wordArray[i];    //swapping to change the order of character
    wordArray[i] = wordArray[j]
    wordArray[j] = temp
  }
  compWord.innerHTML = wordArray.join("")  //display unsorted word no page
  hint.innerHTML = randomObj.hint   //display the hint on page
  correctWord = randomObj.word      //get the correct word
}

initGame()

//while clicking to refresh button restart the game by calling initGame function
refreshBtn.addEventListener("click", initGame)
//when clicking check button check if the word entered by the user is correct or not
checkBtn.addEventListener("click", () => {
  if(!inputWord.value) return alert("Please enter a word check") //if the user didn't enter anything
  if (correctWord === inputWord.value) {
    alert(`Congrats!! ${correctWord} is a correct word`) //if the answer correct
    initGame()
  }else {
    alert(`Oops! ${inputWord.value} is not a correct word`) // if the answer wrong
    initGame()
  }
})


