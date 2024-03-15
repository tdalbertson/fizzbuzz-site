let fizzBuzzNum;
const submitBtn = document.getElementById("submit-btn");
const resultsBox = document.getElementById("fizzbuzz-results");
let fizzBuzzResults = {};

// Get fizzbuzz-results by assigning key-value pairs of the number
// and it's corresponding Fizzbuzz result
function getFizzBuzzResults(num) {
    // Loop through until fizzBuzzNum
    for (let index = 1; index <= num; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            fizzBuzzResults[index] = "FizzBuzz";
        } else if (index % 3 === 0) {
            fizzBuzzResults[index] = "Fizz";
        } else if (index % 5 === 0) {
            fizzBuzzResults[index] = "Buzz";
        } else {
            fizzBuzzResults[index] = "N/A";
        }
    }
    displayResults(fizzBuzzResults);
    fizzBuzzResults = {};
}

function updateResultsClass() {
    resultsBox.classList.add("after-results");
    resultsBox.classList.remove("before-results");
}

// Display results to results box
function displayResults(fizzBuzzResults) {
    // To clear existing text value
    updateResultsClass();
    resultsBox.innerText = "";
    for (num in fizzBuzzResults) {
        resultsBox.innerText += `${num}: ${fizzBuzzResults[num]}\n`;
    }
}

// Get value for fizzBuzzNum then get FizzBuzz results
submitBtn.addEventListener("click", () => {
    fizzBuzzNum = parseInt(document.getElementById("fizzbuzz-number").value);
    getFizzBuzzResults(fizzBuzzNum);
});
