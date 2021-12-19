/* const precioOriginal = 120; 
const descuento = 18;*/

const calcularDescuento = (precio,descuento) => 
{
    const valorCondescuento = 100 - descuento;
    const resultadoDelDescuento = (precio * valorCondescuento) / 100 ;
    return resultadoDelDescuento;
}

const Calculardescuento = () => 
{
    const cupones = [
        "primer_Cupon",
        "segundo_Cupon",
        "tercer_cupon"
    ];
    const precio = document.getElementById("precio").value;
    /*const descuento = document.getElementById("descuento").value;*/
    const cupon = document.getElementById("cupon").value;
    const ResultadoP = document.getElementById("ResultadoP");
    
    let descuento ;
    switch(cupon)
    {
        case cupones[0]:
        descuento = 10;
        break;
        case cupones[1]:
        descuento = 15;
        break;
        case cupones[2]:
        descuento = 20;
        break;
        default:
            descuento = 0;    
        break;

    }
    
    const resultado = calcularDescuento(precio,descuento);
    

    return ResultadoP.innerText = "El monto a pagar con el descuento otorgado es $" +resultado;
    
}

