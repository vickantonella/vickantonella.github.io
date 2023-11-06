// Objeto bankImages com os código de banco para as URLs de imagens
const bankImages = {
    1 : "bancodobrasil.png",
    4 : "nordeste.png",
    33 : "santander.png",
    70 : "brb.png",
    77 : "inter.webp",
    104: "caixa.jpg",
    237 :"bradesco.png",
    358 : "midway.jpg",
    362 : "cielo.png",
    756 : "sicoob.png",
};

// Função para buscar o código do banco a partir da URL
function getBankCodeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("code");
}

// Função para buscar informações do banco pelo código
async function fetchBankDetails() {
    const bankCode = getBankCodeFromURL();
    if (bankCode) {
        try {
            const response = await fetch(`https://brasilapi.com.br/api/banks/v1/${bankCode}`);
            const data = await response.json();
            const bankInfo = document.getElementById('bank-info');
            const image = bankImages[bankCode] ? `<img src="${bankImages[bankCode]}" class="card-img-top" alt="Logo do Banco">` : '';
            bankInfo.innerHTML = `
                <div class="card-body">
                    <h2 class="card-title">${data.name}</h2>
                    ${image}
                    <p class="card-text">Código Bancário: ${data.code}</p>
                    <p class="card-text">Nome completo: ${data.fullName}</p>
                    <p class="card-text">ISPB: ${data.ispb}</p>
                </div>
            `;
        } catch (error) {
            console.error('Erro ao buscar informações do banco selecionado:', error);
        }
    }
}
fetchBankDetails();