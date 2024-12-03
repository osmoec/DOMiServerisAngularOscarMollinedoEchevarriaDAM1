import {Injectable, OnInit} from '@angular/core';

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

}
