/* Test for Chicks gold */

/* 1 */
const isMultiple = (number) => {
  return number % 2 == 0 && number % 3 == 0 && number % 5 == 0 && number % 7 == 0;
}

/* 2 */
const fizzBuzz = () => {
  for(let number = 1; number <= 100; number++){
    if(number % 3 == 0){
      console.log("Fizz")
    } else if(number % 5 == 0){
      console.log("Buzz")
    } else{
      console.log(number)
    }
  }
}

const fizzBuzzModified = () => {
  for(let number = 1; number <= 100; number++){
    if(number % 3 == 0 && number % 5 == 0){
      console.log("FizzBuzz")
    } else if(number % 3 == 0){
      console.log("Fizz")
    } else if(number % 5 == 0){
      console.log("Buzz")
    } else{
      console.log(number)
    }
  }
}

/* 3 */

const countBs = (str) => {
  let counterB = 0;
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) == "B"){
      counterB ++
    }
  }
  return counterB;
}

/* 4 */

const factorial = (number) => {
  return number > 0 ? number*factorial(number - 1) : 1;
}

/* 5 */

const ordinalToCardinal = (number) => {
    const dict = { "0":"th", "1": "st", "2": "nd", "3": "rd", "4":"th", "5":"th", "6":"th", "7":"th", "8":"th", "9":"th", "exception":"th" }
    let exceptions = ["11","12","13"]
    let lastDigit = String(number).slice(-2)
    if(exceptions.includes(lastDigit)){
      return `${number}${dict["exception"]}`
    }
    return `${number}${dict[lastDigit.slice(-1)]}`
}

/* 6 */

const range1 = (start, end) => {
  return Array.from(Array(end - start + 1).keys()).map(x => x + start)
}

const sum = range => range.reduce((a,b) => a+b);

const range2 = (start, end, step = 1) => {
  return Array.from(Array(Math.abs(Math.floor((end - start) / step)) + 1).keys()).map(x => x*step + start)
}

/* 7 */

const truncateString = (str, words) => str.split(" ").slice(0, words).join(" ")

/* 8 */

const alphabetize = (str) => Array.from(str.replace(/ /g, "").toLowerCase()).sort().join("")

/* 9 */

const mostFrequent = (arr) => {
  let frequency = 0
  let mostFrequent = null;
  for(item of arr){
    let notMatches = arr.filter(el => el != item)
    difference = arr.length - notMatches.length;
    if(frequency < difference){
      mostFrequent = item
      frequency = difference
    }
    arr = notMatches;
  }
  return mostFrequent;
}

/* 10 */

const reverseArray = (arr) => {
  let arrReverse = []
  for(let i = arr.length - 1; i >=0; i --){
      arrReverse.push(arr[i])
  }
  return arrReverse;
}


const reverseArrayInPlace = (arr) => {
  let spaces = arr.length
  for(let i = spaces - 2; i >= 0 ; i--){
      let element = arr.splice(i,1)[0]
      arr.push(element)
  }
}


/*  ==== Test ==== */

/* Is multiple */
console.log(isMultiple(87))
console.log(isMultiple(210))

/* Fizzbuzz */
fizzBuzz()
fizzBuzzModified()

/* CountBs */
console.log(countBs("Barquisimeto is a beautiful city with the Best weather"))

/* Factorial */
console.log(factorial(4))

/* Ordinal tu cardinal */
console.log(ordinalToCardinal(1113))

/* Range */
console.log(range1(1,10))
console.log(range1(1,10,2))

/* Sum */
console.log(sum([1,2,3,4,4,5,6]))

/* Range 2 */
console.log(range2(10,1,-1))
console.log(range2(10,1,-2))

/* Truncate a string */
console.log(truncateString("Barquisimeto is a beautiful city with the Best weather",5))

/* Alphabetize */
console.log(alphabetize("Barquisimeto is a Beautiful city with the best weather"))

/* Most frequent */
console.log(mostFrequent([1,2,1,"a","b","c", "a", "a"]))

/* Reverse array */
console.log(reverseArray([9,3,4,2,1]))

/* Reverse array in place */
let arr = [9,3,4,2,1]
console.log(arr)
reverseArrayInPlace(arr)
console.log(arr)