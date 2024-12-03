import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import {changeSize, yellowSubmarine,countWords} from './funcions.js';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'DOMiServerisAngularOscarMollinedoEchevarriaDAM1';
  urlTret: string = ""
  array: any = [{columna: 1, textP: "hola1"},{columna: 2, textP: "hola2"}]
  nParaules: number = 0

  constructor() {
  }

  ngOnInit(): void {
    var contingut = document.getElementById('paragraf');
    contingut!.innerText = contingut!.innerText.toUpperCase()

    this.urlTret = document.URL

    yellowSubmarine("h1prin")

    this.array = changeSize(this.array)

    this.nParaules = countWords("loreipsum")

    var imatge = document.getElementById("imatge")
    // @ts-ignore
    imatge.innerHTML = "<img src='https://static.wikia.nocookie.net/warhammer40k/images/3/3d/MalumCado.png'>"

  }
}


