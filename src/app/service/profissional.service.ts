import { Profissional } from './../model/Profissional';
import { ProfissionalDTO } from '../model/dto/ProfissionalDTO';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from '../model/page/page.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {

  constructor(private http: HttpClient) { }

  private readonly urlBase = "http://localhost:8080/api/v1/profissionais";


  getList(page = 0, size = 10): Observable<Page<ProfissionalDTO>> {
    return this.http.get<Page<ProfissionalDTO>>(`${this.urlBase}?page=${page}${size ? `&size=${size}` : ``}`);
  }

  create(profissional: Profissional): Observable<ProfissionalDTO> {
    return this.http.post<ProfissionalDTO>(this.urlBase, profissional);
  }

  getById(id: number): Observable<ProfissionalDTO> {
    return this.http.get<ProfissionalDTO>(`${this.urlBase}/${id}`);
  }

  updateByid(id: number, profissional: Profissional): Observable<ProfissionalDTO> {
    return this.http.put<ProfissionalDTO>(`${this.urlBase}/${id}`, profissional);
  }

  deleteByid(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${id}`);
  }

  deleteByids(ids: Array<number>): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${ids}`);
  }
}
