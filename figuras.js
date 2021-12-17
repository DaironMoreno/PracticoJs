//funciones varias
const ConvertiraEntero = (valor) =>{
    return parseInt(valor);
}


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
    const resultado = Lado1 + Lado2 + base;
    return resultado;
} 

function areaTriangulo(base, altura) {
    return (base * altura) / 2 
};
function calcularPerimetroT(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    valor1 = ConvertiraEntero(lado1);
    valor2 = ConvertiraEntero(lado2);
    base3 = ConvertiraEntero(base);

    let a = ConvertiraEntero(altura); 

    const perimetroTrianguloA = perimetroTriangulo(valor1,valor2,base3);
    return alert(perimetroTrianguloA);
}
function calcularAreaT()
{
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;

    const areaT = areaTriangulo(base,altura);
    return alert(areaT);
}

// calcular aarea de un triángulo isósceles


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