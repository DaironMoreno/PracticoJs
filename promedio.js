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


