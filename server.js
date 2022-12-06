const express = require('express');
const app = express();
const path = require("path");

app.use(express.static('public'));
//app.use('/images', express.static('images'));
app.use(express.urlencoded({
  extended: true
}));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/js', (req, res) => {
  console.log('js executou')
  res.sendFile(path.join(__dirname, 'public/views/algoritmos_js.html'));;
});

app.post('/numberPrime', function(req, res) {
  var requi = req.body.txtNumber;
  requi = parseInt(requi);
  var resp = numberPrime(requi) ? "Numero Primo" : "Numero não primo";
  console.log('numberPrime')
  res.send("Resultado:" + resp);

});

app.post('/somatorio', function(req, res) {
  var requi = req.body.txtVetor;

  res.send("Resultado da soma:"+ somatorio(requi))

});



app.listen(3000, () => {
  console.log('server started');
});



//scripts
function contagem(arry) {
  if (!Array.isArray(arry)) {
    return 'Variavel deve ser um objeto array'
  }
  let array = arry;
  let ctg = 0;
  if (Number.isInteger(array.length)) {
    ctg++;
  }

  for (var i = 0; i < array.length; i++) {
    if (Number.isInteger(array[i])) {
      ctg++
    }

  }

  return ctg;

}

function fibo(number) {

  if (!Number.isInteger(number)) {
    return 'Variavel de entrada deve ser um numero inteiro'
  }
  var fibonacci = [];
  fibonacci[0] = 0;
  fibonacci[1] = 1;
  for (var i = 2; i < number; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci;
}

function mdc(primeiro, secundo) {
  if (!(typeof primeiro === "number") || !(typeof secundo === "number")) {
    return 'Variaveis deve ser um numero'
  }
  let prim = primeiro;
  let sec = secundo;
  let resto

  do {
    resto = prim % sec
    prim = sec
    sec = resto
  } while (resto != 0)

  return prim;
}

function numberPrime(num) {
  if (!(typeof num === "number")) {
    return 'Variavel deve ser um numero'
  }

  for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false;
  return true;
}

function quicksort(array) {

  if (!Array.isArray(array)) {
    return 'Variavel deve ser um objeto array'
  }
  if (array.length <= 1) {
    return array
  }

  let pivot = array[0]

  let left = []
  let right = []

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }

  return quicksort(left).concat(pivot, quicksort(right))
}

function somatorio(arry) {
  var vetor = vString(arry);
  if (!Array.isArray(vetor)) {
    return 'Entrada deve ser array'
  }

  let num = vetor;
  let soma = 0;
  for (var i = 0; i < num.length; i++) {
    soma = soma + num[i];
  }
  soma = soma.toString();
  return soma;
}

function vString(arry) {
  var vetor = arry.split(",");
  console.log(vetor)
  var numberArray = [];
  for (var i = 0; i < vetor.length; i++) {
    numberArray.push(parseInt(vetor[i]));
  }
  console.log(numberArray)
  return numberArray;
}
