import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[]=[]
  menuType:string = "user"


  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "cabo",
      "font"

    ]
   }

  ngOnInit(): void {
  }
  adcionar(){
  this.produtos.push("jedson")
  }
  remover(index: number){
    alert(index)
    this.produtos.splice(index,1)

  }

}
