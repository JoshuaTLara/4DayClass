// day 4 coding 
//lets make a change
// let brick = 400
//basic function
// function salary(mysalary, wsalary) {
//     return mysalary + wsalary
// }

// console.log(salary(200, 400))


//defalut argument
// function salary(mysalary, wsalary = 100) {
//     return mysalary + wsalary
// }

// console.log(salary(200))



// function salary(mysalary, wsalary = 100) {
//     return mysalary + wsalary
// }


// NODE. JS//

// your conslole uses it and you can use it in your terminal but its for checking how things work in the node js



//code along

// function calculator(num1, num2, op) {
//     if( op === '+') {
//         return num1 + num2
//     } else if (op === '-') {
//         return num1 - num2
//     }

//     console.log(calculator(1,2,'+'))

// }

// console.log(salary(200))

// function addToArr(arr, num){
//     for (let i = 0; i < arr.length; i++ ){
//         arr[i] += num
//     }
//     return arr
// }

// let myArr = [1,2,3,4]

// console.log(addToArr(myArr,1))


// function weatherCheck(temp){
//     if(temp <= 50){
//         return 'wear a jacket'
//     } else if (temp > 50) {
//         return 'dont wear a jacket'
//     }
// }

// let colorArr = ['red', 'blue', 'green', 'orange', 'purple', 'red', 'teal']

// function countForRed(arr){
//     //set var to count red
//     // number of data points
//     let numRed = 0
//     let numData = 0
//     while(numRed < 2){
//         if (arr[numData] === 'red'){
//             numRed++
//         }
//         numData++
//     }

//     return numData
//     // create loop looking for red

//     // return value
// }

// console.log(countForRed(colorArr))

function evenNums(arr){
    for(i = 0; i< arr.length; i++){
        if (arr[i] % 2 === 0) {
            arr[i] *= arr[i]
        }
    }
    return arr
}

console.log(evenNums([6, 7, 8, 6, 9]))
