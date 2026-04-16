const productos = [
    {nombre:"Laptos Gamer.", precio: 1200 , disponibilidad: true},
    {nombre:"Teclado Mecánico.", precio: 80, disponibilidad: false},
    {nombre:"Mouse Inalámbrico.", precio:35, disponibilidad: true},
    {nombre: "Monitor UltraWide.", precio: 450, disponibilidad: true},
    {nombre: "Auriculares Bluetooth.", precio: 60, disponibilidad:false},
    {nombre: "Webcam HD.", precio: 40, disponibilidad:true},
];

productos.forEach((producto, indice) => {
console.log("Producto:", producto.nombre, "Precio:", producto.precio, "Disponible:", producto.disponibilidad);

});

const precioConDescuentos = productos
.filter(producto => producto.disponibilidad === true)
.map(producto =>  ({
    Nombre: producto.nombre, precioConDescuentos: producto.precio * 0.9
}));
console.log("Nombre:", producto.nombre, "Precio con Descuento:", producto.precio);

const productosBaratos = productos
.filter(producto => producto.disponibilidad === true && producto.precio <= 100)
.map(producto => ({Nombre: producto.nombre, Precio: producto.precio }))
console.log("Productos Baratos:", productosBaratos);

const valorTotal = [precio];
const suma = productos.reduce((total, productos) => {  
    if(producto.disponibilidad) {
        total + productos.precio;
    }
}

,console.log("Valor total:", valorTotal));
