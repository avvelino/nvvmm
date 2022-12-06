function primeNumber(num) {
  if (!(typeof num === "number")) {
    return 'Variavel deve ser um numero'
  }

  for (var divisor = 2; divisor < num; divisor++)
    if (num % divisor == 0) return false;
  return true;
}

module.exports = primeNumber;

