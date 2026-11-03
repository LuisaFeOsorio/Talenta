# Talenta · Prototipo

Prototipo de alta fidelidad de una bolsa de empleo: 33 pantallas de escritorio (1440 × 900), mostradas solas y escaladas para llenar la ventana.

Es estático (HTML + CSS + JavaScript). No requiere instalación ni conexión.

## Cómo abrir

Doble clic en `index.html`. Para presentar, pulsa F11 (pantalla completa del navegador).

## Uso

- Navega haciendo clic en botones y tarjetas del prototipo.
- Botón **Leyes de Gestalt** (abajo a la derecha, o tecla `G`): superpone las regiones que aplican cada ley.
- `←` `→`: pantalla anterior / siguiente.
- Enlace directo a una pantalla: `index.html#/pantalla/C02` (A01–F0x).

## Estructura

- `assets/js/screens-a…f.js` y `components.js`: las pantallas (sin cambios).
- `assets/js/app.js`: router, escalado, validaciones e interacciones.
- `assets/css/screens.css` y `tokens.css`: estilos de las pantallas (sin cambios).
- `assets/css/shell.css`: visor mínimo.
