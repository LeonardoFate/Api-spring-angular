import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareasComponent } from "./tareas/tareas.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TareasComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tarea-cliente';
}
