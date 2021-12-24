const lista1 = [
    100,
    200,
    300,
    400
];

const SumarListado = (lista) =>{

    const SumalistaAcumulada = lista.reduce(function(acumulado = 0,valoraSumar){
            return acumulado + valoraSumar;
    });
    const PromedioAritmetico = SumalistaAcumulada / lista.length;
    return PromedioAritmetico;
}

const mitad = parseInt(lista1.length / 2);

const esPar = (valor) =>
{
    if(valor % 2 === 0)
    {
        return true;
    }else{
        return false;
    }
}

let mediana ;

if(esPar(lista1.length))
{
    const valor1 = lista1[mitad - 1];
    const valor2 = lista1[mitad];
    const resultado = SumarListado([
        valor1,
        valor2
    ]);
    mediana = resultado;
    
}else{
    mediana = lista1[mitad];
}