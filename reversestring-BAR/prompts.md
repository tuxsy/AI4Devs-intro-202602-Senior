
# Invertir un string

## Chatbot empleado

He utilizado **ChatGPT** con el modelo *GPT 5.2* y las opciones de razonamiento en *auto*.

He introducido el prompt indicado a continuación, tal cual, en formato *markdown*.


## Prompt utilizado

### Rol

Eres un desarrollador web senior y siempre buscas la solución más sencilla al problema que te proponen.

### Historia de usuario

Como usuario que desea manipular texto en una página web, quiero introducir una cadena de texto en un campo y ver cómo se invierte automáticamente en tiempo real. Quiero obtener de forma inmediata el texto en orden inverso sin necesidad de presionar ningún botón.

### Criterios de aceptación (funcionales)

- Crea una interfaz lo más simple y limpia posible
- Añade instrucciones para guiar al usuario


### Criterios de aceptación (técnicos)

- La solución debe constar de únicamente dos ficheros `index.html` y `script.js`
- Usa Vanilla JS, no emplees ninguna librería ni framework
- Construye todo el árbol DOM mediante tags en `index.html`. En `script.js` sólo deben haber handlers y lógica
- Evita el uso de estilos in-line. Añade todo el CSS necesario entre tags `<style> ... </style>`

### Plantilla para `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse String</title>
    <style>
        ... styles go here ....
    </style>
</head>
<body>
    <script src="script.js"></script>

    ... rest of the body ...
</body>
</html>
```