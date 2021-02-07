import { Calc } from "./calc.js";

let calc = new Calc();

document.getElementById('input1').addEventListener("change", function () {

    document.getElementById('humaninput1').innerText = document.getElementById('input1').value;
});

document.getElementById('input2').addEventListener("change", function () {

    document.getElementById('humaninput2').innerText = document.getElementById('input2').value;
});

document.getElementById('calculate').addEventListener("click", function () {
    let input1 = parseFloat(document.getElementById('input1').value);
    let input2 = parseFloat(document.getElementById('input2').value);
    let operation = document.getElementById('operation').value;

    console.log(input1);
    console.log(input2);
    console.log(operation);

    let output = 0;

    if (isNaN(input1) || isNaN(input2)) {
        output = "???";
    } else if (operation == "+") {
        output = calc.add(input1, input2);
    } else if (operation == "-") {
        output = calc.subtract(input1, input2);
    } else if (operation == "*") {
        output = calc.multiply(input1, input2);
    } else if (operation == "/") {
        output = calc.divide(input1, input2);
    }

    console.log(output);

    document.getElementById('output').innerText = output;
    document.getElementById('output2').innerText = output;

});