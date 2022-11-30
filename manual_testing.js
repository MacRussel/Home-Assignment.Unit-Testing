const {BMI, bmiInt} = require("./bmi_calculator");

console.log("\nStart Manual Testing...")

const testBMI = () => {
    console.log("\nTesting BMI calculator function");
    const expectedBMI = 31.22130394857668;
    const result = BMI;
    console.assert(
        result == expectedBMI,
        `The result ${result} does not match the expected value ${expectedBMI}`
    );
    if (result == expectedBMI) {console.log(`PASSED...`)};
}

const testBMIinterpretation = () => {
    console.log("\nTesting BMI interpretation function")
    const expectedInt = "You're Obese";
    const result = bmiInt;
    console.assert(
        result == expectedInt,
        `The result "${result}" does not match the expected value "${expectedInt}"`
    );
    if (result == expectedInt) {console.log(`PASSED...`)};
}

testBMI();
testBMIinterpretation();