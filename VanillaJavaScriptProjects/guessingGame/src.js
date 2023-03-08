window.addEventListener('DOMContentLoaded', () => {
  // generate randon number 
  const randomNum = Math.floor(Math.random()*20 +1)
  console.log(randomNum)


  const display = document.querySelector(".num").textContent
  
  const result = document.querySelector('.result')
  console.log(result)


  const guessedNum = document.querySelector('#guessedNumber')
 
  const checkBtn = document.querySelector('#check-btn')
  

  checkBtn.addEventListener('click', () => {
    console.log("btn clicked")
    console.log(guessedNum.value)
  })
 



})