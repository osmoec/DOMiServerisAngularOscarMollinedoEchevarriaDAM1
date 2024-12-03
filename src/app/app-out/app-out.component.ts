import { Component } from '@angular/core';
import {ServeiauxService} from '../serveiaux.service';

@Component({
  selector: 'app-app-out',
  imports: [],
  templateUrl: './app-out.component.html',
  standalone: true,
  styleUrl: './app-out.component.css'
})
export class AppOUTComponent {
  mostrar: String = ""
  constructor(private servei: ServeiauxService) {
  }
  ngOnInit(): void {
    this.mostrar = this.servei.donarText()
  }


}
