# 🧠 Juego de Memoria

Un juego de memoria interactivo desarrollado en HTML, CSS y JavaScript que desafía tu capacidad de recordar y emparejar cartas.

## 📋 Descripción

Este proyecto es un juego de memoria clásico donde los jugadores deben encontrar pares de cartas idénticas en un tablero de 4x4. El juego incluye efectos de sonido, temporizador y estadísticas en tiempo real para una experiencia de juego completa.

## 🎮 Características

- **Tablero 4x4**: 16 cartas (8 pares) para emparejar
- **Temporizador**: 30 segundos para completar el juego
- **Estadísticas en tiempo real**: 
  - Contador de aciertos
  - Número de movimientos
  - Tiempo restante
- **Efectos de sonido**: 
  - Sonido de clic al destapar cartas
  - Sonido de par correcto
  - Sonido de par incorrecto
  - Sonido de victoria
  - Sonido de derrota
- **Interfaz responsiva**: Diseño moderno con gradientes y efectos visuales
- **Animaciones**: Transiciones suaves entre estados de las cartas

## 🚀 Cómo jugar

1. **Inicio**: Haz clic en cualquier carta para comenzar el juego
2. **Emparejamiento**: Encuentra dos cartas idénticas para formar un par
3. **Tiempo límite**: Tienes 30 segundos para completar todos los pares
4. **Victoria**: Completa los 8 pares antes de que se agote el tiempo
5. **Derrota**: Si se agota el tiempo, todas las cartas se revelan automáticamente

## 📁 Estructura del proyecto

```
juegoMemoria/
├── index.html          # Página principal del juego
├── css/
│   └── style.css       # Estilos y diseño visual
├── js/
│   └── main.js         # Lógica del juego
├── img/
│   ├── 1.png           # Imágenes de las cartas (1-8)
│   ├── 2.png
│   ├── 3.png
│   ├── 4.png
│   ├── 5.png
│   ├── 6.png
│   ├── 7.png
│   └── 8.png
└── sound/
    ├── click.wav       # Sonido de clic
    ├── parCorrecto.wav # Sonido de par correcto
    ├── parIncorrecto.wav # Sonido de par incorrecto
    ├── juegoGanado.wav # Sonido de victoria
    └── juegoPerdido.wav # Sonido de derrota
```

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura semántica del juego
- **CSS3**: 
  - Gradientes radiales para el fondo
  - Flexbox para el layout
  - Efectos hover y transiciones
  - Diseño responsivo
- **JavaScript vanilla**:
  - Manipulación del DOM
  - Gestión de eventos
  - Temporizador con `setInterval`
  - Reproducción de audio
  - Lógica de emparejamiento de cartas

## 🎯 Funcionalidades principales

### Sistema de cartas
- Generación aleatoria de pares de cartas
- Destapar y tapar cartas dinámicamente
- Validación de pares correctos e incorrectos

### Temporizador
- Cuenta regresiva de 30 segundos
- Inicio automático al primer clic
- Detención al completar el juego

### Estadísticas
- Contador de aciertos en tiempo real
- Número total de movimientos
- Tiempo restante visible

### Efectos de sonido
- Audio de clic al destapar cartas
- Sonidos diferenciados para pares correctos/incorrectos
- Música de victoria y derrota

## 🎨 Diseño visual

- **Paleta de colores**: Rosa y púrpura con gradientes
- **Interfaz moderna**: Bordes redondeados y transparencias
- **Efectos visuales**: Hover en botones y transiciones suaves
- **Layout centrado**: Diseño equilibrado y profesional

## 📱 Compatibilidad

- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Dispositivos móviles y de escritorio
- Soporte para audio web

## 🚀 Instalación y uso

1. **Clona o descarga** el proyecto
2. **Abre** el archivo `index.html` en tu navegador
3. **¡Comienza a jugar!** Haz clic en cualquier carta para iniciar

## 👨‍💻 Desarrollador

**Victoria Ricardo** - Programadora del juego de memoria

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

---

¡Disfruta jugando y desafía tu memoria! 🧠✨ 