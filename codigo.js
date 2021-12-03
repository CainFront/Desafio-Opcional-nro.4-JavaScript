let n1 = parseFloat(prompt("Ingresa el primer numero"));
let signo = prompt('introduce un signo " + "" - "" * "" / "');
let n2 = parseFloat(prompt("Ingresa el segundo numero"));

let resultado;

// OPERACION: SUMA
function suma(n1, n2) {
  resultado = n1 + n2;
  return resultado;
}

// OPERACION: RESTA
function resta(n1, n2) {
  if (n1 >= n2) {
    resultado = n1 - n2;
  } else resultado = n2 - n1;
  return resultado;
}

// OPERACION: MULTIPLICACION
function multiplicacion(n1, n2) {
  resultado = n1 * n2;
  return resultado;
}

// OPERACION: DIVISION
function division(n1, n2) {
  resultado = n1 / n2;
  return resultado;
}
/*====================
OPERACIONES FINALES
=====================*/
if (signo == "+") {
  suma(n1, n2);
  console.log(resultado);
  alert("El resultado de tu " + "suma es: " + resultado);
} else if (signo == "-") {
  resta(n1, n2);
  console.log(resultado);
  alert("El resultado de tu " + "resta es: " + resultado);
} else if (signo == "*") {
  multiplicacion(n1, n2);
  console.log(resultado);
  alert("El resultado de tu " + "multiplicacion es: " + resultado);
} else if (signo == "/") {
  division(n1, n2);
  console.log(resultado);
  alert("El resultado de tu " + "division es: " + resultado);
} else console.log("Se ha producido un error, intente luego");

//                   THE END
