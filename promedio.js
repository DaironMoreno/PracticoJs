const lista1 = [
    100,
    200,
    300,
    400
];
const SumarListado = (lista) =>{
    let SumalistaAcumulada = 0;
    for(let i = 0 ; i < lista.length; i++)
    {
        SumalistaAcumulada = SumalistaAcumulada + lista[i];
    }
    const PromedioAritmetico = SumalistaAcumulada / lista.length;
    return PromedioAritmetico;
}


