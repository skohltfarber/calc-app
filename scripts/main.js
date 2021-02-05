import { Calc } from "./calc.js";

let calc = new Calc();

document.getElementById('calculate').addEventListener("click", function () {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    console.log(input1);
    console.log(input2);
    console.log(operation);

    if ((input1 == "NaN") || (input2 == "NaN")) {
        output = "???";
    } else if (operation == "+") {
        let output = calc.add(input1, input2);
    } else if (operation == "-") {
        let output = calc.subtract(input1, input2);
    } else if (operation == "*") {
        let output = calc.multiply(input1, input2);
    } else if (operation == "/") {
        let output = calc.divide(input1, input2);
    }

    document.getElementById('output').innerText = output;

});