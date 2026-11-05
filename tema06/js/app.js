/*
  Tarea 6 · DWEC · Adrián Barbos
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

const estudiante = {
  nombre: "Adrian",
  apellidos: "Barbos",
  edad: 19,
  curso: "DAW",
  presentarse: function() {
  return `Soy  ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}.`;
}
};


function verFicha() {
  const salida = document.getElementById('salida1');
  
  // 1. Vaciar #salida1 usando textContent
  salida.textContent = '';

  // 2. Crear el elemento <ul> y asignarle la clase
  const ul = document.createElement('ul');
  ul.className = 'list-group';

  // Array de claves
  const claves = ["nombre", "apellidos", "edad", "curso"];

  claves.forEach(function(clave) {
    
    // Crear cada <li> y su clase
    const li = document.createElement('li');
    li.className = 'list-group-item';
    
    
    li.textContent = `${clave}: ${estudiante[clave]}`;
    
    // Meter el <li> dentro del <ul>
    ul.appendChild(li);
  });

  // Añadir el <ul> ya completo a #salida1
  salida.appendChild(ul);

  // 3. Crear el <p> con la frase de presentarse()
  const p = document.createElement('p');
  p.className = 'mt-3';
  p.textContent = estudiante.presentarse();

  // Añadir el <p> debajo del <ul> en #salida1
  salida.appendChild(p);

  // 4. console.log() del objeto entero
  console.log(estudiante);
}

function cumplirAnios() {
  //Suma 1 a la edad del estudiante y vuelve a pintar la ficha (llama a verFicha()).
  estudiante.edad++;
  verFicha();
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Ejercicio 2: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2();
  } else {
    const colorEliminado = colores.pop();

    mostrarColores();

    console.log("Ha salido el color:" , colorEliminado);
  }
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2();
  } else {
    const colorEliminado = colores.shift();

    mostrarColores();

    console.log("Ha salido el color:" , colorEliminado);
  }
}

mostrarColores();


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================


const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];


function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
}

function mostrarProductos() {

  //Pinta todos los productos con pintarProductos() y escribe en #mensaje3 cuántos hay.
  pintarProductos(productos);

  document.querySelector("#mensaje3").textContent = `Hay ${productos.length} productos.`;
  
}

function ordenarPorPrecio() {

  productos.sort (function (a ,b) {
    return a.precio - b.precio;
  });

  pintarProductos(productos);

  document.querySelector("#mensaje3").textContent = "Los productos han sido ordenados de más barato a más caro.";
}

function filtrarCaros() {

  const productosmasde50 = productos.filter(function (producto) {
    return producto.precio > 50;
  });
  pintarProductos(productosmasde50);

  document.querySelector("#mensaje3").textContent = `Se han seleccionado ${productosmasde50.length} productos.`;
  
}

function buscarProducto() {

  const busqueda = document.getElementById('buscarProducto');

  const texto = busqueda.value.trim().toLowerCase();
  const mensaje3 = document.querySelector("#mensaje3");

  
  if (texto === "") {
    mensaje3.textContent = "Por favor, introduce algún producto.";
    return;
  } 

  const encontrado = productos.find(function (producto) {
    return producto.nombre.toLowerCase().includes(texto);
  });

  const noencuentraproducto = document.querySelector("#tablaProductos");

  if (encontrado === undefined) {
    mensaje3.textContent = "No se ha encontrado ningún producto.";
    noencuentraproducto.textContent = "";
  } else {
    mensaje3.textContent = `Producto encontrado: "${encontrado.nombre}".`;
    pintarProductos([encontrado]);
  }
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "Adrian",
  notas: [],

  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    }
    this.notas.push(nota);
    return true;
  },

  media() {
    if (this.notas.length === 0) {
      return 0;
    } else {
      const suma = this.notas.reduce (function (total, nota) {
        return total + nota;
      }, 0);
      return suma / this.notas.length;
    }
  }
};

function mostrarNotas() {

  const contenedorNotas = document.querySelector("#notas");
  const contenedorMedia = document.querySelector("#media");
  contenedorNotas.textContent = "";

  alumno.notas.forEach (function (nota) {
    const badge = document.createElement("span");

    badge.className = "badge me-1 " + (nota >= 5 ? "text-bg-success" : "text-bg-danger");
    badge.textContent = nota;
    contenedorNotas.append(badge);

  });

  // Mostramos la media o el mensaje de que no hay notas
  if (alumno.notas.length === 0) {
    contenedorMedia.textContent = "Todavía no hay notas.";
  } else {
    const resultadoMedia = alumno.media();
    contenedorMedia.textContent = `Media de ${alumno.notas.length} notas: ${resultadoMedia.toFixed(2)}`;
  }
}

function anadirNota() {
  const notaintroducia = document.querySelector("#nota");
  const error4 = document.querySelector("#error4");

  
  
  if (notaintroducia.value.trim() === "") {
    error4.classList.remove("d-none");
    return; 
  }

  
  const valorNota = Number(notaintroducia.value);
  const insertada = alumno.anadirNota(valorNota);

  if (!insertada) {
    error4.classList.remove("d-none");
    return;
  }

  
  error4.classList.add("d-none");
  notaintroducia.value = "";
  mostrarNotas();
}

function borrarNotas() {
  alumno.notas = [];
  mostrarNotas();
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {

  const dobles = numeros.map (function (numero) {
  
  return numero * 2;
  });

  const salida = document.querySelector("#salida5");
  salida.textContent = "Dobles: " + dobles + " | Originales: " + numeros;
}

function verPares() {

  const pares = numeros.filter (function (numero){

    return numero % 2 === 0;
  });

  const salida = document.querySelector("#salida5");
  salida.textContent = "Pares: " + pares + " | Originales: " + numeros;
}

function verSuma() {

  const suma = numeros.reduce (function (total, numero){
    return total + numero;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "Suma total: " + suma;

}

function verCadena() {

  // 1. Pares 
  const pares = numeros.filter(function (numero) {
    return numero % 2 === 0;
  });

  // 2. Dobles 
  const dobles = pares.map(function (numero) {
    return numero * 2;
  });

  // 3. Suma 
  const sumaDobles = dobles.reduce(function (total, numero) {
    return total + numero;
  }, 0);

  const salida = document.querySelector("#salida5");
  salida.textContent = "Pares: " + pares + " | Dobles: " + dobles + " | Suma: " + sumaDobles;


}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const contenedorCiudades = document.querySelector("#ciudades");
  contenedorCiudades.textContent = "";

  ciudades.forEach(function (ciudad, posicion) {
    const badge = document.createElement("span");
    badge.className = "badge text-bg-secondary me-1";
    badge.textContent = posicion + " · " + ciudad;
    contenedorCiudades.append(badge); 
  });
}

function verSlice() {
  const resultadoSlice = ciudades.slice(2, 5); 
  const salida = document.querySelector("#salida6");

  salida.textContent = "Devuelve (slice): " + resultadoSlice + " | Siguen en el array: " + ciudades.length;
}

function hacerSplice() {

  const salida = document.querySelector("#salida6");

  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades, tienes que restaurar.";
    return;
  }

  //Si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
  const borradas = ciudades.splice(2, 2);
  salida.textContent = "Devuelve (splice): " + borradas + " | Quedan en el array: " + ciudades.length;
}

function restaurarCiudades() {

  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  
  const salida = document.querySelector("#salida6");
  salida.textContent = "Ciudades restauradas.";
}

function buscarCiudad() {

  const inputBusqueda = document.querySelector("#buscarCiudad");
  const salida = document.querySelector("#salida6");
  const textoBuscado = inputBusqueda.value.trim();

  if (textoBuscado === "") {
    salida.textContent = "Por favor, escribe un nombre de ciudad para buscar.";
    return;
  }

  const estaIncluida = ciudades.includes(textoBuscado);
  const posicionIndice = ciudades.indexOf(textoBuscado);

  salida.textContent = "includes(): " + estaIncluida + " | indexOf(): " + posicionIndice;

}

mostrarCiudades();
