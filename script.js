let correctas = [3, 1, 3, 3];

let opcionElegida = [];
ResultadoFinal = 2;
let cantidadElegidas = 0;

let mensaje = " ";

function respuesta(numPregunta, Seleccionada) {
  opcionElegida[numPregunta] = Seleccionada.value;

  id = "p" + numPregunta;

  //label = document.getElementById(id).childNodes;
  //label[3].style.backgroundColor = "white";
  //label[5].style.backgroundColor = "white";
  //label[7].style.backgroundColor = "white";

  //Seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

function corregir() {
  cantidadCorrectas = 0;
  for (i = 0; i < correctas.length; i++) {
    if (correctas[i] == opcionElegida[i]) {
      cantidadCorrectas++;
      ResultadoFinal;
    }
    document.getElementById("resultado").innerHTML = cantidadCorrectas;
  }
  if (cantidadCorrectas == 4) {
    alert("Felicitaciones, acertaste todas");
  }
  if (cantidadCorrectas == 3) {
    alert("Felicitaciones, acertaste todas");
  } else {
    alert("Mira de nuevo el blog, y responde las preguntas de nuevo");
  }
}
