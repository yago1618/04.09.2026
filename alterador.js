const vermelho = document.getElementById("vermelho");
const verde = document.getElementById("verde");
const azul = document.getElementById("azul");
const amarelo = document.getElementById("amarelo");
const textoCor = document.getElementById("textoCor");

vermelho.addEventListener("click", function () {
    document.getElementById("quadrado").style.backgroundColor = "red";
    document.getElementById("textoCor").style.color = "red";
    textoCor.innerHTML = "Vermelho";
});

verde.addEventListener("click", function () {
    document.getElementById("quadrado").style.backgroundColor = "green";
    document.getElementById("textoCor").style.color = "green";
    textoCor.innerHTML = "Verde";
});

azul.addEventListener("click", function () {
    document.getElementById("quadrado").style.backgroundColor = "blue";
    document.getElementById("textoCor").style.color = "blue";
    textoCor.innerHTML = "Azul";
});

amarelo.addEventListener("click", function () {
    document.getElementById("quadrado").style.backgroundColor = "yellow";
    document.getElementById("textoCor").style.color = "yellow";
    textoCor.innerHTML = "Amarelo";
}); 