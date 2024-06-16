function Reloj() {
  let dato = new Date(); // declaro un dato
  let hh = dato.getHours(); //declaro las horas
  let mm = dato.getMinutes(); // declaro los minutos
  let ss = dato.getSeconds(); // declaro los segundos

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;

  let days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  let diaDeSemana = days[dato.getDay()];
  let DiaDelMes = dato.getDate();
  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  let mes = meses[dato.getMonth()]; // Get the month
  let anio = dato.getFullYear();

  let datoString = diaDeSemana + ", " + DiaDelMes + " " + mes + " " + anio;
  let time = hh + ":" + mm + ":" + ss;

  let watch = document.querySelector("#VerReloj");
  VerReloj.innerHTML = time + "<br>" + datoString;
}

setInterval(Reloj, 1000);

Reloj();
