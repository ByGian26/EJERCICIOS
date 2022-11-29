const btnEnviar = document.getElementById("btnEnviar");
const horas = document.getElementById("horas");
const tar = document.getElementById("tarifa");
const result = document.getElementById("resultado1")

function definir(){
    let horas_trabajadas = horas.value;
    let tarifa_horas = tar.value;
    salario = (horas_trabajadas*tarifa_horas);

    if(horas_trabajadas>40 ){
        salario=salario+(horas_trabajadas-40)*tarifa_horas*0.5;
    }
    result.innerText = "El salario es: S/" + salario;
}

btnEnviar.onclick = () => definir();