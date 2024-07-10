function calculateBMI() {
    const height = document.getElementById("height").value / 100; // Convert height to meters
    const weight = document.getElementById("weight").value;

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height * height)).toFixed(2);
        let message = `Your BMI is ${bmi}.`;

        if (bmi < 18.5) {
            message += ' You are underweight.';
        } else if (bmi < 24.9) {
            message += ' You have a normal weight.';
        } else if (bmi < 29.9) {
            message += ' You are overweight.';
        } else {
            message += ' You are obese.';
        }

        document.getElementById("result").textContent = message;
    } else {
        document.getElementById("result").textContent = 'Please enter valid height and weight.';
    }
}