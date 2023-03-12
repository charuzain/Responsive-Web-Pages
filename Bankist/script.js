'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Charu Jain',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);


const displayMovement = (movements) => {
  containerMovements.innerHTML = ""

  const x = movements.map((elem,i) =>
  { const type = elem >0 ? "deposit" :"withdrawal"
    
    return (
   
  `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i +1 } ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value"> ${elem}€</div>
  </div>`)
 })
  
  for (let elems of x) {
    containerMovements.insertAdjacentHTML('afterbegin',elems)
  }

}
displayMovement(account1.movements)


// add username 

console.log(accounts)

const addUserName = (acc) => {
  for (let account of acc) {
    account.username = account.owner.toLowerCase().split(' ').map(word =>word[0]).join('')
  }
}
console.log(addUserName(accounts))

// filter deposit and withdrawl
const movement = [200, 450, -400, 3000, -650, -130, 70, 1300]

const deposits = movement.filter(elem => elem > 0)
const withdrawal = movement.filter(elem => elem <0)
// console.log(movement)
// console.log(deposits)
// console.log(withdrawal)

// display Balance inn Bank account

const displayBalance = (movements) => {
  const balance = movements.reduce((a, c) => a + c, 0)
  // console.log(balance)`
  labelBalance.textContent = `${balance}€`
}
displayBalance(account1.movements)


// display account summary at botttom

const displaySummary = (movements) => {
  const input = movement.filter(mov => mov > 0).reduce((a, c) => a + c, 0)
  labelSumIn.textContent = `${input}€`

  const withdrawal = movement.filter(mov => mov < 0).reduce((a, c) => a + c, 0)
  labelSumOut.textContent = `${Math.abs(withdrawal)}€`


  const interest = movement.filter(mov => mov > 0).map(deposit => (deposit * 1.2) / 100).
    filter(int => int > 1).reduce((acc, int) => acc + int, 0)
    labelSumInterest.textContent = `${interest}€`
}

displaySummary(account1.movements)

