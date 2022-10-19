import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroeComponent {
  nombre: string = 'Ironman';
  edad: number = 42;
  ciudad: string = 'Manhattan,Nueva York';

  get nombreCapitalizado(): string {
    return this.nombre.toLocaleUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }
  cambiarEdad(): void {
    this.edad = 36;
  }
  cambiarCiudad(): void {
    this.ciudad = 'Queens, Nueva York';
  }
}
