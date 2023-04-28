import { Component, ViewEncapsulation } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  links = ['characters', 'students', 'new-student' ,'teachers'];
  titles = ['Personajes', 'Estudiantes','Nuevos Estudiantes', 'Profesores'];
  title = 'hogwarts-school';
  activeLink = this.links[0];
  myColor:ThemePalette = "accent";

  constructor(
   private router:Router
  ) {}
}
