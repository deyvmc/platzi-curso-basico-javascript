function precioConDescuento(precio, descuento){
const porcentajePrecioconDescuento = 100 - descuento;
const precioFinal = (precio * porcentajePrecioconDescuento) / 100;
return precioFinal;
}