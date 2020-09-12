var name = "Thais Wemberlaine Dias Machado Rocha";
alert ("Página desenvolvida por " + name);

function clicou() {
    alert("Obrigada por clicar");
    document.getElementById("boas-vindas").innerHTML = "Bem-vinda à minha página";
    document.getElementById("github").innerHTML = "<b>Github</b>";
}

function redirecionar() {
    window.open("https://github.com/ThWember/");
}