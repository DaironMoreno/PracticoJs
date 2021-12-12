// cuadrado
// arrow function , cuando solo se devuelve un valor , el return puede ser implicito
const PerimetroCuadrado = (lado) => lado * 4 ;

const AreaCuadrado = (lado) => lado * lado;

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