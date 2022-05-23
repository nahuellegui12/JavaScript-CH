//Calcular IVA de un producto. Si el precio es menor a $100 debe comprarlo, si es mayor no debe comprarlo

let producto = prompt('Que producto queres comprar?');
let precio= Number(prompt('Ingrese costo para calcular IVA?'));

function calcularPrecioIva(precio){
    let iva = 1.21;
    return producto * iva;
}

console.log ("El producto " + producto + " Cuesta " + "$" + calcularPrecioIva(precio));

precio = calcularPrecioIva(precio)

if(precio < 100){
    console.log("Comprar");
} else {
    console.log("No lo quiero")
}