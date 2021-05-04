import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Voiture } from '../model/voiture';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  private baseURL = "http://localhost:8080/api/voitures"
  constructor(private httpClient: HttpClient) { }

  getVoituresList(): Observable<Voiture[]>{
    return this.httpClient.get<Voiture[]>(`${this.baseURL}`)
  }

  createVoiture(voiture: Voiture): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, voiture)
  }
  

  getVoitureById(id: number): Observable<Voiture>{
    return this.httpClient.get<Voiture>(`${this.baseURL}/${id}`)
  }

  updateVoiture(id: number, voiture: Voiture): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, voiture)
  }

  deleteVoiture(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
