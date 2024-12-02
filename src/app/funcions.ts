export function yellowSubmarine(idH1: string){
  var canvi = document.getElementById(idH1)!.style.backgroundColor="yellow";
}

export function changeSize(prova: any[]){
  let usuariprova = {columna: 1, textP: "hola"}
  // @ts-ignore
  return [...prova, usuariprova];
}
