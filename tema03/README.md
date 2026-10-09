# Tarea 3 · Variables, tipos y conversiones

**Autor:** [Adrián Barbos] · Desarrollo Web en Entorno Cliente (DWEC) · 2.º DAW · Curso 2026-27

## Capturas

### a) La página entera

<img src="capturas/a-pagina.png" alt="La página entera con mi nombre en la navbar" width="600">

[En la captura adjunta de la interfaz de usuario se pueden observar con claridad los siguientes elementos:   Navbar superior: Muestra el nombre de usuario Adrián Barcos en la esquina superior izquierda de la barra de navegación.   Estructura principal: La vista se compone de cuatro tarjetas (cards) estructuradas verticalmente, correspondientes a distintos bloques o ejercicios:   Variables y typeof   Conversiones explícitas   Coerción y comparaciones   Tu ficha con plantillas de cadena   Predicciones y errores: Dentro de las tablas asociadas a cada tarjeta se visualizan las celdas comparativas entre el valor esperado (Espero) y el valor obtenido (Sale). Los fallos de predicción quedan explícitamente resaltados con fondo o etiquetas en color rojo donde los valores no coinciden.]

### b) Consola del ejercicio 1

![Consola del ejercicio 1](capturas/b-consola-ej1.png)

[En esta captura se aprecia la pantalla dividida mostrando la página web del Ejercicio 1 a la izquierda junto al botón "Ejecutar ejercicio 1", y el panel de herramientas de desarrollo (DevTools) abierto en la pestaña Console a la derecha.]

### c) Consola del ejercicio 2

![Consola del ejercicio 2](capturas/c-consola-ej2.png)

[Se muestra la interfaz dividida con el Ejercicio 2 ("Conversiones explícitas") a la izquierda y la consola de desarrollo a la derecha, donde aparecen impresos los resultados y tipos de datos tras presionar el botón "Ejecutar ejercicio 2".]

### d) Consola del ejercicio 3

![Consola del ejercicio 3](capturas/d-consola-ej3.png)

[Se observa la vista dividida con el Ejercicio 3 ("Coerción y comparaciones") a la izquierda y la consola a la derecha, donde se visualizan las salidas generadas al pulsar "Ejecutar ejercicio 3" sobre coerción de tipos y comparaciones en JavaScript.]

### e) Consola del ejercicio 4, con el error de la const

![Consola del ejercicio 4 con el error de la const](capturas/e-consola-ej4.png)

[En la pantalla dividida se aprecia la ejecución del Ejercicio 4 a la izquierda y la consola a la derecha, donde se genera un error del tipo Uncaught TypeError: Assignment to constant variable. al intentar reasignar una constante (const).]

## Reflexión

[Las conversiones explícitas como String(123) o Number("123") resultaron completamente intuitivas, ya que transforman los datos de forma predecible y directa según su representación literal. Sin embargo, la coerción implícita de tipos produjo los comportamientos más sorprendentes; por ejemplo, la expresión "5" + 2 da como resultado "52" porque el operador + prioriza la concatenación de texto sobre la suma. En cambio, al utilizar otros operadores aritméticos como en "5" - 2, JavaScript fuerza la conversión a número y devuelve 3. De igual forma, me llamó la atención que Number("12abc") devuelva NaN en lugar de extraer la parte numérica, o que al comparar mediante la igualdad débil 0 == false obtengamos true, mientras que con la igualdad estricta 0 === false se obtiene false al evaluar también el tipo de dato.]

## Fuentes

- [PDF. Desarrollo web en entorno cliente. Tema 3]
- [Presentación Tema 3]

## Uso de IA

[He usado la IA para que me ayude con el README.md, también para que me ayude en algún ejercicio ya que faltan ejemplos prácticos en los PDF. La información que me da la IA no la copio y la pego, hago el ejercicio con toda la información que pueda encontrar en los PDF, pero si ya veo que tengo un error el cuál me es imposible de resolver o un ejercicio práctico que lo puedo tomar de referencia de los apuntes pero no lo entiendo para hacer el mío, y ahí es cuando acudo a la IA.]
