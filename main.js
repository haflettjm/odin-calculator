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

let inputHistory = [];
let count = 0;

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

// Add the click event to fire the operate class
buttons.forEach(button =>{
    button.addEventListener('click', e =>{
        if(button.id != 'equals'){
            let inputString = ""
            count++;
            if(button.classList.contains("digits")||button.classList.contains("operators")){
                inputHistory.push(button.id)
            }

            inputHistory.forEach(el =>{
                if(isNumeric(el)){
                    inputString = inputString + el
                }else{
                    inputString = inputString + "  " +el
                }
            })

            input.innerHTML = inputString

        }
    })
})