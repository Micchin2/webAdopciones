import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card-animal',
  imports: [
    CardModule, ButtonModule, CommonModule,
    RouterLink
],
  templateUrl: './card-animal.html',
  styleUrl: './card-animal.css'
})
export class CardAnimal{

  @Input() id!: string;
  @Input() nombre!: string;
  @Input() foto!: string;
  @Input() edad!: string;
  @Input() genero!: string;

}
