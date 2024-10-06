# 😳 Ejercicio: Change color

---

## Explicación del Ejercicio

**¿Qué vamos a hacer?**

Vamos a implementar código en JavaScript que permita cambiar el color de fondo de una página y el texto que describe ese color al hacer clic en un botón.

**¿Dónde lo vamos a hacer?**

Trabajaremos en dos archivos de JavaScript ubicados en diferentes carpetas: uno para realizar la lógica de cambio de color y otro para alternar el color al hacer clic en un botón.

**¿Cómo lo hacemos?**

En la **Parte I**, cambiaremos el color de fondo de la página a **"darkblue"** y el texto que describe el color, cuando se presione un botón.

En la **Parte II**, haremos que el color y el texto cambien de forma alternada entre **"darkblue"** y **"red"** cada vez que se haga clic en el botón.

**¿Con qué lo hacemos?**

Usaremos HTML, CSS y JavaScript, organizados en diferentes archivos. **El archivo `index.html` y el CSS ya estarán creados**, por lo que únicamente trabajarás con JavaScript para interactuar con el DOM y crear los eventos.

---

## **Objetivo del Ejercicio**

El objetivo principal es que logres **interactuar con el DOM** y crear un comportamiento dinámico en la página al presionar un botón, utilizando JavaScript. Además, se busca **refactorizar** el código para que el cambio de color sea alternado en la segunda parte.

---

## **Objetivos Específicos**

1. **Parte I**:
   - Implementar la función que cambia el color de fondo a **"darkblue"** y actualiza el texto correspondiente en `partOne.js`.
   - Crear el evento en el mismo archivo para que se ejecute la función al hacer clic en el botón.

2. **Parte II**:
   - Refactorizar la función en `partTwo.js` para alternar entre **"darkblue"** y **"red"** con cada clic.
   - Mantener el evento ya creado en la primera parte, pero ajustarlo para que funcione con la nueva lógica de alternancia de colores.

---

## Paso a Paso

#### **Parte I: Cambiar el color de fondo a "darkblue"**

**Paso 1: Modificar el archivo `index.html`**

- El archivo `index.html` ya está creado. Contiene un botón con el texto **"click me"** y una zona para mostrar el color actual del fondo.
- No es necesario modificar el HTML ni el CSS.

**Paso 2: Implementar la lógica y el evento en `partOne.js`**

1. **Abrir el archivo `partOne.js`:**
   - Este archivo estará ubicado dentro de la carpeta `src/partOne/js/`.

2. **Escribir la función para cambiar el color de fondo:**
   - Crea una función que seleccione el elemento `body` de la página y cambie su propiedad `background-color` a **"darkblue"**.
   - Además, dentro de la misma función, selecciona el elemento que muestra el texto del color actual (que en el HTML tiene un `id` específico) y actualiza su contenido para que refleje que el color de fondo es **"darkblue"**.

3. **Vincular el evento clic al botón:**
   - Utiliza el método `addEventListener` dentro del mismo archivo `partOne.js` para asociar un evento al botón. Este evento debe ser un clic.
   - Cuando el botón sea clicado, se debe ejecutar la función que cambia el color de fondo.
   - El botón tiene un `id` en el HTML, así que asegúrate de seleccionarlo con `document.getElementById` antes de vincular el evento.

**Resumen:**
- Todo el código que realiza la selección del botón, el evento de clic y la lógica de cambio de color debe implementarse en **`partOne.js`**.

---

#### **Parte II: Alternar entre "darkblue" y "red"**

**Paso 1: Crear el archivo `partTwo.js`**

- Abre el archivo `partTwo.js` dentro de la carpeta `src/partTwo/js/`.

**Paso 2: Implementar la lógica y el evento en `partTwo.js`**

1. **Escribir la función para alternar entre "darkblue" y "red":**
   - Crea una función en `partTwo.js` que verifique el color de fondo actual de la página.
   - Si el color de fondo es **"darkblue"**, la función debe cambiarlo a **"red"**.
   - Si el color de fondo es **"red"**, la función debe cambiarlo a **"darkblue"**.
   - Además, debes asegurarte de que el texto en el área de visualización del color también cambie para reflejar el color de fondo actual.

2. **Vincular el evento clic al botón:**
   - Al igual que en `partOne.js`, usa el método `addEventListener` para vincular un evento de clic al mismo botón que en la Parte I.
   - El botón ya tiene un `id` en el HTML, por lo que deberás seleccionarlo con `document.getElementById` y asociarle el evento.
   - Cada vez que se haga clic en el botón, se debe ejecutar la función que alterna los colores de fondo.

**Resumen:**
- Todo el código para alternar los colores y vincular el evento clic al botón debe implementarse directamente en **`partTwo.js`**.

---

## Recursos y Herramientas

- **Editor de Texto**: [Visual Studio Code](https://code.visualstudio.com/)
- **Documentación JavaScript**:
    - [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
    - [Working with the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

## Entrega del Ejercicio

- **Formato de entrega**:
    - Entregar el archivo `index.html` y los archivos correspondientes a la Parte I y II dentro de las carpetas respectivas.
    - Se deberá entregar el proyecto comprimido o subirlo a un repositorio compartido.

---
