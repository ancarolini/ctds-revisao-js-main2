function somar() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado = valor1 + valor2;
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function subtrair() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado = valor1 - valor2;
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function multiplicar() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let resultado = valor1 * valor2;
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function dividir() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    if (valor2 !== 0) {
      let resultado = valor1 / valor2;
      document.getElementById("resultado").innerHTML = resultado;
    } else {
      document.getElementById("resultado").innerHTML = "Erro: divisão por zero!";
     }
  }