export class Calc {

    firstInput = 0;
    secondInput = 0;
    operation = "+";
    output = 0;
    created = null;

    constructor(firstInput, secondInput, operation) {
        this.firstInput = firstInput;
        this.secondInput = secondInput;
        this.operation = operation;
        this.output = output;
        this.created = new Date();
    }


    add(a, b) {
        return a + b;
    }

    evaluate() {
        tOutput = 0;
        if (this.operation == "+") {
            tOutput = firstInput + secondInput;
        } else if (this.operation == "-") {
            tOutput = firstInput - secondInput;
        } else if (this.operation == "*") {
            tOutput = firstInput * secondInput;
        } else if (this.operation == "/") {
            tOutput = firstInput / secondInput;
        } else if (this.operation == "^") {
            tOutput = firstInput ^ secondInput;
        }

        this.output = tOutput
        return this.output;
    }

    getInfo() {
        this.evaluate()
        return this.output + " was created at: " + this.toPrettyDate();
    }

    toPrettyDate() {
        return this.toShortDate(this.created) + " " + this.toShortTime(this.created);
    }

    toShortDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();

        let shortDate = month + "/" + day + "/" + year;
        return shortDate;
    }

    toShortTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let ampm = "am";

        if (hours > 12) {
            hours -= 12;
            ampm = "pm";
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        let time = hours + ":" + minutes + ":" + seconds + " " + ampm;
        return time;
    }

}