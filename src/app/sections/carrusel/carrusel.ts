import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-carrusel',
  imports: [
    CarouselModule,ButtonModule,TagModule
  ],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css'
})
export class Carrusel {
  testimonios: any[] = [];

    constructor() { }

    ngOnInit() {
        this.testimonios = [
            {
                nombre: 'Testimonio 1',
                imagen: 'brianna.webp'
            },
            {
                nombre: 'Testimonio 2',
                imagen: 'kenobi.webp'
            },
            {
                nombre: 'Testimonio 3',
                imagen: 'sebastian.webp'
            },
        ];
    }

}
