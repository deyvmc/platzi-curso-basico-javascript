// código del cuadradito
console.group("cuadraditos")
const ladoCuadrado = 5;
console.log("lados del cuadrado miden "+ ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4; 
console.log("El perimetro de mi cuadrado es "+ perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área de mi cuadrado es "+ areaCuadrado + "cm²");
console.groupEnd();
//código del triángulo
console.group("triángulos")
const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

console.log("los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm. ")

const alturaTriangulo = 5.5;
console.log("la altura del triangulo es de: " + alturaTriangulo + " cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo; 
console.log("el perimetro de mi triangulo es " + perimetroTriangulo + " cm")

const areatriangulo = (baseTriangulo * alturaTriangulo) 
 / 2;
console.log("el area de mi triangulo es de: " + areatriangulo + " cm²")
console.groupEnd();
//código del circulo
console.group("circulito");

//Radio

const radioCirculo = 4;
console.log("el radio de mi circulo es de " + radioCirculo + "cm")
//Diámetro

const diametroCirculo = radioCirculo * 2;
console.log ("el diametro de mi circulo es de " + diametroCirculo + " cm")
//PI

const PI = Math.PI;
console.log("el valor de pi es de " + PI)
//Circunferencia

const perimetroCirculo = diametroCirculo * PI;
console.log("el perimetro de mi circulo es de " + perimetroCirculo + " cm")
//Área

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("el area de mi circulo es de: " + areaCirculo + " cm²")
console.groupEnd;