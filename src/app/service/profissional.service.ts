import { ProfissionalDTO } from './../model/dto/Profissional';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) { }

  private readonly urlBase = "http://localhost:8080/api/v1/profissionais";


  get(): Observable<ProfissionalDTO> {
    return this.http.get<ProfissionalDTO>(this.urlBase);
  }

  create(profissional: ProfissionalDTO): Observable<ProfissionalDTO> {
    return this.http.post<ProfissionalDTO>(this.urlBase, profissional);
  }

  updateDeleteByid(id: number, profissional: ProfissionalDTO): Observable<ProfissionalDTO> {
    return this.http.put<ProfissionalDTO>(`${this.urlBase}/${id}`, profissional);
  }

  deleteByid(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${id}`);
  }

  deleteByids(ids: Array<number>): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${ids}`);
  }
}
