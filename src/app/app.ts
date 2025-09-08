import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from "./shared/nav/nav";
import { Home } from "./pages/home/home";
import { Carrusel } from "./sections/carrusel/carrusel";
import { AdoptarAnimal } from "./sections/adoptar-animal/adoptar-animal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Home, Carrusel, AdoptarAnimal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webAdopcion');
}
