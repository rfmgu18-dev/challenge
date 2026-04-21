const productos = [
    {nombre:"Laptos Gamer.", precio: 1200 , disponibilidad: true},
    {nombre:"Teclado Mecánico.", precio: 80, disponibilidad: false},
    {nombre:"Mouse Inalámbrico.", precio:35, disponibilidad: true},
    {nombre: "Monitor UltraWide.", precio: 450, disponibilidad: true},
    {nombre: "Auriculares Bluetooth.", precio: 60, disponibilidad:false},
    {nombre: "Webcam HD.", precio: 40, disponibilidad:true},
];

productos.forEach((producto, indice) => {
console.log("1) Producto:", producto.nombre, "Precio:", producto.precio, "Disponible:", producto.disponibilidad);
});

const precioConDescuentos = productos
.filter(producto => producto.disponibilidad === true)
.map(producto => ({
    Nombre: producto.nombre, precioConDescuentos: producto.precio * 0.9
}));

// Imprimir cada producto con descuento
precioConDescuentos.forEach(producto => {
    console.log("2) Nombre:", producto.Nombre, "Precio con Descuento:", producto.precioConDescuentos);
});

const productosBaratos = productos
.filter(producto => producto.disponibilidad === true && producto.precio <= 100)
.map(producto => ({Nombre: producto.nombre, Precio: producto.precio}));

console.log("3) Productos Baratos:", productosBaratos);

// Suma de precios de productos disponibles usando reduce
const valorTotal = productos.reduce((total, producto) => {
    if (producto.disponibilidad) {
        return total + producto.precio;
    }
    return total;
}, 0);

console.log("4) Valor total de productos disponibles:", valorTotal);

// Encontrar un producto en específico usando find
let específico = productos.find(producto => producto.nombre === "Webcam HD.");
console.log("5) Producto específico:", específico);

