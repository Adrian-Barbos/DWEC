/*
  Tarea 4 · DWEC · Adrián Barbos
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  // TODO: como sumar(), con el operador -
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  // TODO: como sumar(), con el operador *
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  // TODO: como sumar(), con el operador /
  // TODO: si el número 2 es 0, muestra un error en rojo. Ojo: en JavaScript, 5 / 0 no da error, da Infinity.
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
   
}

function potencia() {
  // TODO: como sumar(), con el operador **
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  // TODO: el resto de la división, con el operador %
  // TODO: si el número 2 es 0, muestra un error en rojo (5 % 0 da NaN).
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: falta algún número");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // TODO: con if, else if y else, di cuál de los dos números es mayor o si son iguales.
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
  } else {
    if (n1 > n2) {
      mostrar(`${n1} es mayor que ${n2}`);
      console.log(`CualEsMayor: ${n1} es mayor que ${n2}`);
    } else if (n1 < n2) {
      mostrar(`${n2} es mayor que ${n1}`);
      console.log(`CualEsMayor: ${n2} es mayor que ${n1}`);
    } else {
      mostrar(`${n1} y ${n2} son iguales`);
      console.log(`CualEsMayor: ${n1} y ${n2} son iguales`);
    }
}
}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
  
  const n1 = leerNumero("numero1");
  
  // Si el número tiene decimales, avisa de que no es ni par ni impar
  if (!Number.isInteger(n1)) {
    return "No es ni par ni impar (tiene decimales)";
  }
  
  // Usa % para saber si es par y el ternario para elegir la palabra
  return (n1 % 2 === 0) ? "par" : "impar";

}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Validación: si falta (isNaN), tiene decimales o pasa de MAXIMO_REPETICIONES
  if (isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: número inválido, con decimales o superior al máximo permitido.", "danger");
    return;
  }

  let contador = 0;

  // Bucle for
  for (let i = 1; i <= veces; i++) {
    anadirLinea(`for · repetición ${i} de ${veces}`);
    contador++;
  }

  // Total con manejo correcto de singular y plural
  const textoTotal = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
}



function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Validación: si falta (isNaN), tiene decimales o pasa de MAXIMO_REPETICIONES
  if (isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: número inválido, con decimales o superior al máximo permitido.", "danger");
    return;
  }

  let contador = 0;
  let i = 1;

  // Bucle while
  while (i <= veces) {
    anadirLinea(`while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  }

  // Total con manejo correcto de singular y plural
  const textoTotal = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Validación: si falta (isNaN), tiene decimales o pasa de MAXIMO_REPETICIONES
  if (isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: número inválido, con decimales o superior al máximo permitido.", "danger");
    return;
  }

  let contador = 0;
  let i = 1;

  // Bucle do…while
  do {
    anadirLinea(`do…while · repetición ${i} de ${veces}`);
    contador++;
    i++;
  } while (i <= veces);

  // Total con manejo correcto de singular y plural
  const textoTotal = contador === 1 ? "1 repetición" : `${contador} repeticiones`;
  anadirLinea(`Total: ${textoTotal}`);
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {

  const veces = leerNumero("numero1");
  limpiarSalida();

  // Validación: si falta (isNaN), tiene decimales o pasa de MAXIMO_REPETICIONES
  if (isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: número inválido, con decimales o superior al máximo permitido.", "danger");
    return;
  }

  // Bucle for que recorre desde 1 hasta el número de veces indicado
  for (let i = 1; i <= veces; i++) {
    // Operador ternario para elegir el color: pares de un color, impares de otro
    const color = (i % 2 === 0) ? "primary" : "secondary";
    
    // Añade el badge con el número de la repetición y el color correspondiente
    anadirBadge(i, color);
  }
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.

  const veces = leerNumero("numero1");
  limpiarSalida();

  // Validación: si falta (isNaN), tiene decimales o pasa de MAXIMO_REPETICIONES
  if (isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: número inválido, con decimales o superior al máximo permitido.", "danger");
    return;
  }

  let i = 1;

  // Bucle while que añade badges en cada vuelta
  while (i <= veces) {
    // Usamos el operador ternario para elegir el color: pares de un color, impares de otro
    const color = (i % 2 === 0) ? "primary" : "secondary";
    
    // Añade el badge con el número de la repetición y el color correspondiente
    anadirBadge(i, color);
    
    i++;
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.

  const veces = leerNumero("numero1");
  limpiarSalida();

  // Validación: si falta (isNaN), tiene decimales o pasa de MAXIMO_REPETICIONES
  if (isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: número inválido, con decimales o superior al máximo permitido.", "danger");
    return;
  }

  let i = 1;

  // Bucle do…while que se ejecuta al menos una vez antes de comprobar la condición
  do {
    // Usamos el operador ternario para elegir el color: pares de un color, impares de otro
    const color = (i % 2 === 0) ? "primary" : "secondary";
    
    // Añade el badge con el número de la repetición y el color correspondiente
    anadirBadge(i, color);
    
    i++;
  } while (i <= veces);
}
