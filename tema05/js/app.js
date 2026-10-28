/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
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

  const eliminar_ultimo = document.querySelector("#contenido").lastElementChild;

  if (ultimo === null) {
    document.querySelector("#aviso2").classList.remove("d-none");
  }  else {
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

  // TODO: un console.log() que diga en cuántos párrafos se ha activado (parrafos.length).
    console.log(" Se han activado " + parrafos.length + " parrafos");
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  // TODO: lee lo escrito en #nuevoTexto con value y quítale los espacios de los extremos con trim().
  // TODO: si está vacío, muestra el error #error4 (quítale "d-none") y no cambies nada.
  // TODO: si no, pon ese texto en el primer párrafo de #contenido con textContent y oculta el error.
}

function cambiarConHtml() {
  // TODO: lo mismo que cambiarTexto(), pero con innerHTML.
  //       Prueba las dos con <b>hola</b> y explica en el README qué diferencia ves y por qué es peligroso.
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  // TODO: lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  // TODO: si no, crea un <li class="list-group-item"> con dos elementos dentro:
  //         · un <input> de tipo "checkbox" con la clase "form-check-input",
  //         · un <span> con el texto de la tarea (textContent).
  //       Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
  // TODO: actualiza #totalTareas con el número de <li> que hay en la lista.
}

function borrarCompletadas() {
  // TODO: selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  // TODO: si no hay ninguna, avisa en #error5. Si hay, recórrelas con for…of y borra el <li> de cada una
  //       (el <li> es el padre de la casilla: parentElement).
  // TODO: actualiza #totalTareas.
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
