class producto{
    constructor(nombre, precio, envio) {
        this.nombre = nombre;
        this.precio = Number(precio);
        this.envio = envio;
    }
}

let producto1 = new producto("cartera", 15, "gratis");
let producto2 = new producto("billetera", 30, "gratis");
let producto3 = new producto("pantalon", 72, "gratis");
let producto4 = new producto("remera", 100, "gratis");

let arrayDeProductos = [producto1, producto2, producto3, producto4];

for(i=0; i<arrayDeProductos.length; i++){
    console.log(`Producto:${arrayDeProductos[i].nombre} Precio:${arrayDeProductos[i].precio} Envio:${arrayDeProductos[i].envio}`);
}
