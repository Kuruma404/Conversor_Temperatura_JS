// TEMPERATURE CONVERSION PROGRAM

const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("emFahrenheit");
const toCelsius = document.getElementById("emCelsius");
const resultado = document.getElementById("resultado");


let temp;


function converter(){
   
    if(emFahrenheit.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        resultado.textContent = temp.toFixed(0) + "°F";
    }

    else if(emCelsius.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        resultado.textContent = temp.toFixed(0) + "°C";
    }

    else
    { resultado.textContent = "Selecione a unidade"; }

}