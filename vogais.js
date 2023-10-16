function contarVogais() {
    const inputString = document.getElementById('inputString').value;
    const vogais = 'aeiou';
    let contador = 0;

    for (let i = 0; i < inputString.length; i++) {
      if (vogais.includes(inputString[i].toLowerCase())) {
        contador++;
      }
    }

    document.getElementById('resultado').textContent = `Número de vogais: ${contador}`;
  }