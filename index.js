let fizzBuzzNum;
const submitBtn = document.getElementById("submit-btn");
const resultsBox = document.getElementById("fizzbuzz-results");
const fizzBuzzResults = {};

// Get value for fizzBuzzNum then get FizzBuzz results
submitBtn.addEventListener("click", () => {
    fizzBuzzNum = parseInt(document.getElementById("fizzbuzz-number").value);
    getFizzBuzzResults(fizzBuzzNum);
});



