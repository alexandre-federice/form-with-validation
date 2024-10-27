const botaoEnviar = document.getElementById("btn-enviar");
const camposObrigatorios = document.querySelectorAll(".mensagem input");

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault();

    camposObrigatorios.forEach(campo => {

        const obrigatorio = campo.nextElementSibling;

        if (campo.value.trim() !== "") {
            campo.classList.remove("vazio");
            campo.classList.add("preenchido");
            campo.style.marginBottom = "15px";
            if (obrigatorio) {
                obrigatorio.style.display = 'none';
            }
        } else {
            campo.classList.remove("preenchido");
            campo.classList.add("vazio");
            campo.style.marginBottom = "0";
            if (obrigatorio) {
                obrigatorio.style.display = 'block';
                obrigatorio.style.marginBottom = "5px";
            }
        }
    });
});