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