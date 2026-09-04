const adicionar = document.getElementById("btn-add");
const subtrair = document.getElementById("btn-sub");
const zerar = document.getElementById("btn-zero");

let contadorValor = 0;

adicionar.addEventListener("click", function () {
    contadorValor++;
    document.getElementById("contador").innerHTML = contadorValor;
})

subtrair.addEventListener("click", function () {
    contadorValor--;
    document.getElementById("contador").innerHTML = contadorValor;
})

zerar.addEventListener("click", function () {
    contadorValor = 0;
    document.getElementById("contador").innerHTML = contadorValor;
})