class producto{
    constructor(nombre, envio){
        this.nombre = nombre;
        this.envio = envio;
    }
}

function crearObjeto(nombre, envio){
    let nombreProducto = prompt("Ingrese el nombre del producto");
    let envioProducto = prompt("Ingrese el tipo de envio");

    let productoCreado = new producto(nombreProducto, envioProducto);
    return  productoCreado;
    
}

let producto1 = crearObjeto();
let producto2 = crearObjeto();

let arrayDeProductos = [producto1, producto2];
console.log(arrayDeProductos);

let producto3 = crearObjeto();

arrayDeProductos.push(producto3);

console.log(arrayDeProductos);

for(let i=0; i<arrayDeProductos.length; i++){
    arrayDeProductos[i].precio = prompt("Cuanto cuesta?")
}

for(let i=0; i < arrayDeProductos.length; i++){
    arrayDeProductos[i].precio = arrayDeProductos[i].precio * 1.21
    console.log(`El precio con IVA de ${arrayDeProductos[i].nombre} es de $${arrayDeProductos[i].precio}`);
}