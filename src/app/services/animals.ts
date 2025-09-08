import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animales } from '../interfaces/animales.interface';

@Injectable({
  providedIn: 'root'
})
export class Animals {
  
  apiRL = 'https://huachitos.cl/api/';

  constructor(private http: HttpClient){}

  getAnimales():Observable<Animales> {
    return this.http.get<Animales>(this.apiRL + 'animales');
  }

}
