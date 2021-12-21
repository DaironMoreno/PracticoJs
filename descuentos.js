/* const precioOriginal = 120; 
const descuento = 18;*/

const calcularDescuento = (precio,descuento) => 
{
    const valorCondescuento = 100 - descuento;
    const resultadoDelDescuento = (precio * valorCondescuento) / 100 ;
    return resultadoDelDescuento;
}

const GestionDeCupones = () => 
{
    const cupones = [
        {
            name : "primer_Cupon",
            descuento: 10
        },
        {
            name : "segundo_Cupon",
            descuento: 20
        },
        {
            name : "tercer_Cupon",
            descuento: 30
        }
    ];

    const precio = document.getElementById("precio").value;
    /*const descuento = document.getElementById("descuento").value;*/
    const cupon = document.getElementById("cupon").value;
    const ResultadoP = document.getElementById("ResultadoP");
    
    const validarCupon = (cupones) =>
    {
        return cupones.name === cupon;
    }

    const UserCupon = cupones.find(validarCupon);

    if(!UserCupon)
    {
        return ResultadoP.innerText = "El Cupon ingresado es Incorrecto";
    }else{
        const descuento = cupones.descuento;
        const resultado = calcularDescuento(precio,descuento)
        return ResultadoP.innerText = "El monto a pagar con el descuento otorgado es $" +resultado;
    }


}
    

    

    


