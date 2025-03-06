// Lista para almacenar los nombres de los amigos
let amigos = [];

/**
 * Agrega un amigo a la lista
 */
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios en blanco al inicio y final

    // Validación: No permitir nombres vacíos o repetidos
    if (nombre === "" || amigos.includes(nombre)) {
        alert("Ingresa un nombre válido y que no esté repetido.");
        return;
    }

    amigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista(); // Actualiza la lista visual en HTML
    input.value = ""; // Limpia el campo de entrada
    verificarBotones(); // Habilita o deshabilita botones según la cantidad de amigos
}

/**
 * Muestra la lista actual de amigos en pantalla
 */
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista antes de volver a generarla

    amigos.forEach((nombre, index) => {
        let li = document.createElement("li"); // Crea un elemento <li>
        li.textContent = nombre; // Agrega el nombre dentro de la lista

        // Botón para eliminar un amigo de la lista
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌"; // Emoji de eliminar
        botonEliminar.onclick = () => eliminarAmigo(index); // Asigna función de eliminar

        li.appendChild(botonEliminar); // Agrega el botón dentro del <li>
        lista.appendChild(li); // Agrega el <li> a la lista
    });
}

/**
 * Elimina un amigo de la lista según su índice
 * @param {number} index - Posición del amigo en la lista
 */
function eliminarAmigo(index) {
    amigos.splice(index, 1); // Elimina el amigo de la lista
    actualizarLista(); // Refresca la lista en pantalla
    verificarBotones(); // Verifica si hay que deshabilitar botones
}

/**
 * Habilita o deshabilita los botones de sorteo y reinicio según la cantidad de amigos
 */
function verificarBotones() {
    document.querySelector(".button-draw").disabled = amigos.length < 2; // Necesita al menos 2 amigos para sortear
    document.querySelector(".button-reset").disabled = amigos.length === 0; // Se desactiva si no hay nombres
}

/**
 * Sortea un solo nombre de la lista y lo muestra en pantalla
 */
function sortearAmigo() {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpia cualquier resultado anterior

    let amigoElegido = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un nombre aleatorio

    let li = document.createElement("li"); // Crea un nuevo elemento <li>
    li.textContent = `${amigoElegido} ✅`; // Muestra el nombre del ganador con emoji de check ✅
    resultadoLista.appendChild(li); // Agrega el ganador a la lista de resultados
}

/**
 * Reinicia el sorteo eliminando todos los nombres y limpiando la pantalla
 */
function reiniciarSorteo() {
    amigos = []; // Vacía la lista de amigos
    document.getElementById("listaAmigos").innerHTML = ""; // Borra la lista visual
    document.getElementById("resultado").innerHTML = ""; // Borra el resultado del sorteo
    verificarBotones(); // Deshabilita los botones
}
