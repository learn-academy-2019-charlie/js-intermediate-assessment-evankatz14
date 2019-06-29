// Intermediate Javascript Assessments
console.log('1)')
// 1. Write an arrow function that takes one argument of type array and returns the contents of that array in reverse order.

var originalArray = [1, 2, 3, 4, 5, 6, 7]

reverse = (array) => {
	for(i = 0; i < Math.floor(array.length / 2); i++){
		let container = array[i]
		array[i] = array[array.length - 1 - i]
		array[array.length - 1 - i] = container
	}
	return array
}
console.log(reverse(originalArray))

// 2. Given the object below, complete the console.log to find specific information:
console.log('\n2)')

var bicycle = {
	type: "Roadbike",
	gear: ["comfy seat", "cool handlebars", "vintage bell", "toe clips"],
	wheels: {
		count: 2,
		specs: ["road tires", "AX-7563", "80-115 PSI"],
		brand: "Trek"
	}
}

// Log the type of bicycle:
console.log(bicycle.type)

// Log the bell:
console.log(bicycle.gear[2])

// Log the PSI:
console.log(bicycle.wheels.specs[2])


// 3. Write a function called letterCounter that logs the number of times the letter "l" appears in ourString.
console.log('\n3)')
var ourString = "Hello Learn Students!"

letterCounter = (str) => {
	let theLs = 0
	res = str.toLowerCase()
	for(i = 0; i < str.length; i++){
		if(res[i] === 'l'){
			theLs++
		}
	}
	return theLs
}

console.log(letterCounter(ourString))

// 4. Write a function called getFib that returns the first 10 numbers of the Fibonacci sequence in an array. [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
console.log('\n4)')

getFib = () => {
	let arr = [0, 1]
	for(let i = 2; i < 11; i++){
		arr.push(arr[i - 2] + arr[i - 1])
	}
	arr.shift()
	return arr
}
 console.log(getFib())
//5. Write a function called oddChecker that takes in the fullArr and uses a for loop to return a new array of only odd numbers. Copy and paste your code and refactor using ES6 syntax.
console.log('\n5)')
var fullArr = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]

function oddChecker(arr){
	newArr = []
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 !== 0 && typeof arr[i] === 'number'){
			newArr.push(arr[i])
		}
	}
	return newArr
} 

console.log(oddChecker(fullArr))

oddChecker2 = (arr) => {
	return newArr = arr.filter(value => value % 2 !== 0 && typeof value === 'number')
}

console.log(oddChecker2(fullArr))
console.log('Tada!')