import {Injectable, OnInit} from '@angular/core';
import {Llibre} from './llibre';

@Injectable({
  providedIn: 'root'
})
export class ServeiauxService implements OnInit {

  public text: string = ""
  constructor() {}
  ngOnInit(): void {}

  // @ts-ignore
  GETtext(id:string) {
    this.text = id
  }
  donarText(){
    return this.text
  }

  crearLibre(nom: string, tematica1: string,tematica2: string, tematica3: string){
    // @ts-ignore
    let llibrenou = new Llibre(nom, tematica1, tematica2, tematica3);

    return llibrenou
  }

  mostrarLlibre(llibre: Llibre){
    var string = llibre.nom+" "+llibre.tematiques[0]+" "+llibre.tematiques[1]+" "+llibre.tematiques[2]
    return string
  }


}
