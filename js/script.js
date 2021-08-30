window.onload = function () {
    const botoes = document.querySelectorAll(".botao");
    const tela = document.getElementById("tela");
    const btnIgual = document.getElementById("resultado");
    const btnLimpar = document.getElementById("limpar");
    let telao = "";

    botoes.forEach(btn => {
        btn.addEventListener('click', function () {
            tela.innerHTML += btn.value;
            telao += btn.value;
            console.log("click " + btn.value);
        })
    });

    btnIgual.addEventListener('click', function () {
        tela.innerHTML = `${eval(telao)}`;
    })

    btnLimpar.onclick = function () {
        tela.innerHTML = ``;
        telao = "";
    }
}