function buscar() {
    document.getElementById("busca")
        .scrollIntoView({ behavior: "smooth" });
}

function adotar(pet) {
    alert("Você escolheu adotar " + pet + "!");

    document.getElementById("formulario")
        .scrollIntoView({ behavior: "smooth" });
}

function buscarPet() {

    let nome = document
        .getElementById("pesquisa")
        .value;

    if (nome == "") {
        alert("Digite o nome do pet.");
    } else {
        alert("Buscando por: " + nome);
    }
}

function enviar() {
    alert("Solicitação enviada com sucesso! 🐾");
}
