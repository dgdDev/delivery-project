// =========================================================
// Heladería Cerros - Envío del pedido por WhatsApp
// =========================================================

// Número de WhatsApp de la heladería.
// Formato: código de país + número, sin "+", espacios ni guiones.
// Ejemplo Argentina: 5491123456789
const NUMERO_WHATSAPP = "+54 9 2944 66-9322";

const formulario = document.getElementById("form-pedido");
const textoTotal = document.getElementById("total");
const ayudaSabores = document.getElementById("ayuda-sabores");

// Convierte un número en precio: 8500 -> "$8.500"
function formatearPrecio(numero) {
  return "$" + numero.toLocaleString("es-AR");
}

// Calcula el total del pedido según lo que está marcado
function calcularTotal() {
  let total = 0;

  const envase = formulario.querySelector('input[name="envase"]:checked');
  const cantidad = Number(formulario.cantidad.value) || 1;
  if (envase) {
    total += Number(envase.dataset.precio) * cantidad;
  }

  const extras = formulario.querySelectorAll('input[name="extras"]:checked');
  extras.forEach(function (extra) {
    total += Number(extra.dataset.precio);
  });

  const zona = formulario.zona.selectedOptions[0];
  if (zona.dataset.precio) {
    total += Number(zona.dataset.precio);
  }

  return total;
}

// Muestra cuántos sabores puede elegir según el envase
function actualizarAyuda() {
  const envase = formulario.querySelector('input[name="envase"]:checked');
  const elegidos = formulario.querySelectorAll('input[name="sabores"]:checked').length;

  if (!envase) return true;

  const maximo = Number(envase.dataset.max);
  ayudaSabores.textContent = "Elegiste " + elegidos + " de " + maximo + " sabores posibles.";

  const excedido = elegidos > maximo;
  ayudaSabores.classList.toggle("ayuda--error", excedido);
  if (excedido) {
    ayudaSabores.textContent += " Quitá alguno para continuar.";
  }
  return !excedido;
}

// Cada vez que el usuario cambia algo, actualizamos el total y la ayuda
formulario.addEventListener("input", function () {
  textoTotal.textContent = formatearPrecio(calcularTotal());
  actualizarAyuda();
});

// Al enviar, armamos el mensaje y abrimos WhatsApp
formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const datos = new FormData(formulario);
  const sabores = datos.getAll("sabores");
  const extras = datos.getAll("extras");

  if (sabores.length === 0) {
    alert("Elegí al menos un sabor 🍦");
    return;
  }
  if (!actualizarAyuda()) {
    alert("Elegiste más sabores de los que permite el envase.");
    return;
  }

  const mensaje =
    "¡Hola Cerros! Quiero hacer un pedido 🍦\n\n" +
    "*Pedido:* " + datos.get("cantidad") + " x " + datos.get("envase") + "\n" +
    "*Sabores:* " + sabores.join(", ") + "\n" +
    "*Agregados:* " + (extras.length ? extras.join(", ") : "Ninguno") + "\n\n" +
    "*Nombre:* " + datos.get("nombre") + "\n" +
    "*Teléfono:* " + datos.get("telefono") + "\n" +
    "*Dirección:* " + datos.get("direccion") + " (" + datos.get("zona") + ")\n" +
    "*Entrega:* " + datos.get("horario") + "\n" +
    "*Pago:* " + datos.get("pago") + "\n" +
    (datos.get("notas") ? "*Notas:* " + datos.get("notas") + "\n" : "") +
    "\n*Total estimado:* " + formatearPrecio(calcularTotal());

  const url = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensaje);
  window.open(url, "_blank");
});

// En el celular, cerramos el menú al tocar un enlace
document.querySelectorAll(".nav a").forEach(function (enlace) {
  enlace.addEventListener("click", function () {
    document.getElementById("menu-toggle").checked = false;
  });
});
