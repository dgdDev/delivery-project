# Heladería Cerros 🍦

Página web de una sola página para pedir helados a domicilio. Trabajo escolar hecho con **HTML y CSS**, más un poco de **JavaScript** para enviar el pedido por WhatsApp.

## Cómo verla

Abrí `index.html` con doble clic en cualquier navegador. No necesita instalar nada.

## Estructura

```
index.html        → la página con todas las secciones
css/styles.css    → estilos y diseño adaptable a celular
js/pedido.js      → arma el mensaje del pedido y abre WhatsApp
img/              → logo e ilustración principal (SVG)
```

## Secciones

Inicio · Cómo pedir · Sabores · Precios · Zonas de envío · Formulario de pedido · Preguntas frecuentes · Contacto

## Configurar el número de WhatsApp

En `js/pedido.js`, cambiá esta línea por el número real (código de país + número, sin `+` ni espacios):

```js
const NUMERO_WHATSAPP = "5490000000000";
```
