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

module.exports = contagem;