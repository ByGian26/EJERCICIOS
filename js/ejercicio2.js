const btnEnviar2 = document.getElementById("btnEnviar2");
const radio = document.getElementById("radio");
const resultado2 = document.getElementById("resultado2");

function calcular(){
    let rd = radio.value;
    let perimetro1 = 2*Math.PI*rd;
    per1 = perimetro1.toFixed(2);
    let perimetro2 = (2*Math.PI*rd)*0.5;
    per2 = perimetro2.toFixed(2);
    let perimetro3 = ((2*Math.PI*rd)*0.5)*0.25;
    per3 = perimetro3.toFixed(2);

    resultado2.innerText = "El perimetro de la circunferencia es: "+ per1 +" cm" + "\n" +
                "El perimetro de la circunferencia reducida al 50% es: "+ per2 +" cm" + "\n" +
                "El perimetro de la circunferencia  reducida al 25% de la misma es: "+ per3 +" cm";
}
btnEnviar2.onclick = () => calcular();