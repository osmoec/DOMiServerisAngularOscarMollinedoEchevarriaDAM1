import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

  constructor() {
  }

  ngOnInit(): void {
    var contingut = document.getElementById('paragraf');
    contingut!.innerText = contingut!.innerText.toUpperCase()

    this.urlTret = document.URL

  }
}


