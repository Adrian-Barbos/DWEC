# Tarea 7 · Funciones, flechas y clases

**Autor:** Adrián Barbos · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

Esta carpeta contiene una página con seis ejercicios de JavaScript sobre funciones, callbacks, closures, clases, fechas y textos. Para verla, abre la carpeta en VS Code, pulsa **Go Live** y prueba los botones con la consola abierta (**F12**).

## Capturas

### a) La página recién cargada

<img src="capturas/a-pagina.png" alt="La página recién cargada con mi nombre en la navbar" width="600">

Al cargar la página aparece mi nombre, Adrián Barbos, en la barra superior y los apartados de los ejercicios. El indicador «Alumnos: 2» muestra que los dos alumnos de partida ya están cargados.

### b) Ejercicios 1 y 2: el precio y las películas

<img src="capturas/b-ej1-ej2.png" alt="El desglose del precio y una lista de películas" width="600">

Con una base de 90 €, un descuento del 10 % y un IVA del 21 %, el precio final es 98,01 €. `calcularPrecio()` aplica el descuento y después el IVA, y devuelve el resultado. `mostrarPrecio()` lee y valida los campos y muestra el desglose. El botón «Anterior a 1990» utiliza `find()` para encontrar la primera película que cumple la condición, «Regreso al futuro» (1985).

### c) Ejercicios 3 y 4: tu callback y los contadores

![El resultado de transformar y los dos contadores](capturas/c-ej3-ej4.png)

`transformar()` recorre la lista con `for...of`, aplica la operación a cada número y devuelve un array nuevo con los resultados. Cada llamada a `crearContador()` crea su propia variable `cuenta`, que la función devuelta recuerda gracias al closure, por eso los contadores avanzan de forma independiente.

### d) Ejercicio 5: los alumnos

![Las tarjetas de los alumnos](capturas/d-ej5-clases.png)

En la captura aparecen seis alumnos con sus medias, tres de ellos en prácticas con la etiqueta FCT. `crearAlumno()` comprueba el campo de empresa y, si está vacío, crea un `Alumno`; si tiene texto, crea un `AlumnoFCT` y guarda también la empresa.

### e) Ejercicio 6: fechas y textos

![Los días que faltan para una fecha y unas iniciales](capturas/e-ej6-fechas-textos.png)

He probado el 17 de mayo de 2027 y salen 187 días. Uso `Math.round()` porque el cambio de hora puede hacer que la diferencia entre las fechas, al convertirla a días, tenga decimales.

## Reflexión

Al pasar un callback de `function` a flecha, el código queda más corto usando `=>`.
Si el cuerpo tiene una sola expresión, puedo quitar las llaves y el `return`.
Por ejemplo, en mi código uso `peliculas.map((pelicula) => pelicula.titulo)`.
Si uso llaves y quiero devolver un valor, tengo que escribir `return`.
En `media()` uso `return suma / this.notas.length` para devolver la media.
Los métodos los escribo con la forma corta, como `presentarse() { ... }`.
Una flecha no tiene su propio `this`, y mis métodos necesitan acceder al alumno mediante `this.nombre`, `this.curso` o `this.notas`.

## Fuentes

- PDF TEMA 7
- PDF TEMA 7 DIAPOSITIVAS
- CHAT GPT

## Uso de IA

He usado IA para entender algunos apartados que no entendía y cuando me daba errores que no sabía como arreglar. La respuesta la uso de información no para copiar y pegar.
