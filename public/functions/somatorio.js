function somatorio(arry) {

  if (!Array.isArray(arry)) {
    return 'Variavel deve ser um objeto array'
  }

  let num = arry;
  let soma = 0;
  for (var i = 0; i < num.length; i++) {
    soma = soma + num[i];
  }

  return soma;
}

module.exports = somatorio;