import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MakeResponse, ModelResponse, TrimResponse, YearResponse } from '../model/car.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  /**
   * constructor
   *
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * getYears
   */
  getYears(): Observable<YearResponse[]> {
    return this.http.get<YearResponse[]>(`${environment.apiBasePath}/api/vehicles/years`);
  }

  /**
   * getMakes
   *
   * @param year string
   */
  getMakes(year: string): Observable<MakeResponse[]> {
    return this.http.get<MakeResponse[]>(`${environment.apiBasePath}/api/vehicles/makes/${year}`);
  }

  /**
   * getModels
   *
   * @param year string
   * @param make string
   */
  getModels(year: string, make: string): Observable<ModelResponse[]> {
    return this.http.get<ModelResponse[]>(`${environment.apiBasePath}/api/vehicles/models/${make}/${year}`);
  }

  /**
   * getTrim
   *
   * @param year string
   * @param make string
   * @param model string
   */
  getTrim(year: string, make: string, model: string): Observable<TrimResponse[]> {
    return this.http.get<TrimResponse[]>(`${environment.apiBasePath}/api/vehicles/trim/${make}/${model}/${year}`);
  }
}
