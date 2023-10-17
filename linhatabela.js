const input = document.getElementById("txtNumRows");
const table = document.getElementById("sampleTableBody");
let contador = 3;

function js_add_rows() {
    const inputValue = input.value;
    if (isNaN(inputValue)) {
        alert("Apenas valores númericos são aceitos.");
        return;
    }
    
    if (inputValue < 1 || inputValue > 10) {
        alert("Só é válido números entre 1 e 10.");
        return;
    }

    for (let i = 1; i <= inputValue; i++) {
        table.innerHTML += `
        <tr>
            <td>Row${contador} cell1</td>
            <td>Row${contador} cell2</td>
        </tr>
        `
        contador++;
    }
}
    