/* Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg) */


const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
]; 

dogs.forEach(dog => {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75*28)
  
});
// console.log(dogs)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'))
console.log(`Sarah dog is eating ${sarahDog.recommendedFood < sarahDog.curFood ? "too much" : "to little" }`)

// 4. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(owner => owner.owners)

const ownersEatTooLittle = dogs.filter(dog => dog.recommendedFood > dog.curFood).map(dog => dog.owners).flat()

// 5. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooLittle.join(" and ")} dogs eats too little!`)
console.log(`${ownersEatTooMuch.join(" and ")} dogs eats too much!`)


// 6. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

const exactFood = dogs.some(dog => dog.curFood === dog.recommendedFood)
console.log(`There ${exactFood ? "is/are dog(s)" : "are no dogs"} who eats EXACTLY the amount of food that is recommended `)

// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).


const okayAmtFood = dogs.filter(dog => dog.curFood >= dog.recommendedFood * 0.9 && dog.curFood <= dog.recommendedFood * 1.1)
console.log(okayAmtFood)
console.log("=====")


// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)
const sortedDogArr = [...dogs].slice(0).sort((a, b) => {
  return a.recommendedFood - b.recommendedFood
})
console.log(sortedDogArr)
console.log(dogs)