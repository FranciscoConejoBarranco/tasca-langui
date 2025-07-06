import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { LanguiplatosComponent } from "../languiplatos/languiplatos.component";
@Component({
  selector: 'app-landing',
  imports: [RouterModule, FormsModule, NavbarComponent, HeroComponent, LandingComponent, LanguiplatosComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  
}
