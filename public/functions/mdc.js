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

module.exports = mdc;