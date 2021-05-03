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
}
