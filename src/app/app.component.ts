import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import {changeSize, yellowSubmarine} from './funcions.ts';


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

  constructor() {
  }

  ngOnInit(): void {
    var contingut = document.getElementById('paragraf');
    contingut!.innerText = contingut!.innerText.toUpperCase()

    this.urlTret = document.URL

    yellowSubmarine("h1prin")

    this.array = changeSize(this.array)

  }
}


