let contador = 3
function js_add_rows() {
    let input = document.querySelector('#txtNumRows').value;
    const template = document.querySelector("#template");
    if (filterInt(input) == 's'){
        document.querySelector('#error').innerHTML = 'Só é aceito valores numéricos.'
    }
    for (let i = 0; i < input; i++) {
        document.querySelector('#sampleTable').innerHTML += template.innerHTML = `<td>Row${contador} cell1</td>` + `<td>Row${contador} cell2</td>`;
        contador++
    }
}

filterInt = function (value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value)) return Number(value);
    return 's';
  };
    