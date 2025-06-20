window.onload = ()=> {
    const button = document.querySelector('#btn')
    button.addEventListener('click', calculateBmi) 
}

function calculateBmi(){
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#result');

    if (!height || isNaN(height) || height < 0){
        result.innerText = 'Please provide a valid height';
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = 'Please provide a valid weight';
        return;
    }
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if( bmi < 18.5){
        result.innerText = `Under Weight: ${bmi}`;
    } else if ( bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
    } else if ( bmi >= 25 && bmi < 29.9){
        result.innerText = `Over Weight: ${bmi}`;
    } else if ( bmi >= 30 && bmi < 34.9){
        result.innerText = `Obesity Class 1: ${bmi}`;
    } else if ( bmi >= 35 && bmi < 39.9){
        result.innerText = `Obesity Class 2: ${bmi}`;
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
    }
}