 

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.image-container, .title, .footer-text');
    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 1s';
        setTimeout(() => { el.style.opacity = '1'; }, 100);
    });
});
const productos = [
    { id: 1, nombre: "VICTUS", descripcion: "Laptop Gamer VICTUS", precio: 600} ,
    {  id: 2, nombre: "ASUUS", descripcion: "Laptop para oficina", precio: 700} ,
    {  id: 3, nombre: "DELL INSPIRON", descripcion: "Laptop para estudiantes", precio: 300}, 
    {  id: 4, nombre: "LENOVO YOGA", descripcion: "Laptop para estudiantes", precio: 300},
    {  id: 5, nombre: "LENOVO", descripcion: "Laptop para estudiantes", precio: 300}
   

    // ... más productos
];
function mostrarDetalles(id) {
    const producto = productos.find(p => p.id === id);
    document.getElementById('detalles-producto').innerHTML = `
        <h2>${producto.nombre}</h2>
        <p>${producto.descripcion}</p>
        <p>Precio: $${producto.precio}</p>
    `;
    document.getElementById('detalles-producto').classList.remove('oculto');
}
const boton = document.querySelector('.carrito');
const mensaje = document.getElementById('mensaje');

boton.addEventListener('click', () => {
  document.write("hola");
  
});

