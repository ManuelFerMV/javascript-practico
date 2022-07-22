// Code for square
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
perimetroCuadrado(12)


function areaCuadrado(lado) {
    return lado * lado;
} 

console.groupEnd();

// Code for triangle
console.group("Triángulos");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 

console.groupEnd();

// Code for cicle
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
    return radio * 2;
} 

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd();

// Aquí interactuamos con el html
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}