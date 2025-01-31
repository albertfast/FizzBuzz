# FizzBuzz# FizzBuzz Project

This project implements the classic **FizzBuzz** problem using **TypeScript** and **HTML**. The application provides two functionalities: single FizzBuzz result and detailed results for a range of numbers.

---

## Features
 **FizzBuzz Logic**:
  - Outputs **Fizz** if a number is divisible by 3.
  - Outputs **Buzz** if a number is divisible by 5.
  - Outputs **FizzBuzz** if a number is divisible by both 3 and 5.
  - Outputs the **number itself** if none of the above conditions are met.
- Includes **input validation** to ensure the number is between **1 and 100**.
- Offers **two result options**:
  1. **Single Result**: Displays the FizzBuzz result for a specific number.
  2. **Detailed Results**: Displays FizzBuzz results for all numbers from 1 up to the entered number.

---

## Getting Started

### Prerequisites
Before running this project, ensure you have the following installed on your system:

1. **Node.js** and **npm**  
   Download and install the latest version of Node.js from [Node.js Official Website]
   (https://nodejs.org).  
   Verify the installation by running:
   bash
   node -v
   npm -v
2. TypeScript Compiler (tsc)
   Install the TypeScript compiler globally to compile .ts files into .js. Use the command:
   npm install -g typescript

   Confirm the installation with:
   tsc -v

Installation Steps

1.  Clone the repository to your local machine:
    git clone https://github.com/albertfast/firstcodeday.git

    cd repository-name

2.  Install the project dependencies:

    npm install

3.  Compile the TypeScript files:

    tsc 
    
4.  Open the index.html file in your preferred web browser to view the application.

Run the Project
To run and test the application locally:

1.  Open your terminal in the project directory.
2.  Compile TypeScript files using
    tsc
3.  Open the index.html file in your preferred web browser.

Example Usage
1.  Enter a number in the input field and press "Check Single Result" to get the FizzBuzz output for that number.
2.  Press "Check Detailed Results" to see FizzBuzz outputs for all numbers from 1 to the entered number.
