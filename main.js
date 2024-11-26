//addition function
function addition(a, b)
{
    return +a + +b
}
//subtraction function
function subtract(a, b)
{
    return +a - +b
}
//multiplication
function multiply(a, b)
{
    return +a * +b
}
//division
function divide(a, b)
{
    return a / b
}

let number;

let anotherNumber;
function operate(operator, number, anotherNumber) {
    if (operator == '+') {
        
        sum  = addition(number, anotherNumber)
        return sum
          
    }
    else if (operator == '-') {
        sub = subtract(number, anotherNumber)
        return sub
    }
    else if (operator == '*') {
        mul = multiply(number, anotherNumber)
        return mul
    }
    else  if (operator == '/') {
        if (anotherNumber  == 0) {
            return 'Error: Division by zero'
        }
        div = divide(number, anotherNumber)
        return div.toFixed(5)
    }
}
var container = document.querySelector('.container');
var button = document.querySelectorAll('.flex-item');

var para = document.createElement('p')
para.style.display = 'block'
let sum = 0
let result;
let currentInput = '';
let currentResult = 0;
let operator = null
button.forEach(button=>{
        button.addEventListener('click', () => {
        var elem =  document.getElementById('input'); // get the dom element to attach to 
        value = button.value
        console.log("Button clicked:", value);

        if(!isNaN(value)) {
            currentInput += value;
            elem.value += value // append to the input dom
        }
        else if (['+', '-', '*', '-', '/', '.'].includes(value)) {
            if (currentInput !== "") {
                if (currentResult == 0) {
                    currentResult = +currentInput
                }
                else if(operator) {
                    result = operate(operator, currentResult, +currentInput)
                }
            }
            operator = value;
            elem.value += value;
            currentInput = ''
        }
        else if(value === '=') {
            if (currentInput !== '' && operator) {
                currentResult = operate(operator, currentResult, +currentInput)
                elem.value = currentResult
                currentInput = ''
                operator = null
            }
        }
        else if (value  == 'clear') {
            console.log("Before Clear:", operator );
            currentInput = ''
            currentResult = 0
            operator = null;
            elem.value  = ''
            console.log("After Clear:", { currentInput, currentResult, operator });
        }

    })
})