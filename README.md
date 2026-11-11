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

## Trabajar con Git y GitHub

Los comandos se escriben en una terminal (Git Bash, PowerShell o la terminal de VS Code) **dentro de la carpeta del proyecto**.

### Primera vez: descargar el proyecto

Solo lo hace cada integrante del grupo una vez, en su computadora:

```bash
git clone https://github.com/dgdDev/delivery-project.git
cd delivery-project
```

Si es la primera vez que usan Git en esa computadora, configuren su nombre y email (aparecen en cada cambio que suban):

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

### El ciclo de trabajo de todos los días

**1. Antes de empezar, bajar los cambios de los compañeros:**

```bash
git pull
```

**2. Hacer los cambios** en los archivos (HTML, CSS, JS, imágenes).

**3. Ver qué archivos cambiaron:**

```bash
git status
```

Para ver el detalle línea por línea:

```bash
git diff
```

**4. Preparar los cambios para guardarlos:**

```bash
git add .
```

O solo un archivo:

```bash
git add index.html
```

**5. Guardar los cambios con un mensaje que explique qué hicieron:**

```bash
git commit -m "Agregar sabor de pistacho"
```

**6. Subir los cambios a GitHub:**

```bash
git push
```

> 💡 Regla de oro: **`git pull` antes de empezar y `git push` al terminar.** Así todos trabajan sobre la última versión.

### Otros comandos útiles

| Comando | Para qué sirve |
|---|---|
| `git log --oneline` | Ver la lista de cambios guardados |
| `git restore archivo.html` | Descartar los cambios de un archivo que todavía no guardaron con commit |
| `git restore --staged archivo.html` | Sacar un archivo del `git add` (no borra los cambios) |
| `git remote -v` | Ver a qué repositorio de GitHub está conectada la carpeta |

### Si `git push` da error

Si aparece un mensaje como `rejected` o `fetch first`, es porque un compañero subió cambios antes que vos. Solución:

```bash
git pull
git push
```

### Si aparece un conflicto

Pasa cuando dos personas cambiaron **la misma línea** del mismo archivo. Git marca el archivo así:

```
<<<<<<< HEAD
tu versión
=======
la versión de tu compañero
>>>>>>> ...
```

1. Abran el archivo, elijan qué texto queda y borren las marcas `<<<<<<<`, `=======` y `>>>>>>>`.
2. Guarden el archivo y ejecuten:

```bash
git add .
git commit -m "Resolver conflicto"
git push
```

> 💡 Para evitar conflictos, conviene repartirse el trabajo: por ejemplo, uno edita la sección de sabores y otro el formulario.
