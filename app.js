let amigos = []; 

// Función para agregar un amigo
function agregarAmigo(event) {
    event.preventDefault(); 

    const input = document.getElementById('amigo'); 
    const nombre = input.value.trim(); 

    
    if (!nombre) {  
        alert("Por favor, inserte un nombre.");
        input.focus(); 
        return; 
    }

   
    if (amigos.includes(nombre)) {
        alert("Ese nombre ya ha sido agregado.");
        input.value = ""; 
        input.focus();
        return;
    }

    
    amigos.push(nombre);
    input.value = ""; 
    mostrarListaAmigos();
}

// Función para mostrar la lista en la página
function mostrarListaAmigos() {
    const listaElement = document.getElementById('listaAmigos'); // Verifica el ID correcto
    listaElement.innerHTML = ""; // Limpia la lista actual

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaElement.appendChild(li);
    });
}


document.addEventListener('DOMContentLoaded', function () {
    const boton = document.querySelector('.button-add');
    boton.removeEventListener('click', agregarAmigo); 
    boton.addEventListener('click', agregarAmigo);
});

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    mostrarResultado(amigoSorteado);
}

function mostrarResultado(amigo) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ""; 

    const li = document.createElement('li');
    li.textContent = `🎉 ¡El amigo sorteado es: ${amigo}! 🎉`;
    resultadoElement.appendChild(li);
}