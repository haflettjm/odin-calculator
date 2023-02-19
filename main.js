const buttons = document.querySelectorAll(".button");
const output = document.querySelector("#output");
const enter = document.querySelector("#equalsButton");

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

// Add the click event to fire the operate class
buttons.forEach(button =>{
    button.addEventListener('click', e =>{
        let num1 = parseInt(document.getElementById('num1').value);
        let num2 = parseInt(document.getElementById('num2').value);
        output.innerHTML = operate(button.id, num1, num2);
    })
})