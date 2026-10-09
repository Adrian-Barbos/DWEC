function ejercicio1 () {

    console.log("--- Ejercicio 1 · Variables y typeof ---");

    //Declarar las variables

    const velocidadMaxima = 220;   // number
    const marca = "Audi"; // string
    const tieneSeguro = true; // boolean
    const historialAccidentes = null; // null 
    const numeroChasis = 89342893428952389n; // bigint

    let tallerActual;
    tallerActual = undefined; // undefined

    //Mostrar en colsola las variables
    console.log("velocidad máxima =", velocidadMaxima, "→", typeof velocidadMaxima);
    console.log("marca =", marca, "→", typeof marca);
    console.log("tiene seguro =", tieneSeguro, "→", typeof tieneSeguro);
    console.log("historial de accidentes =", historialAccidentes, "→", typeof historialAccidentes);
    console.log("número de chasis =", numeroChasis, "→", typeof numeroChasis);
    console.log("taller actual =", tallerActual, "→", typeof tallerActual);
}

function ejercicio2 () {

    console.log("--- Ejercicio 2 · Conversiones explícitas ---");

    const string = String(123); // Espero: 123
    console.log("String(123) →", string, "| typeof:", typeof string);

    const numero = Number("123"); // Espero: "123"
    console.log("Number('123') →", numero, "| typeof:", typeof numero);

    const numero2 = Number("12abc"); // Espero: NaN
    console.log("Number('12abc') →", numero2, "| typeof:", typeof numero2);

    const numero3 = Number(""); // Espero: 0
    console.log("Number('') →", numero3, "| typeof:", typeof numero3);

    const numero4 = Number(true); // Espero: 1
    console.log("Number(true) →", numero4, "| typeof:", typeof numero4);

    const boolean = Boolean(0); // Espero: false
    console.log("Boolean(0) →", boolean, "| typeof:", typeof boolean);

    const boolean2 = Boolean("texto"); // Espero: true
    console.log("Boolean('texto') →", boolean2, "| typeof:", typeof boolean2);

    const boolean3 = Boolean(""); // Espero: false
    console.log("Boolean('') →", boolean3, "| typeof:", typeof boolean3);
}