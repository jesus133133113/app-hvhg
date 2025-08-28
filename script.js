// Juego 1: Adivina el número
let numeroSecreto = generarNumero(1, 100);

function generarNumero(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adivinaNumero() {
  const entrada = document.getElementById("entrada");
  const resultado = document.getElementById("resultado");
  const valor = parseInt(entrada.value);

  if (isNaN(valor) || valor < 1 || valor > 100) {
    resultado.textContent = "Por favor, ingresa un número válido entre 1 y 100.";
    resultado.style.color = "#ffcc00";
    return;
  }

  if (valor === numeroSecreto) {
    resultado.textContent = `🎉 ¡Correcto! El número era ${numeroSecreto}.`;
    resultado.style.color = "#00ff00";
    document.getElementById("adivina").querySelector("button").disabled = true;
  } else if (valor < numeroSecreto) {
    resultado.textContent = "📈 Más alto...";
    resultado.style.color = "#ff6b6b";
  } else {
    resultado.textContent = "📉 Más bajo...";
    resultado.style.color = "#ff6b6b";
  }

  entrada.value = "";
}

function reiniciarAdivina() {
  numeroSecreto = generarNumero(1, 100);
  document.getElementById("resultado").textContent = "";
  document.getElementById("entrada").value = "";
  document.getElementById("adivina").querySelector("button").disabled = false;
}

// Juego 2: Piedra, Papel o Tijera
function jugarPPT(eleccion) {
  const opciones = ["piedra", "papel", "tijera"];
  const eleccionComputadora = opciones[generarNumero(0, 2)];
  const resultadoDiv = document.getElementById("resultadoPPT");

  let resultado = "";

  if (eleccion === eleccionComputadora) {
    resultado = `🤝 Empate. Ambos eligieron ${eleccion}.`;
    resultadoDiv.style.color = "#ffcc00";
  } else if (
    (eleccion === "piedra" && eleccionComputadora === "tijera") ||
    (eleccion === "papel" && eleccionComputadora === "piedra") ||
    (eleccion === "tijera" && eleccionComputadora === "papel")
  ) {
    resultado = `✅ ¡Ganaste! Tú: ${eleccion}, Computadora: ${eleccionComputadora}.`;
    resultadoDiv.style.color = "#00ff00";
  } else {
    resultado = `❌ Perdiste. Tú: ${eleccion}, Computadora: ${eleccionComputadora}.`;
    resultadoDiv.style.color = "#ff6b6b";
  }

  resultadoDiv.textContent = resultado;
}

function reiniciarPPT() {
  document.getElementById("resultadoPPT").textContent = "";
}

// Mostrar un juego y ocultar los demás
function mostrarJuego(id) {
  const juegos = document.querySelectorAll(".juego");
  juegos.forEach(juego => {
    juego.classList.add("oculto");
  });
  document.getElementById(id).classList.remove("oculto");
}