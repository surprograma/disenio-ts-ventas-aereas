import { DateTime } from "luxon";

export class Avion {
  constructor(public cantidadMaximaAsientos: number, public peso: number) {}
}

export class Ciudad {
  constructor(public nombre: string) {}
}

export abstract class Vuelo {
  constructor(
    public fecha: DateTime,
    public avion: Avion,
    public origen: Ciudad,
    public destino: Ciudad,
    public precioEstandar: number
  ) {}

  asientosLibres(): number {
    return this.asientosDisponibles() - this.asientosOcupados();
  }

  abstract asientosDisponibles(): number;
  abstract asientosOcupados(): number;
}
