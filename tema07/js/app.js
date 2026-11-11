/*
  Tarea 7 · DWEC · Adrián Barbos
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
    const precioConDescuento = base - (base * descuento) / 100;
    return precioConDescuento + (precioConDescuento * iva) / 100;
}
console.log(calcularPrecio(100));

// Ya está hecha: 74.8 → "74.80 €"
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseTexto = document.querySelector("#base").value.trim();
  const base = Number(baseTexto);
  const iva = Number(document.querySelector("#iva").value);
  const descuentoTexto = document.querySelector("#descuento").value.trim();
  const error = document.querySelector("#error1");

  if (baseTexto === "" || !Number.isFinite(base) || base < 0) {
    error.textContent = "Introduce una base válida, mayor o igual que 0.";
    error.classList.remove("d-none");
    return;
  }

  let descuento = 0;
  let precioFinal;

  if (descuentoTexto === "") {
    precioFinal = calcularPrecio(base, iva);
  } else {
    descuento = Number(descuentoTexto);

    if (!(descuento >= 0 && descuento <= 100)) {
      error.textContent = "El descuento debe estar entre 0 y 100.";
      error.classList.remove("d-none");
      return;
    }

    precioFinal = calcularPrecio(base, iva, descuento);
  }

  error.classList.add("d-none");

  pintarLista("#salida1", [
    `Precio sin IVA: ${formatearEuros(base)}`,
    `Descuento: ${descuento} %`,
    `IVA: ${iva} %`,
    `Precio final: ${formatearEuros(precioFinal)}`
  ]);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Ya está hecha: una película como texto, «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}


function verTitulos() {
  const titulos = peliculas.map((pelicula)=> pelicula.titulo);

  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ejercicio 2: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);

  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ejercicio 2: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);

  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ejercicio 2: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion,0);

  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ejercicio 2: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);

  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay películas anteriores a 1990.";
    pintarLista("#salida2", []);
  } else {
    pintarLista("#salida2", [comoTexto(antigua)]);
    document.querySelector("#mensaje2").textContent = "Primera película antes de 1990.";
  }

  console.log("Ejercicio 2: find ->", antigua);
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
   
  const resultado = [];

  for (const numero of lista ) {
    const valorTransformado = operacion(numero);
    resultado.push(valorTransformado);
  }

  return resultado;

}

// Ya está hecha: escribe en #salida3 tu resultado, el de map y numeros
function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// El modelo: funcionará cuando hayas escrito transformar()
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ejercicio 3: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ejercicio 3: cuadrados →", resultado);
  
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ejercicio 3: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {

  let cuenta = 0;

  return function () {
    cuenta = cuenta + paso;
    return cuenta;
  };

}

const contarDeUno = crearContador(1);
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Ejercicio 4: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Ejercicio 4: de 5 en 5 →", valor);
  
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    } else {
      const suma = this.notas.reduce((total, nota) => total + nota, 0);
      return suma / this.notas.length;
    }
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa) {
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return super.presentarse() + `, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];

const alumno1 = new Alumno("Adrian barbos", "2 DAW");
alumno1.anadirNota(9);
alumno1.anadirNota(8);
alumnos.push(alumno1);

const alumno2 = new AlumnoFCT("Héctor García", "2 DAW", "TecnoSur");
alumno2.anadirNota(8);
alumno2.anadirNota(7);
alumnos.push(alumno2);

console.log(alumno2.presentarse());

// Ya está hecha: pinta una tarjeta por alumno y actualiza el total.
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");

    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombre = document.querySelector("#nombre5").value.trim();
  const curso = document.querySelector("#curso5").value.trim();
  const empresa = document.querySelector("#empresa5").value.trim();
  const notasTexto = document.querySelector("#notas5").value.trim();
  const error = document.querySelector("#error5");

  if (nombre === "") {
    error.textContent = "Introduce el nombre del alumno.";
    error.classList.remove("d-none");
    return;
  }

  let alumno;

  if (empresa === "") {
    alumno = new Alumno(nombre, curso);
  } else {
    alumno = new AlumnoFCT(nombre, curso, empresa);
  }

  if (notasTexto !== "") {
    const notas = notasTexto
      .split(",")
      .map((texto) => Number(texto.trim()));

    const hayNotaInvalida = notas.some(
      (nota) => Number.isNaN(nota) || nota < 0 || nota > 10
    );

    if (hayNotaInvalida) {
      error.textContent = "Las notas deben ser números entre 0 y 10.";
      error.classList.remove("d-none");
      return;
    }

    notas.forEach((nota) => alumno.anadirNota(nota));
  }

  alumnos.push(alumno);
  error.classList.add("d-none");

  document.querySelector("#nombre5").value = "";
  document.querySelector("#empresa5").value = "";
  document.querySelector("#notas5").value = "";

  console.log("Ejercicio 5: alumno creado →", alumno);
  pintarAlumnos();
}

pintarAlumnos();

// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

// TODO: diasHasta(fecha) devuelve cuántos días faltan desde hoy hasta fecha (negativo si ya pasó).
//       Pon hoy a medianoche (hoy.setHours(0, 0, 0, 0)), resta las fechas, divide entre los milisegundos
//       de un día y redondea con Math.round: con el cambio de hora, la resta no siempre da un número entero.
function diasHasta(fecha) {

}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;        // "2026-12-25", o "" si está vacía
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    return;
  }

  // Ya está hecho: de "2026-12-25" a un Date. Fíjate en el mes - 1: el mes va de 0 a 11
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  // TODO: con diasHasta(fecha), escribe en #salida6a «Faltan N días: será viernes, 25 de diciembre de 2026.»,
  //       «Es hoy…» o «Fue hace N días…». El nombre de la fecha, con toLocaleDateString("es-ES", {…}).
}

// TODO: iniciales(nombreCompleto) devuelve las iniciales en mayúsculas: «lucía martín ortega» → «LMO».
//       Encadena trim, split(" "), filter (para quitar las palabras vacías si hay espacios dobles),
//       map (la primera letra de cada palabra, en mayúscula) y join("").
function iniciales(nombreCompleto) {

}

// TODO: crearUsuario(nombreCompleto) devuelve las iniciales en minúsculas y tres cifras al azar, de 000 a 999:
//       «lmo042». Pista: Math.random, Math.floor y padStart(3, "0").
function crearUsuario(nombreCompleto) {

}

function mostrarIniciales() {
  // TODO: lee #nombre6. Si está vacío, avisa en #salida6b.
  // TODO: si no, escribe en #salida6b «Iniciales: LMO · usuario: lmo042».
}
