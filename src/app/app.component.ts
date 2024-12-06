import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import {changeSize, yellowSubmarine, countWords, mostrarvalorsdesplegable} from './funcions.js';
import {AppOUTComponent} from './app-out/app-out.component';
import {ServeiauxService} from './serveiaux.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppOUTComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'DOMiServerisAngularOscarMollinedoEchevarriaDAM1';
  urlTret: string = ""
  nParaules: number = 0
  textDiv: string = ""
  nouLibre: any
  outputllibre: string = ""

  constructor(public servei: ServeiauxService) {
  }

  ngOnInit(): void {
    var contingut = document.getElementById('paragraf');
    contingut!.innerText = contingut!.innerText.toUpperCase()
    // @ts-ignore
    var prova = contingut.innerText

    console.log(prova)

    this.urlTret = document.URL

    yellowSubmarine("h1prin")


    this.nParaules = countWords("loreipsum")

    var imatge = document.getElementById("imatge")
    // @ts-ignore
    imatge.innerHTML = "<img src='https://static.wikia.nocookie.net/warhammer40k/images/3/3d/MalumCado.png'>"

    var contDir = document.getElementById("principal");
    // @ts-ignore
    this.textDiv = contDir.innerText

    this.servei.GETtext(this.textDiv)

    this.nouLibre = this.servei.crearLibre("LORT", "Fantasia", "ROL", "Tenebrosa")

    this.outputllibre = this.servei.mostrarLlibre(this.nouLibre)

  }

  protected readonly mostrarvalorsdesplegable = mostrarvalorsdesplegable;
}


