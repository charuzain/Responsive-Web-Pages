const eurotoToUSD = 1.1 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsInUSD = movements.map(move => move * eurotoToUSD)
console.log(movementsInUSD)