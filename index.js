function timer() {
  var exercicio = document.getElementById("tempoExercicio").value;
  var descanso = document.getElementById("tempoDescando").value;

  var timer1 = setInterval(function() {
    document.getElementById("tempo1").innerHTML =
      exercicio + "  SEGUNDOS RESTANTES";
    exercicio -= 1;
    if (exercicio <= 0) {
      document.getElementById("tempo1").innerHTML = "AGORA DESCANSA";
      clearInterval(timer1);
      setInterval(function() {
        document.getElementById("tempo2").innerHTML =
          descanso + "  SEGUNDOS DE DESCANSO RESTANTES";
        descanso -= 1;
        if (descanso <= 0)
          document.getElementById("tempo2").innerHTML = "TEMPO ESGOTADO";
      }, 1000);
    }
  }, 1000);
}
