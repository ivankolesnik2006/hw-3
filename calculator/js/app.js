const operation = prompt("Enter the operation (add, sub, mult, div):");
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    alert("Please enter valid numbers.");
} else {
    let result;

    if (operation === "add") {
        result = firstNumber + secondNumber;
        alert(`${firstNumber} + ${secondNumber} = ${result}`);
    } else if (operation === "sub") {
        result = firstNumber - secondNumber;
        alert(`${firstNumber} - ${secondNumber} = ${result}`);
    } else if (operation === "mult") {
        result = firstNumber * secondNumber;
        alert(`${firstNumber} * ${secondNumber} = ${result}`);
    } else if (operation === "div") {
        if (secondNumber === 0) {
            alert("Cannot divide by zero.");
        } else {
            result = firstNumber / secondNumber;
            alert(`${firstNumber} / ${secondNumber} = ${result}`);
        }
    } else {
        alert("Invalid operation. Please enter add, sub, mult, or div.");
    }
}
