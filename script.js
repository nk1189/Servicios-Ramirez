// Simple carousel functionality for dots
document.addEventListener('DOMContentLoaded', () => {
    const dots = document.querySelectorAll('.dot');
    
    for (const dot of dots) {
      dot.addEventListener('click', () => {
        for (const d of dots) {
          d.classList.remove('active');
        }
        dot.classList.add('active');
      });
    }
  });
  
  // Variable para guardar los productos
let carrito = JSON.parse(localStorage.getItem('miCarrito')) || [];
actualizarIcono(); // Actualizar el numerito rojo al cargar

// FUNCIÓN 1: ABRIR/CERRAR EL MENÚ
function toggleCarrito() {
    document.body.classList.toggle('carrito-abierto');
}

// FUNCIÓN 2: AGREGAR COSAS (Esta la usas en tus botones de producto)
function agregarAlCarrito(nombre, precio) {
    // Añadimos el producto
    carrito.push({ nombre, precio });
    
    // Guardamos y actualizamos
    actualizarIcono();
    renderizarCarrito();
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
    
    // Abrimos el carrito para que el usuario vea que funcionó
    if (!document.body.classList.contains('carrito-abierto')) {
        toggleCarrito();
    }
}

// FUNCIÓN 3: PINTAR LA LISTA DENTRO DEL MENÚ
function renderizarCarrito() {
    const lista = document.getElementById('lista-items');
    const totalElemento = document.getElementById('precio-total');
    lista.innerHTML = ''; // Limpiar lista
    
    let total = 0;
    
    carrito.forEach((producto, index) => {
        total += producto.precio;
        lista.innerHTML += `
            <div style="display: flex; justify-content: space-between; margin-bottom: 10px; color: #ccc;">
                <span>${producto.nombre}</span>
                <span>$${producto.precio}</span>
                <button onclick="eliminar(${index})" style="color: red; cursor: pointer; border: none; background: none;">x</button>
            </div>
        `;
    });
    
    totalElemento.innerText = total;
}

function eliminar(indice) {
    carrito.splice(indice, 1);
    actualizarIcono();
    renderizarCarrito();
    localStorage.setItem('miCarrito', JSON.stringify(carrito));
}

function actualizarIcono() {
    document.getElementById('contador-carrito').innerText = carrito.length;
}
