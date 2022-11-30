const {BMI, bmiInt} = require("./bmi_calculator");

test("Checks if BMI of a 85kg and 1.65m person is 31.22", () => {
    expect(BMI).toEqual(31.22130394857668);
});

test("Checks if a BMI of 31.22 is Obese", () => {
    expect(bmiInt).toEqual("You're Obese");
})