import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-page',
  standalone: true,
  imports: [],
  templateUrl: './calculadora-page.component.html',
  styleUrl: './calculadora-page.component.scss'
})
export class CalculadoraPageComponent {

  sideClass = ["side-bar","side-bar-class"]

  sizeClass = 1

  abriEfecharSideBar(value: boolean){
    if(value){
      this.sizeClass = this.sizeClass + 1
    }else{
      this.sizeClass = this.sizeClass - 1
    }
  }

}
