// /**
//  * Ways of writing functions
//  * 1.Function Declaration
//  * 2.Function expression
//  * 3.Anonymous Function
//  * 4.Arrow Function
//  */




// //1.Funciton declaration
// function twoSum(num1,num2){

//     return num1 + num2
// }
// console.log(twoSum(2, 7))



// //2.Function expression
// const twoSumJs = function(num1,num2){
// return num1 +num2
// }


// const answer = twoSumJs(3, 9)
// console.log(answer)

// //3. Anonymous Function 

// // function(num1,num2) {
// //     return num1 + num2
// // }

// //4. Arrow function

// let twoSumArrow = (num1, num2) => {
// return num1 + num2
// }

// const result = twoSumArrow(2,3)

// console.log(result)

// //4.1 Arrow function - one liner

// const twoSumArrow3 = (num1, num2) => num1 + num2

// const result4 = twoSumArrow3(32,24)
// console.log(result4)

// Write a function that takes in 2 numbers and return the Largest number

function findLargest(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}



function findLargest2(num1, num2){

return num1 > num2 ? num1 :  num2


}


const answer = findLargest2(27,28)


function timesThree(){
return answer * 3
}


function fizzbuzz(num1){
if(num1 % 3 === 0 && num1 % 5 === 0){
    return 'fizzbuzz'
}else if(num1 % 5 === 0){
    return 'buzz'
}else if(num1 % 3 === 0){
    return 'fizz'
}else(num1 % 3 === 1);{
    return num1
}

}

// console.log(fizzbuzz(10))

function palindromes(palindrome){
const myArray = palindrome.split('').reverse().join('')

if(palindrome === myArray){
    return `${palindrome} is a palindrome`
}else{
    return `${palindrome} is not a palindrome`
}
}

 const arrayz = [2, 0, 3, 0, 6, 0, 0, 5, 5, 3, 4, 0, 0, 4]

function moveZerosToBeginning(){
    for(i = 0; i < arrayz.length; i++){
        arrayz
    }
} 

console.log(moveZerosToBeginning(arrayz))