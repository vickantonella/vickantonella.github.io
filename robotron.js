const listaRobotron = document.getElementById("robotron").getElementsByTagName('img');
const lastIndex = listaRobotron.length - 1;
console.log(listaRobotron)
let index = 0;

function voltar() {
    esconder(index);
    index = index === 0? lastIndex : index-1;
    mostrar(index);
}
function seguir() {
    esconder(index);
    index = index === lastIndex? 0 : index+1;
    mostrar(index);
}

function esconder(indexLista) {
    listaRobotron[indexLista].style.display = "none";
}
function mostrar(indexLista) {
    listaRobotron[indexLista].style.display = "block";
}