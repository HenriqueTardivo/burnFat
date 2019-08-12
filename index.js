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

function darkTheme() {
  if (dark.checked) {
    document.body.classList.add("dark");
    document.cookie = "dark=true";
  } else {
    document.body.classList.remove("dark");
    document.cookie =
      "dark=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/donkeycase/;";
  }
}

if (document.cookie.includes("dark=true")) {
  dark.checked = false; // FireFox preserves input values
  dark.click();
}
