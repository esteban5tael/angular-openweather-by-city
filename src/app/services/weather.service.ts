import { Injectable } from '@angular/core';
import { API_CITY } from '../../config/apiConfigData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    return this.http.get(`${API_CITY}${city}`);
  }
}
