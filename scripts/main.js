import { Calc } from "./calc.js";

let calc = new Calc();

document.getElementById('calculate').addEventListener("click", function () {
    let input1 = document.getElementById('input1').value;
    let input2 = document.getElementById('input2').value;
    let operation = document.getElementById('operation').value;

    console.log(input1);
    console.log(input2);
    console.log(operation);

    let output = calc.add(input1, input2);

    document.getElementById('output').innerText = output;

});