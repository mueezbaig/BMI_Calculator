document.addEventListener("DOMContentLoaded", function(){
    const calculate = document.getElementById("Calculatebtn")

    Calculatebtn.addEventListener('click', function(){
        calculateBMI();
    });

    function calculateBMI(){
        const weight = parseFloat(document.getElementById("weight").value)
        const  height = parseFloat(document.getElementById("height").value);

        if (isNaN(weight) || isNaN(height) || weight<=0 ||  height <=0){
            alert("please enter valid values.");
            return;
        }

        const bmi = weight / (height * height);
        const bmiResult = getBMIresult(bmi);

        document.getElementById("result").textContent = `Your BMI: ${bmi.toFixed(1)} - ${bmiResult}`;
    }

    function getBMIresult(bmi){
        if (bmi< 18.5) {
            return "Underweight";
        }
        else if (bmi >=18.5 && bmi<24.9){
            return 'Normal Weight';
        }
        else if (bmi>=25 && bmi < 29.9){
            return 'Over Weight';
        }
        else{
            return 'obese'
        }
    }
});