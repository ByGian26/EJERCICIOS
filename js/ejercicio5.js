const btnEnviar5 = document.getElementById("btnEnviar5");
const monto = document.getElementById("monto");
const resultado5 = document.getElementById("resultado5")

function calcular2 (){
    let mnt = monto.value;
    let ginecologia = parseInt(mnt)*0.40;
    gine = ginecologia.toLocaleString("en-Us");
    let pediatria = parseInt(mnt)*0.30;
    pedia = pediatria.toLocaleString("en-Us");
    let traumatologia = parseInt(mnt)*0.30;
    trau = traumatologia.toLocaleString("en-Us");
    resultado5.innerText = "El monto para Ginecologia es S/ " + gine + "\n" + 
                            "El monto para Pediatria es S/ " + pedia + "\n" + 
                            "El monto para Traumatologia es S/ " + trau;
}

btnEnviar5.onclick = () => calcular2();
