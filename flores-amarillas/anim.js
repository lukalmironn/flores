// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te amo, y te amo, y te amo, amor", time: 14 },
  { text: "No me importa decirlo así", time: 17 },
  { text: "Ya me pasó la última vez", time: 26 },
  { text: "Que otro gil lo dijo por mí", time: 30.1 },
  { text: "No quiero dejar pasar", time: 39 },
  { text: "Liberación tan esencial", time: 42 },
  { text: "Si es infinito nuestro amor", time: 52 },
  { text: "No cabe en cajas de cristal", time: 55 },
  { text: "Para nuestro cielo terrenal", time: 60.6 },
  { text: "Cuando te veo sonreír", time: 90},
  { text: "Todo mi ser ríe con vos", time: 93 },
  { text: "Y si te veo lagrimear", time: 102 },
  { text: "Me entra la desesperación", time: 105 },
  { text: "Te me metiste en la piel", time: 115 },
  { text: "Me sobornaste la razón", time: 118 },
  { text: "Con caricias de alto nivel", time: 128 },
  { text: "Domesticas hasta un león", time: 131 },
  { text: "Y ahora no me piensa el corazón", time: 136 },
  { text: "No te paro de EXTRAÑAR", time: 141 },
  { text: "Aunque lo haya hecho canción", time: 144 },
  { text: "Lo único que me calma es tu voz", time: 149 },
  { text: "Atendiendo el celular", time: 153 },
  { text: "Contestando un 'hola, amor'", time: 156 },
  { text: "Que me hace acordar que tengo hogar", time: 161 },
  { text: "Rompecabezas de amor", time: 203 },
  { text: "Habla el silencio por los dos", time: 206 },
  { text: "Habla el festejo al construir", time: 216 },
  { text: "Tres cuadros predestinados", time: 219 },
  { text: "Vos derritiendo al reloj", time: 228 },
  { text: "Los dos trenzándonos los dos", time: 232 },
  { text: "Y nuestras manos creándonos, dándonos vida", time: 241 },
  { text: "Dándonos", time: 247 },
  { text: "Como solo se da si hay amor", time: 250 },
  { text: "No te paro de EXTRAÑAR", time: 254 },
  { text: "Aunque lo haya hecho canción", time: 257 },
  { text: "Lo único que me calma es tu voz", time: 262.5 },
  { text: "Atendiendo el celular", time: 267 },
  { text: "Contestando un 'hola, amor'", time: 270 },
  { text: "Que me hace acordar que tengo hogar", time: 275 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.5; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 5s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 5000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 15000);