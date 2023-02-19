const buttons = document.querySelectorAll(".btn");
const input = document.querySelector('.input')
const output = document.querySelector(".output");
const enter = document.querySelector("#equalsButton");


// insert Default value
input.innerHTML = 0;
output.innerHTML = 0;


// Make some basic math functions

const add = (x,y) =>{
    return x + y;
};

const subtract= (x,y) =>{
    return x - y;
};

const multiply = (x,y) =>{
    return x * y;
};

const divide = (x,y) =>{
    return x / y;
};


// make the operate function

const operate = (opr, num1, num2) =>{
    num1 = parseInt(num1);
    num2 = parseInt(num2)
    switch(opr){
        case '+':
            return add(num1,num2);
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2);
        case '/':
            return divide(num1,num2);
    }
}

const operators = ['/', '*', '%', '+', '-'];


//checks to see if a value is numeric by regex
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

// this function does math on an array
const doMath = (arr)=>{
    equation = [...arr]
	let firstNumber;
	let secondNumber;
	let operator;
	let operatorIndex;
	let result;

	/*  
		1. Perform calculations as per BODMAS Method
		2. For that use operators array
		3. after calculation of 1st numbers replace them with result
		4. use splice method
	*/
	for (var i = 0; i < operators.length; i++) {
		while (equation.includes(operators[i])) {
			operatorIndex = equation.findIndex(item => item === operators[i]);
			firstNumber = equation[operatorIndex-1];
			operator = equation[operatorIndex];
			secondNumber = equation[operatorIndex+1];
			result = operate(operator, firstNumber, secondNumber);
			equation.splice(operatorIndex - 1, 3, result);
            console.log(equation)
		}
	}
    console.log(result)
	return result;
}
let inputString = ""
let digitClicked = false;
// Add the click event to fire the operate class
buttons.forEach(button =>{
    button.addEventListener('click', e =>{

        if(button.classList.contains("digits") || button.classList.contains("operators")){
            if(button.classList.contains("operators")){
                if(digitClicked){
                    inputString += " " + button.id + " ";
                    digitClicked = false;
                }
            }else{
                inputString += button.id
                digitClicked = true;
            }
            if(inputString != ""){
                input.innerHTML = inputString
            }
            return inputString
        }
        // fire the entire equation
        else if(button.classList.contains("equals")){
            // load equation to string then convert to array
            inputString = input.innerHTML
            let oprArray = inputString.split(' ');

            console.log(oprArray)
            //initialize the sum
            let sum = doMath(oprArray);
            // for each element in the array do the math in the correct order
            output.innerHTML = sum;
            oprArray =[];
        }else if(button.classList.contains("allclear")){
            input.innerHTML = 0;
            output.innerHTML = 0;
        }else if(button.classList.contains("clear")){
            newString = input.innerHTML
            if(newString.length > 1){
                input.innerHTML = newString.substring(0, newString.length-1)
            }
        }
    })
})