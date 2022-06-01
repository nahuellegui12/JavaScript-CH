document.querySelector(".crear-productos").onclick = function () {
  let $cantidadDeProductos = document.querySelector(".cantidad-de-productos");
  let cantidadDeProductos = Number($cantidadDeProductos.value);

  borrarProductosAnteriores();
  for (let i = 0; i < cantidadDeProductos; i++) {
    crearProducto(i);
  }
  return false;
};

function crearProducto(indice) {
    const $div = document.createElement("div");
    $div.className = "producto";

    const $label = document.createElement("label");
    $label.textContent = "Producto #" + (indice + 1);

    $div.appendChild($label);

    const $productos = document.querySelector(".productos");
    $productos.appendChild($div);
  }

function borrarProductosAnteriores() {
    const $producto = document.querySelectorAll('.producto');
    for (let i = 0; i < $producto.length; i++) {
      $producto[i].remove();
    }
  }

