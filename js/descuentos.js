function precioConDescuento(precio, descuento){
const porcentajePrecioconDescuento = 100 - descuento;
const precioFinal = (precio * porcentajePrecioconDescuento) / 100;
return precioFinal;
}
function onClickdiscount(){
    const inputprice = document.getElementById("priceinput")
    const pricevalue = priceinput.value;


    const inputdiscount = document.getElementById("inputdiscount")
    const discountvalue = inputdiscount.value;

    const precioConDescuentos = precioConDescuento(pricevalue, discountvalue);

    const resultP = document.getElementById("resultPrice");
    resultP.innerText = "el precio final es $" + precioConDescuentos;  
}