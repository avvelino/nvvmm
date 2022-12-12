var forms = ['form1', 'form2', 'form3', 'form4', 'form4', 'form5', 'form6']

function deixarOculto(id) {
  document.getElementById(id).style.display = "none";
}

function deixarVisivel(id) {
  for (let i = 0; i < forms.length; i++) {
    if (id != forms[i]) {
      deixarOculto(forms[i]);
    }
  }
  document.getElementById(id).style.display = "inline";

}