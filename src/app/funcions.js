import {style} from "@angular/animations";

export function yellowSubmarine(idH1){
  document.getElementById(idH1).style.backgroundColor="yellow";
}

export function changeSize(taula){
  document.getElementById(taula).style.width="500px"
}

export function countWords (id) {
  var paraules = 0
  // @ts-ignore
  var text = document.getElementById(id)
// @ts-ignore
  for (var i = 0; i < text.innerText.length; i++) {
// @ts-ignore
    if (i == text.innerText.length - 1 && !(text.innerText.charAt(i).includes(" "))) {
      paraules++
    }
// @ts-ignore
    else if (text.innerText.charAt(i).includes(" ") && !(text.innerText.charAt(i + 1).includes(" "))) {
      paraules++
    }
  }
  return paraules
}
export function mostrarvalorsdesplegable(desplegableId, divId) {
  const desplegable = document.getElementById(desplegableId);
  const divResultat = document.getElementById(divId);

  let valorsText = '';

  for (let i = 0; i < desplegable.options.length; i++) {
    valorsText += desplegable.options[i].text + ' ';
  }

  divResultat.innerHTML = 'Valors disponibles: ' + valorsText;
}
