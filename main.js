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
            add(num1,num2);
        case '-':
            subtract(num1,num2);
        case 'x':
            multiply(num1,num2);
        case '/':
            divide(num1,num2);
    }
}