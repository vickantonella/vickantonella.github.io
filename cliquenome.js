function separar() {
    const nomeCompleto = document.getElementById("nome-completo");
    const sobrenome = document.getElementById("sobrenome");
    const nome = document.getElementById("nome");
    
    const valor = nomeCompleto.value.trim();
    const nomeSobrenome = valor.split(' ');
    nome.innerHTML = nomeSobrenome.shift() || '';
    sobrenome.innerHTML = nomeSobrenome.join(' ') || '';
}
