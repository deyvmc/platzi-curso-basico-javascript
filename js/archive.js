// código del cuadradito
console.group("cuadraditos")
function perimetroCuadrado(lado){
    return lado * 4;
} 
// console.log("El perimetro de mi cuadrado es "+ perimetroCuadrado + "cm");

function areaCuadrado(lado){
return lado * lado
}
// console.log("El área de mi cuadrado es "+ areaCuadrado + "cm²");
console.groupEnd();
//código del triángulo
console.group("triángulos")
    function perimetroTriangulo(lado1,lado2,lado3){
        return lado1 + lado2 + lado3;
    }
//console.log("los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm. ")

function alturaTriangulo(altura){
    return altura
}
function areaTriangulo(baseTriangulo, alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}
console.groupEnd();
//código del circulo
console.group("circulito");

//Radio

function radioCirculo(radio){
    return radio;
}
// console.log("el radio de mi circulo es de " + radioCirculo + "cm")
//Diámetro

function diametroCirculo(radio){
return radio * 2;
}
//console.log ("el diametro de mi circulo es de " + diametroCirculo + " cm")
//PI

const PI = Math.PI;
//console.log("el valor de pi es de " + PI)
//Circunferencia    

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;

}
//console.log("el perimetro de mi circulo es de " + perimetroCirculo + " cm")
//Área

function areaCirculo(radio){
    return (radio * radio) * PI;
}
//console.log("el area de mi circulo es de: " + areaCirculo + " cm²")
console.groupEnd;