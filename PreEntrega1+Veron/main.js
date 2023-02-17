// Definimos una función que calcula el precio total del producto
function calcularPrecioTotal(precio, cantidad, descuento) {
  var precioTotal = precio * cantidad;

  // Aplicamos el descuento si se paga en efectivo
  if (descuento && descuento === "efectivo") {
    precioTotal = precioTotal * 0.7;
  }

  return precioTotal;
}

// Pedimos al usuario que ingrese la información del primer producto
var nombre = prompt("Ingrese el nombre del primer producto (o 'salir' para terminar)");
var precioTotal = 0;

// Iteramos sobre los productos mientras se ingresen nuevos productos
while (nombre !== "salir") {
  var precio = parseFloat(prompt("Ingrese el precio del producto"));
  var cantidad = parseInt(prompt("Ingrese la cantidad del producto"));
  var formaDePago = prompt("Ingrese la forma de pago (efectivo o tarjeta)");

  // Verificamos que el precio y la cantidad sean valores numéricos válidos
  if (!isNaN(precio) && !isNaN(cantidad)) {
    // Calculamos el precio total del producto utilizando la función calcularPrecioTotal() y lo sumamos al precio total acumulado
    var descuento = formaDePago === "efectivo" ? "efectivo" : null;
    var precioProducto = calcularPrecioTotal(precio, cantidad, descuento);
    precioTotal += precioProducto;

    // Mostramos el precio total del producto al usuario utilizando alert
    alert("El precio total de " + nombre + " es: $" + precioProducto.toFixed(2));
  } else {
    // Si el usuario ingresa un valor inválido, mostramos una alerta indicando que el valor es inválido
    alert("Se ingresó un valor inválido para el precio o la cantidad.");
  }

  // Pedimos al usuario que ingrese la información del siguiente producto
  nombre = prompt("Ingrese el nombre del siguiente producto (o 'salir' para terminar)");
}

// Mostramos el precio total de todos los productos al usuario utilizando alert
alert("El precio total de todos los productos es: $" + precioTotal.toFixed(2));
