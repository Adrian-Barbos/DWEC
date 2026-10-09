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

function ejercicio3() {
    console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

    // 1. Expresiones mezclando tipos (6 en total, al menos 2 propias)
    console.log('"5" - 2 →', "5" - 2);
    console.log('"5" + 2 →', "5" + 2);
    console.log('"10" / "2" →', "10" / "2");
    console.log('"tres" * 2 →', "tres" * 2);
    console.log('true + 1 →', true + 1);
    console.log('false + "hola" →', false + "hola");

    // 2. Comparaciones con == y con ===
    console.log('5 == "5" →', 5 == "5");
    console.log('5 === "5" →', 5 === "5");
    console.log('0 == false →', 0 == false);
    console.log('0 === false →', 0 === false);
    console.log('null == undefined →', null == undefined);
    console.log('null === undefined →', null === undefined);
}

function ejercicio4() {
    console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

    //Mis datos personales
    const nombre = "Adrián";
    const ciclo = "Desarrollo de aplicaciones web";
    const curso = "2026/2027";
    const afición = "gimnasio";

    //Horas de estudio iniciales
    let horasEstudiadas = 20;
    console.log("Horas estudiadas: ", horasEstudiadas);
    //Horas de estudio tras añadir 5
    horasEstudiadas += 5;
    console.log("Horas estudiadas tras añadir 5: ", horasEstudiadas);

    // Mensaje usando plantilla con backticks
    const datospersonales = `Mi nombre es ${nombre}, estudio ${ciclo} en el curso ${curso} y mi afición es ${afición}.`;
    alert(datospersonales);
    console.log(datospersonales);

    // Mensaje usando concatenación con +
    const datospersonales2 = "Mi nombre es " + nombre + ", estudio " + ciclo + " en el curso " + curso + " y mi afición es " + afición + ".";
    console.log(datospersonales2);

    // Comprobamos si los dos mensajes son iguales (da true)
    const sonIguales = (datospersonales === datospersonales2);
    console.log(sonIguales);

}