function addTwoNumbers(){
    let numOne = Math.random() * 9;
    let numTwo = Math.random() * 9;
    let sum = Math.round(numOne + numTwo);
    
    return sum;
}

console.log(addTwoNumbers());