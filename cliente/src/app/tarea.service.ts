import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<any> {
    return this.http.get('http://localhost:8082/api/tareas');
  }

  create(tarea: any): Observable<any> {
    return this.http.post('http://localhost:8082/api/tareas', tarea);
  }

  update(id: number, tarea: any): Observable<any> {
    return this.http.put('http://localhost:8082/api/tareas/${id}', tarea);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8082/api/tareas/${id}`);
  }

}
