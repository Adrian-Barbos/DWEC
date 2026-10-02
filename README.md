# Tema 02 - Navegadores, Bootstrap y JavaScript

## 1. Capturas propias

Todas las capturas de esta práctica han sido realizadas en mi propio equipo y están guardadas dentro de la carpeta `capturas/`.

### a. `index.html` en el ordenador

![index.html en el ordenador](capturas/01-index.p)

En esta captura se muestra la página `index.html` ejecutándose en el navegador. En la barra de navegación aparece mi nombre, **Adrián Barbos**, y se puede observar la tabla comparativa de navegadores y motores.

### b. `interaccion.html` en modo dispositivo

![interaccion.html en modo dispositivo](capturas/02-interaccion-movil.png)

En esta captura se muestra `interaccion.html` utilizando las herramientas de desarrollador del navegador en modo dispositivo, simulando la visualización de la página en un teléfono móvil. Se pueden observar los tres botones de interacción.

### c. Consola con las trazas de los tres botones

![Consola con las trazas](capturas/03-consola.png)

En esta captura se muestra la consola del navegador después de utilizar los tres botones. El botón **Saludar** genera un mensaje mediante `console.log()`, el botón **Simular un error** utiliza `console.error()` y el botón **¿Qué navegador soy?** muestra en la consola el `userAgent` del navegador.

### d. `alert()` del botón «¿Qué navegador soy?» en los dos navegadores

![Alert del primer navegador](capturas/04-alert-navegador-1.png)

Esta captura muestra el `alert()` generado al pulsar el botón **¿Qué navegador soy?** en el primer navegador utilizado. El mensaje contiene la información proporcionada por `navigator.userAgent`.

![Alert del segundo navegador](capturas/05-alert-navegador-2.png)

Esta segunda captura muestra el mismo botón ejecutado en el segundo navegador. Al comparar ambas cadenas se pueden observar las diferencias existentes entre los dos navegadores.

### e. VS Code con Live Server

![VS Code y Live Server](capturas/06-vscode-live-server.png)

En esta captura se muestra Visual Studio Code con la carpeta `tema02` abierta y la página ejecutándose mediante Live Server.

---

## 2. ¿Quién hace qué?

Para explicar la función de cada tecnología voy a utilizar como ejemplo el botón **«¿Qué navegador soy?»** de `interaccion.html`.

### HTML

HTML se encarga de crear la estructura y el contenido del botón.

En mi código, el botón está definido de esta forma:

```html
<button
  type="button"
  class="btn btn-warning"
  onclick="ver_navegador()"
>
  ¿ Que navegador soy?
</button>
