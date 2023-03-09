window.addEventListener('DOMContentLoaded', () => {

 let randomNum = Math.floor(Math.random() * 20 + 1)
  console.log(randomNum)
  let score = Number(document.querySelector('.score-val').textContent)
  const display = document.querySelector(".num")
  const msg = document.querySelector(".msg")
  const result = document.querySelector('.result')
  const highScore = document.querySelector('.highScore-val')
  const guessedNum = document.querySelector('#guessedNumber')
  const checkBtn = document.querySelector('#check-btn')
  const againBtn = document.querySelector('.again')

let high = 0
  checkBtn.addEventListener('click', () => {
    score = score - 1; //0
    console.log(score)
    if (score < 1) { 
      if (Number(guessedNum.value) === randomNum) {
        msg.textContent = "You got it on the last chance !!!"
        result.textContent = "You won on last chance !!!"
        document.body.style.backgroundColor ="black"
      }
      else {
        msg.textContent = "Game Over !!!"
        result.textContent = "Game Over !!!"
        document.querySelector('.score-val').textContent = 0
      }
    }
    else {
      const guessedNumVal = Number(guessedNum.value)
      if (!guessedNum.value) {
        result.textContent = "No Number selected"
      }
      else if (Number(guessedNum.value) > randomNum) {
        result.textContent = "📈 Too High"
        document.querySelector('.score-val').textContent = score
      }
      else if (Number(guessedNum.value) < randomNum) {
        result.textContent = "📉 Too Low"
        document.querySelector('.score-val').textContent = score
      }
      else if (Number(guessedNum.value) === randomNum) {
        console.log(score)
        result.textContent = "🎊✌🏻 You Won !!!!"
        document.querySelector('.score-val').textContent = score

        display.textContent = guessedNumVal
        if (score > high) {
          high = score
        }
        highScore.textContent = high
        document.body.style.backgroundColor ="black"
      }
    }
    
  })

  againBtn.addEventListener('click', () => {
    result.textContent = "Start Guessing..."
    score = 20
    document.querySelector('.score-val').textContent = score
    guessedNum.value = ""
    randomNum = Math.floor(Math.random() * 20 + 1)
    display.textContent =""
    
  })
})