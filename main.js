function greeting(str) {
    return str + '???'
}

let result1 = greeting('hello')
let result2 = greeting('what even')

result1; 
result2;

function addSpace(word1, word2){
    console.log(word1)
    console.log(word2)
    return word1 + ' ' + word2;
}

let result3 = addSpace('oh', 'hi')
let result4 = addSpace('well', 'hello back')

result3;
result4;

function subtract3Numbers(num1, num2, num3){
    return num1 - num2 - num3; 
}
let result5 = subtract3Numbers(10, 1, 2)
let result6 = subtract3Numbers(8, 3, 5)
let result7 = subtract3Numbers(100, 80, 25)

result5
result6
result7

function subtract3NumbersReversed(num4, num5, num6){
    return num6 - num5 - num4
}

let result8 = subtract3NumbersReversed(10, 1, 2)
let result9 = subtract3NumbersReversed(2, 1, 10)

result8
result9

function tripleAString(word3){
    return word3 + word3 + word3
}
let result10 = tripleAString('codeimmersives')
let result11 = tripleAString('is the best')

result10
result11

function squareTheRoot(num7){
    return  num7 
}
let result12 = squareTheRoot(16)
result12

