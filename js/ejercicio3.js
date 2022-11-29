const btnEnviar3 = document.getElementById("btnEnviar3");
const horas2 = document.getElementById("horas2");
const tarifa2 = document.getElementById("tarifa2");
const result3 = document.getElementById("resultado3")

function porcentaje(){
    let horas_trabajadas2 = horas2.value;
    let tarifa_horas2 = tarifa2.value;
    salario = (horas_trabajadas2*tarifa_horas2);
    salario2 = (horas_trabajadas2*tarifa_horas2)*0.10;
    salario3 = (horas_trabajadas2*tarifa_horas2)*0.30;
    salario4 = (horas_trabajadas2*tarifa_horas2)*0.60;
    salario5 = (horas_trabajadas2*tarifa_horas2)*0.80;

    result3.innerText = "El salario neto es: S/ " + salario + "\n" +
    "El salario en 10% es: S/ " + salario2 + "\n" +  
    "El salario en 30% es: S/ " + salario3 + "\n" +  
    "El salario en 60% es: S/ " + salario4 + "\n" +  
    "El salario en 80% es: S/ " + salario5; 

}

btnEnviar3.onclick = () => porcentaje();