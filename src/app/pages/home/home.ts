import { Component } from '@angular/core';
import { Hero } from "../../sections/hero/hero";
import { Carrusel } from "../../sections/carrusel/carrusel";
import { AdoptarAnimal } from "../../sections/adoptar-animal/adoptar-animal";

@Component({
  selector: 'app-home',
  imports: [Hero, Carrusel, AdoptarAnimal],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
