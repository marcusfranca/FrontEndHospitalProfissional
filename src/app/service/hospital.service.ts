import { HospitalDTO } from './../model/dto/HospitalDTO';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../model/page/page.interface';
import { Hospital } from '../model/Hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private http: HttpClient) { }

  private readonly urlBase = "http://localhost:8080/api/v1/hospitais";


  get(page = 0, size?: number): Observable<Page<HospitalDTO>> {
    return this.http.get<Page<HospitalDTO>>(`${this.urlBase}?page=${page}${size ? `&size=${size}` : ``}`);
  }

  create(hospital: Hospital): Observable<HospitalDTO> {
    return this.http.post<HospitalDTO>(this.urlBase, hospital);
  }

  updateDeleteByid(id: number, hospital: HospitalDTO): Observable<HospitalDTO> {
    return this.http.put<HospitalDTO>(`${this.urlBase}/${id}`, hospital);
  }

  deleteByid(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${id}`);
  }

  deleteByids(ids: Array<number>): Observable<any> {
    return this.http.delete<any>(`${this.urlBase}/${ids}`);
  }
}
