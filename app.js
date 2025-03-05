// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (nombre) {
        let nuevoAmigo = {
            nombre: nombre
        };
        listaAmigos.push(nuevoAmigo);
        actualizarListaAmigos();
        document.getElementById("amigo").value = "";
    }
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    let contador = document.getElementById("contador");
    contador.textContent = listaAmigos.length;
    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo.nombre;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos 2 amigos para hacer el sorteo.");
        return;
    }

    let amigosSorteados = [...listaAmigos];
    amigosSorteados.sort(() => Math.random() - 0.5);

    let resultado = amigosSorteados.map((amigo, index) => {
        let siguienteIndex = (index + 1) % amigosSorteados.length;
        return `${amigo.nombre} le regala a ${amigosSorteados[siguienteIndex].nombre}`;
    });

    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    resultado.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        resultadoLista.appendChild(li);
    });

    reiniciarJuego();
}

function reiniciarJuego() {
    listaAmigos = [];
    actualizarListaAmigos();
    console.log("El juego ha sido reiniciado.");
}

// Ejemplo de cómo podrías llamar a estas funciones en tu página web
document.querySelector(".button-add").addEventListener("click", agregarAmigo);
document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
