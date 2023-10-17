function contarVogais() {
    const inputString = document.getElementById('inputString').value;
    const vogais = [
    "a", "á", "à", "ã", "â",
    "e", "é", "è", "ê",
    "i", "í", "ì", "î",
    "o", "ó", "ò", "õ", "ô",
    "u", "ú", "ù", "û",
];
    let contador = 0;

    for (let i = 0; i < inputString.length; i++) {
      if (vogais.includes(inputString[i].toLowerCase())) {
        contador++;
      }
    }

    document.getElementById('resultado').textContent = `Número de vogais na string: ${contador}`;
  }
