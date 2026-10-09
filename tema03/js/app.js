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

