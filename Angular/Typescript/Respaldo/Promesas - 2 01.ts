(()=>{

    const retirarDinero = ( montoRetirar: number ) : Promise < number > => {  //tipado de promesas.

        let dineroActual = 1000;

        return new Promise( ( resolve, reject ) => {

            if (montoRetirar > dineroActual ) {
                reject('No hay suficientes fondos');
            }else{
                dineroActual -=montoRetirar; // Se entiene como "a la val -dinero actual- restale (-) el -monto a retirar- y actualiza la val -dinero actual- al valor resultante.
                resolve (dineroActual);
            }

        });
    }

    retirarDinero( 500 )
        .then(montoActual => console.log(`Me queda ${montoActual} `))
        .catch(err => console.warn(err)) //puedo solo colocar console.warn

})();
