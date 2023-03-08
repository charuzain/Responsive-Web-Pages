window.addEventListener('DOMContentLoaded', () => {
  // generate randon number 
  
  const randomNum = Math.floor(Math.random() * 20 + 1)
  console.log(randomNum)


  const display = document.querySelector(".num")
  const msg = document.querySelector(".msg")
  const result = document.querySelector('.result')
  // console.log(result)
  const score = document.querySelector('.score-val')
  const guessedNum = document.querySelector('#guessedNumber')
  const checkBtn = document.querySelector('#check-btn')

  

  checkBtn.addEventListener('click', () => {
    score.textContent = Number(score.textContent) - 1

    if (Number(score.textContent) === 0) {
      msg.textContent = "Game Over !!!"
    }
      const guessedNumVal = Number(guessedNum.value)
      if (guessedNum.value > randomNum) {
        result.textContent = "📈 Too High"
      }
      else if (guessedNum.value < randomNum) {
        result.textContent = "📉 Too Low"
      }
      else {
        result.textContent = "🎊✌🏻 You Won !!!!"
        console.log(display)
        display.textContent = guessedNumVal
        console.log(display)
      }
    
  })
 



})