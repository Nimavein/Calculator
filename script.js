let numberButtons = document.getElementsByClassName("num-button");
let plusButton = document.getElementById("plus");
let minusButton = document.getElementById("minus");
let multiplyButton = document.getElementById("multiply");
let divideButton = document.getElementById("divide");
let displayField = document.getElementById("calc-screen");
let allclearButton = document.getElementById("all-clear");
let operationButtons = document.getElementsByClassName("operator");
let declaredOperator = "";
let equalButton = document.getElementById("equal-sign");
let newArray =[];

// Adding number to the input field


for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", () => {
        if (numberButtons[i].innerText === "." && displayField.value.includes('.')) {
        }
        else {
            displayField.value += numberButtons[i].innerText;
        }
        
    });
    
}

// Adding operator

for (let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", () => {

        //Changes operand

        if (displayField.value.charAt(displayField.value.length - 1) === "+"
        || displayField.value.charAt(displayField.value.length - 1) === "-" 
        || displayField.value.charAt(displayField.value.length - 1) === "*"
        || displayField.value.charAt(displayField.value.length - 1) === "/") {
            displayField.value = displayField.value.slice(0, displayField.value.length -1);
            declaredOperator = operationButtons[i].innerText;
        //    console.log(declaredOperator);
            displayField.value += declaredOperator;
        }




        else if ((operationButtons[i].innerText === "+" || operationButtons[i].innerText === "-" || 
        operationButtons[i].innerText === "*" || operationButtons[i].innerText === "/") 
        && (displayField.value.includes('+') || displayField.value.includes('-') || displayField.value.includes('*') || displayField.value.includes('/'))) {
        }
        else {
            
            declaredOperator = operationButtons[i].innerText;
        //    console.log(declaredOperator);
            displayField.value += declaredOperator;
            resultFunction;

        }
        
    });
    
}

// Clearing display

allclearButton.addEventListener("click", () => {
    displayField.value = "";
    finalResult = "";
});

//Showing result

let resultFunction = equalButton.addEventListener("click", () => {
    newArray =[];
    let displayFieldSplitted = displayField.value.split(/[-*+/]/);
    console.log(displayFieldSplitted)
    for (let i = 0; i < displayFieldSplitted.length; i++) {
        newArray.push(parseFloat(displayFieldSplitted[i]));
    }
    let finalResult = "";
    if (declaredOperator === "+") {
        finalResult = newArray[0] + newArray[1];
        displayField.value = finalResult;
    }
    
    else if (declaredOperator === "-") {
        console.log(declaredOperator)
        finalResult = newArray[0] - newArray[1];
        displayField.value = finalResult;
    }

    else if (declaredOperator === "*") {
        finalResult = newArray[0] * newArray[1];
        displayField.value = finalResult;
    }

    else if (declaredOperator === "/") {
        finalResult = newArray[0] / newArray[1];
        displayField.value = finalResult;
    }
    
    console.log(newArray);
})


