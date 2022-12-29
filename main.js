class Productos {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

const producto1 = new Productos ("Mouse Logitech 502", "Mouse inalambrico de diseño ergonomico con tecnologia lighspeed", 16.000);
const producto2 = new Productos ("Monitor gaming Samsung F54GJX","Monitor de 27 pulgadas, 1ms de respuesta y resolucion de 1920x1080p", 88.000);
const producto3 = new Productos ("Placa de video NVIDIA RTX 3080ti EVGA", "PCI-Express 4.0, 384 bit, 10240 nucleos, frecuencias de 1800MH", 450.000);
const producto4 = new Productos ("Procesador AMD Ryzen 7 5700g", "Ideal para jugadores y creadores de contenidos, memoria caché 16MB, RAM DDR4", 65.000);
const producto5 = new Productos ("Teclado Redragon Kumara", "Teclado mecanico gamer, con switches brown, y rapida respuesta", 15.000);

const arrayProductos = [];

arrayProductos.push(producto1);
arrayProductos.push(producto2);
arrayProductos.push(producto3);
arrayProductos.push(producto4);
arrayProductos.push(producto5);

console.log(arrayProductos);

function menu() {
    alert("Bienvenido al centro de control de productos de HurlinGaming");
    let opcion = parseInt(prompt("Ingrese una opción: \n 1) Alta de producto \n 2) Baja de producto \n 3) Modificación de productos \n 4) Consulta de productos \n 5) Salir"));
    return opcion;
}

function altaProductos() {
    let nombre = prompt("ingrese el nombre del producto");
    let descripcion = prompt("Ingrese la descripción");
    let precio = parseInt(prompt("Ingrese el precio"));
    let altaProducto = new Productos(nombre, descripcion, precio);
    arrayProductos.push(altaProducto);
    console.log(altaProducto);
}

function bajaProductos() {
    let nombre = prompt("ingrese el nombre del producto");
    let producto = arrayProductos.find (producto => producto.nombre === nombre);
    let indice = arrayProductos.indexOf(producto);
    arrayProductos.splice(indice, 1);
    console.log(arrayProductos);
}

function modificarPrecioProducto() {
    let nombre = prompt("ingrese el nombre del producto");
    let producto = arrayProductos.find (producto => producto.nombre === nombre);
    let indice = arrayProductos.indexOf(producto);
    let nuevoNombre = prompt("Ingrese el nuevo nombre del producto")
    let nuevaDescripcion = prompt("Ingrese la nueva descripcion del producto");
    let nuevoPrecio = parseInt(prompt("Ingrese el nuevo precio del Producto"));
    let productoModificado = new Productos (nuevoNombre, nuevaDescripcion, nuevoPrecio);
    arrayProductos.splice(indice, 1, productoModificado);
    console.log(arrayProductos);
}

function consultaProductos() {
    let nombre = prompt("Ingrese el nombre del producto");
    let consulta = arrayProductos.find (producto => producto.nombre === nombre);
    console.log(consulta);
}

function salir() {
    alert ("Gracias por visitar HurlinGaming");
}


let opcion = menu();
switch (opcion) {
    case 1:
        altaProductos();
        break;
    case 2:
        bajaProductos();
        break;
    case 3:
        modificarPrecioProducto();
        break;
    case 4:
        consultaProductos();
        break;
    case 5:
        salir();
        break;
    default:
        alert("La opción marcada es incorrecta");
        break;
}