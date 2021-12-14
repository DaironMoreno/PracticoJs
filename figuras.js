// cuadrado
// arrow function , cuando solo se devuelve un valor , el return puede ser implicito
const PerimetroCuadrado = (lado) => lado * 4 ;

const AreaCuadrado = (lado) => lado * lado;


function calcularArea(){
    const valor = document.getElementById("area").value;
    const calculoDeArea = AreaCuadrado(valor);
    return alert(calculoDeArea);
}
function calcularPerimetro()
{
    const valor = document.getElementById("perimetro").value;
    const calculoDeperimetro = PerimetroCuadrado(valor);
    return alert(calculoDeperimetro);
}
//triángulo
// ARROW FUNCTION PERO SIN RETURN IMPLICITO
const perimetroTriangulo = (Lado1 , Lado2, base) => {
    return Lado1 + Lado2 + base;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2 
};


// areá del circulo




function diametroCirculo(radio) 
{
    return radio * 2
}
const pi = Math.pi;
function perimetroCirculo(radio)
{
    const diametroC =  diametroCirculo(radio);
    return diametroC * pi
} 
function  areaCirculo(radio) { 
    return (radio * radio) * pi;
}