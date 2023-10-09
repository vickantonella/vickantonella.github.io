const card = document.getElementById("card-teste");
const nome = document.getElementById("exemplo-nome");
const peso = document.getElementById("exemplo-peso");
const altura = document.getElementById("exemplo-altura");

function mostrarCard() {
    card.style.display = "block";
    atualizarCard();
}

function atualizarCard() {
    const pesoValue = parseFloat(peso.value.replace(",", "."));
    const alturaValue = parseFloat(altura.value.replace(",", "."));

    if (isNaN(pesoValue) || isNaN(alturaValue)) {
        alert("Você não colocou números em um campo de peso ou altura");
        fecharCard();
        return;
    }

    const imc = calcularIMC(pesoValue, alturaValue);

    card.innerHTML = `
    <div class="card">
        <div class="card-body">
            <h3 class="card-subtitle">Olá, ${nome.value}.</h3>
            <p class="card-text">O seu IMC é de: ${imc.toFixed(2)}</p>
        </div>
    </div>
    `;
}

function calcularIMC(peso_calc, altura_calc) {
    const imc = peso_calc / (altura_calc ** 2);
    return imc;
}
