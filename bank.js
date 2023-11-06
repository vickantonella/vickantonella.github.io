async function fetchBankData() {
    try {
        const response = await fetch('https://brasilapi.com.br/api/banks/v1');
        const data = await response.json();
        const bankList = document.getElementById('bank-list');

        data.forEach(bank => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            const link = document.createElement('a');
            link.textContent = bank.name;
            link.href = `bankinformacoes.html?code=${bank.code}`; // Passa o código do banco como parâmetro
            listItem.appendChild(link);
            bankList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Erro ao buscar os dados dos bancos:', error);
    }
}

fetchBankData();