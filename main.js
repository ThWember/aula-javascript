var name = "Thais Wemberlaine Dias Machado Rocha";
var d = new Date();
alert ("Página desenvolvida por " + name + " Horário local: " + (d.getHours()) + ":" + (d.getMinutes()));

function clicou() {
    alert("Obrigada por clicar");
    document.getElementById("boas-vindas").innerHTML = "Bem-vinda à minha página";
    document.getElementById("github").innerHTML = "<b>Github</b>";
    document.getElementById("redirecionar");
}

function trocar() {
    document.getElementById("redirecionar").innerHTML = "<b>Ir para a minha página no github</b>";
}

function redirecionar() {
    window.open("https://github.com/ThWember/");
}