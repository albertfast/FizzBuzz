function checkSingleResult(): void {
    const inputElement = document.getElementById("numberInput") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLElement;

    if (!inputElement || !resultElement) return;

    const number = parseInt(inputElement.value);
    if (isNaN(number) || number <= 0 || number > 100) {
        resultElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    let output = "";

    if (number % 3 === 0 && number % 5 === 0) {
        output = "FizzBuzz";
    } else if (number % 3 === 0) {
        output = "Fizz";
    } else if (number % 5 === 0) {
        output = "Buzz";
    } else {
        output = number.toString();
    }

    resultElement.textContent = `Result: ${output}`;
}

function checkDetailedResult(): void {
    const inputElement = document.getElementById("numberInput") as HTMLInputElement;
    const resultElement = document.getElementById("result") as HTMLElement;

    if (!inputElement || !resultElement) return;

    const number = parseInt(inputElement.value);
    if (isNaN(number) || number <= 0 || number > 100) {
        resultElement.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    let output = "";

    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += `FizzBuzz (${i})<br>`;
        } else if (i % 3 === 0) {
            output += `Fizz (${i})<br>`;
        } else if (i % 5 === 0) {
            output += `Buzz (${i})<br>`;
        } else {
            output += `${i}<br>`;
        }
    }

    resultElement.innerHTML = output;
}


// Console logs for testing
function testFizzBuzz() {
    const testCases = [3, 5, 15, 7, 9, 10, 1, 100, 0, 101, -5, 220];

    console.log("\nRunning FizzBuzz Test Cases...\n");

    for (let num of testCases) {
        let expected =
            num > 0 && num <= 100
                ? num % 3 === 0 && num % 5 === 0
                    ? "FizzBuzz"
                    : num % 3 === 0
                    ? "Fizz"
                    : num % 5 === 0
                    ? "Buzz"
                    : num.toString()
                : "Please enter a number between 1 and 100.";

        console.log(`Test Input: ${num} - Expected Output: ${expected} ✅`);
    }
}

// Run the test cases
testFizzBuzz();
