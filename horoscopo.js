let signo = 0;
let sign = 0;


var dia = Number(prompt("Que dia você nasceu?"));
while (dia < 1 || dia > 31) {
  alert("Informe um DIA válido!");
  var dia = prompt("Que dia você nasceu?");
}

var Mes = prompt("Qual mês você nasceu? ex: janeiro, fevereiro, março....");
let mes = Mes.toLowerCase();



switch (mes) {
  case "março":
    if (dia >= 21) {
      signo = "Aries";
      sign = 1;
    } else if (dia < 21) {
      signo = "Peixes";
      sign = 12;
    }
    break;
  case "abril":
    if (dia >= 21) {
      signo = "Touro";
      sign = 2;
    } else if (dia < 21) {
      signo = "Aries";
      sign = 1;
    }
    break;
  case "maio":
    if (dia >= 21) {
      signo = "Gêmeos";
      sign = 3;
    } else if (dia < 21) {
      signo = "Touro";
      sign = 2;
    }
    break;
  case "junho":
    if (dia >= 21) {
      signo = "Câncer";
      sign = 4;
    } else if (dia < 21) {
      signo = "Gêmeos";
      sign = 3;
    }
    break;
  case "julho":
    if (dia >= 23) {
      signo = "Leão";
      sign = 5;
    } else if (dia < 23) {
      signo = "Câncer";
      sign = 4;
    }
    break;
  case "agosto":
    if (dia >= 23) {
      signo = "Virgem";
      sign = 6;
    } else if (dia < 23) {
      signo = "Leão";
      sign = 5;
    }
    break;
  case "setembro":
    if (dia >= 23) {
      signo = "Libra";
      sign = 7;
    } else if (dia < 23) {
      signo = "Virgem";
      sign = 6;
    }
    break;
  case "outubro":
    if (dia >= 23) {
      signo = "Escorpião";
      sign = 8;
    } else if (dia < 23) {
      signo = "Libra";
      sign = 7;
    }
    break;
  case "novembro":
    if (dia >= 22) {
      signo = "Sagitário";
      sign = 9;
    } else if (dia < 22) {
      signo = "Escorpião";
      sign = 8;
    }
    break;
  case "dezembro":
    if (dia >= 22) {
      signo = "Capricornio";
      sign = 10;
    } else if (dia < 22) {
      signo = "Sagitário";
      sign = 9;
    }
    break;
  case "Janeiro":
    if (dia >= 21) {
      signo = "Aquário";
      sign = 11;
    } else if (dia < 21) {
      signo = "Capricornio";
      sign = 10;
    }
    break;
  case "Fevereiro":
    if (dia >= 19) {
      signo = "Peixes";
      sign = 12;
    } else if (dia < 19) {
      signo = "Aquário";
      sign = 11;
    }
}

document.getElementById("signo").innerHTML = signo;
