
const OrdenarArrays = (arr) =>
{
    arr.sort(function(a,b){
        return a-b
    });
}
const SumarListado = (lista) =>{
    
    

    const SumalistaAcumulada = lista.reduce(function(acumulado = 0,valoraSumar){
            return acumulado + valoraSumar;
    });
    const PromedioAritmetico = SumalistaAcumulada / lista.length;
    return PromedioAritmetico;
}
const esPar = (valor) =>
    {
        if(valor % 2 === 0)
        {
            return true;
        }else{
            return false;
        }
    }

const CalcularMediana = (arr) => {
    let lista = OrdenarArrays(arr);
    let mediana ;
    const mitad = parseInt(lista.length / 2);
    
    if(esPar(lista.length))
    {
        const valor1 = lista[mitad - 1];
        const valor2 = lista[mitad];
        const resultado = SumarListado([
            valor1,
            valor2
        ]);
            return  mediana = resultado;
        
    }else{
            return mediana = lista1[mitad];
    }
}