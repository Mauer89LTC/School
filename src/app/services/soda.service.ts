import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Soda } from '../models/soda.model';

@Injectable({
  providedIn: 'root',
})
export class SodaService {
  private apiUrl = 'http://www.wlarksmdd1.com/mobileDev1/soda.php';

  constructor(private http: HttpClient) {}

  
  getSodas(): Observable<Soda[]> {
    return this.http.get<Soda[]>(this.apiUrl); 
  }

 
  getSodaById(soda_id: string): Observable<Soda> {
    return this.http.get<Soda>(`${this.apiUrl}?soda_id=${soda_id}`);
  }
}






