import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css'], // Asegúrate de que sea `styleUrls`, no `styleUrl`
})
export class TareasComponent implements OnInit {
  tareas: any[] = [];
  formulario: FormGroup;

  constructor(private tareaService: TareaService, private fb: FormBuilder) {
    // Inicializa el formulario aquí
    this.formulario = this.fb.group({
      tarea: [],
      completado: [false],
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.tareaService.getAll().subscribe((tareas: any) => {
        console.log('Tareas obtenidas:', tareas); // Verifica la respuesta
        this.tareas = tareas._embedded ? tareas._embedded.tareas : [];
      }, (err) => {
        console.error('Error al obtener tareas:', err);
      });
  }

  save() {
    const value = this.formulario.value;
    console.log(this.formulario.value);
    this.tareaService.create(value).subscribe({
      next: () => {
        this.getAll();
        this.formulario.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
}

delete(tarea: any) {
    if (tarea && tarea._links && tarea._links.self) {
      const url = tarea._links.self.href; // Obtener la URL de eliminación desde _links
      this.tareaService.delete(url).subscribe({
        next: () => {
          this.getAll(); // Recargar la lista de tareas
        },
        error: (err) => {
          console.error('Error al eliminar la tarea:', err); // Manejo de errores
        },
      });
    } else {
      console.error('Tarea no válida:', tarea); // Manejo de errores si tarea no tiene _links o es null
    }
  }

}
