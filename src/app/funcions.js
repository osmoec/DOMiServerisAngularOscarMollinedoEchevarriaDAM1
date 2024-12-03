import {style} from "@angular/animations";

export function yellowSubmarine(idH1){
  document.getElementById(idH1).style.backgroundColor="yellow";
}

export function changeSize(taula){
  let afegircella = {columna: 1, textP: "hola"}
  // @ts-ignore
  return [...taula, afegircella];
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
