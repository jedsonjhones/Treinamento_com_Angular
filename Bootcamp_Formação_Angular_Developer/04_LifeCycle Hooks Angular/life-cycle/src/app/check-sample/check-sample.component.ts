import { Component,
   OnInit, 
   DoCheck, 
   AfterContentChecked, 
   AfterContentInit, 
   AfterViewChecked, 
   AfterViewInit,
   OnDestroy
  } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent 
implements OnInit, 
DoCheck, 
AfterContentChecked, 
AfterContentInit, 
AfterViewChecked,  
AfterViewInit,
OnDestroy
{

  quantidade:number = 0
  constructor() {  }


  adcionar(){
    this.quantidade += 1
  }
  decrementar(){
    this.quantidade -=1
  }

  // checked --> content ---> view

  //depois da inicialização da view
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  //após alguma alteração, verifica a view
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  //quando o primeira conteudo é iniciado
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  //após alguma alteração, verifica o conteudo
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngOnDestroy(): void {
    console.log("Goodbye")
  }
  
 
}