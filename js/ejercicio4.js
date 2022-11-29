const btnEnviar4 = document.getElementById("btnEnviar4");
const nota1 = document.getElementById("nota1");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const nota4 = document.getElementById("nota4");
const nota5 = document.getElementById("nota5");
const resultado4 = document.getElementById("resultado4")

function promedio (){
    let n1 = nota1.value;
    let n2 = nota2.value;
    let n3 = nota3.value;
    let n4 = nota4.value;
    let n5 = nota5.value;
    prom_parcial = (parseInt(n2)+parseInt(n3)+parseInt(n4))/3;
    prom_final= (prom_parcial*0.55)+(n1*0.3)+(n5*0.15);
    prfinal = prom_final.toFixed(2);

    resultado4.innerText = "El Promedio Final es: " + prom_final;
}

btnEnviar4.onclick = () => promedio();