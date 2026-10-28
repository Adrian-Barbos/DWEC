/*
  Tarea 5 · DWEC · Adrián Barbos
  Manipular el DOM.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {

  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo"); 
  segundo.classList.add("bg-warning-subtle");

  const tercero = document.querySelectorAll("#contenido p") [2];
  tercero.classList.add("text-danger");

  console.log("Se han aplicado los cambios");
  
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  console.log("Ejecución de la función anadirParrafo");
  // 1. Crea un <p> con document.createElement()
  var para = document.createElement("p");
  
  // 2. Calcula el número de párrafos que habrá (hijos actuales + 1) y ponle el texto
  var n = document.querySelector("#contenido").children.length + 1;
  var node = document.createTextNode("Párrafo nuevo " + n);
  para.appendChild(node);
  
  // 3. Cuélgalo al final de #contenido con append()
  document.querySelector("#contenido").append(para);
}

function eliminarUltimo() {
  console.log("Ejecución de la función eliminarUltimo");
  const ultimo = document.querySelector("#contenido").lastElementChild;

  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
  } else {
    ultimo.remove();
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {

    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    //Lo mismo con "mouseleave" (cuando el ratón sale) para quitar la clase.
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

  }

  //Console.log() que diga en cuántos párrafos se ha activado (parrafos.length).
    console.log(" Se han activado " + parrafos.length + " parrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  console.log("Ejecución de la función cambiarTexto");
  //Lee lo escrito en #nuevoTexto con value y quita los espacios de los extremos con trim().
  const texto = document.querySelector("#nuevoTexto").value.trim();

  //Si está vacío, muestra el error #error4 (quítale "d-none") y no cambies nada.
  if (texto === "") {
    document.querySelector("#error4").classList.remove("d-none");
  } else { 

  //Si no, pon ese texto en el primer párrafo de #contenido con textContent y oculta el error.
    document.querySelector("#error4").classList.add("d-none"); 
    document.querySelector("#contenido p").textContent= texto;
    }
}

function cambiarConHtml() {
  console.log("Ejecución de la función cambiarConHtml");
  // 1. Lee lo escrito en #nuevoTexto con value y quítale los espacios con trim()
  const texto = document.querySelector("#nuevoTexto").value.trim();
  
  // 2. Si está vacío, muestra el error #error4 quitándole "d-none"
  if (texto === "") {
    document.querySelector("#error4").classList.remove("d-none");
  } else { 
    // 3. Si no está vacío, oculta el error y usa innerHTML en el primer párrafo
    document.querySelector("#error4").classList.add("d-none"); 
    document.querySelector("#contenido p").innerHTML = texto;
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  console.log("Ejecución de la función anadirTarea");
  
  //Lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  const texto = document.querySelector("#tareaInput").value.trim();

  if (texto === "") {
    document.querySelector("#error5").classList.remove("d-none");
  } else {
    
    const li = document.createElement("li");
    li.className = "list-group-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";

    const span = document.createElement("span");
    span.textContent = texto;

    li.appendChild(checkbox);
    li.appendChild(span);

    document.querySelector("#listaTareas").appendChild(li);
    document.querySelector("#tareaInput").value = "";
  }

  //Actualiza #totalTareas con el número de <li> que hay en la lista.
  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;
}

function borrarCompletadas() {
  console.log("Ejecución de la función borrarCompletadas");

  const selecciona_casillas = document.querySelectorAll("#listaTareas input:checked");

  if (selecciona_casillas === "0") {
    document.querySelector("#error5");
  } else {
    for (const casilla of selecciona_casillas) {
      casilla.parentElement.remove();
    }
  }

  //Actualiza #totalTareas.
  const total = document.querySelectorAll("#listaTareas li").length;
  document.querySelector("#totalTareas").textContent = total;
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  console.log("Ejecución de la función verDatosVentana");

  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  let puntoCorte = "";
  if (ancho >= 1400) {
    puntoCorte = "xxl (≥ 1400 px)";
  } else if (ancho >= 1200) {
    puntoCorte = "xl (≥ 1200 px)";
  } else if (ancho >= 992) {
    puntoCorte = "lg (≥ 992 px)";
  } else if (ancho >= 768) {
    puntoCorte = "md (≥ 768 px)";
  } else if (ancho >= 576) {
    puntoCorte = "sm (≥ 576 px)";
  } else {
    puntoCorte = "xs (< 576 px)";
  }
  document.querySelector("#datoPunto").textContent = puntoCorte;

  //El tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  document.querySelector("#datoPantalla").textContent = `${screen.width} x ${screen.height} px`;

  //La URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
  document.querySelector("#datoUrl").textContent = location.href;
  document.querySelector("#datoIdioma").textContent = navigator.language;
}
