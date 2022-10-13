(function () {
    var retirarDinero = function (montoRetirar) {
        var dineroActual = 1000;
        return new Promise(function (resolve, reject) {
            if (montoRetirar > dineroActual) {
                reject('No hay suficientes fondos');
            }
            else {
                dineroActual -= montoRetirar; // Se entiene como "a la val -dinero actual- restale (-) el -monto a retirar- y actualiza la val -dinero actual- al valor resultante.
                resolve(dineroActual);
            }
        });
    };
    retirarDinero(500)
        .then(function (montoActual) { return console.log("Me queda ".concat(montoActual, " ")); })["catch"](function (err) { return console.warn(err); }); //puedo solo colocar console.warn
})();
