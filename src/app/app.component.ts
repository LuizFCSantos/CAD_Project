import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
// import { LoginPageComponent } from './login-page/login-page.component';
import { CadastroPageComponent } from "./cadastro-page/cadastro-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CadastroPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cad_front';


}
