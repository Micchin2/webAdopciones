import { Component, OnInit } from '@angular/core';
import { CardAnimal } from "../../components/card-animal/card-animal";
import { Animals } from '../../services/animals';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-adoptar-animal',
  imports: [CardAnimal, HttpClientModule,CommonModule, PaginatorModule],
  templateUrl: './adoptar-animal.html',
  styleUrl: './adoptar-animal.css'
})
export class AdoptarAnimal implements OnInit{

  animales: any[] = [];
  animalesPagina: any[] = [];
  total: number = 0 ;

  constructor(private service: Animals){}


  ngOnInit(): void {
    this.service.getAnimales().subscribe( ani => {
      this.animales = ani.data;
      console.log(this.animales)
      this.total = this.animales.length;
      this.actualizarPagina(0, 9);
    }, error => {
      console.log('Error: ' + error);
    })
  }

  cambiarPagina(event: any) {
    this.actualizarPagina(event.page, event.rows);
  }

  actualizarPagina(pagina: number, tamaño: number) {
    const inicio = pagina * tamaño;
    const fin = inicio + tamaño;
    this.animalesPagina = this.animales.slice(inicio, fin);
  }

}
