function GenerateFibonacci(number) {

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

module.exports = GenerateFibonacci