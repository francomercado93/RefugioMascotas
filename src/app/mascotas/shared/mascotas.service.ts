import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrlHeroku } from './baseUrl';
import { Mascota } from './mascota';
import { TipoAnimal } from './tipoAnimal';

@Injectable({
  providedIn: 'root'
})
export class MascotasService {

  constructor(private httpClient: HttpClient) { }

  public getMascotas() {
    // Interpolacion de cadenas de texto (ES6) para crear cadenas de texto
    return this.httpClient.get<Array<Mascota>>(`${baseUrlHeroku}/mascotas`);
  }

  public getTiposAnimales() {
    return this.httpClient.get<Array<TipoAnimal>>(`${baseUrlHeroku}/tipos`)
  }

  public addMascota(mascota: Mascota) {
    return this.httpClient.post<Mascota>(`${baseUrlHeroku}/mascotas`, mascota)
  }

  public getMascota(id: String) {
    return this.httpClient.get<Mascota>(`${baseUrlHeroku}/mascotas/${id}`)
  }

  public updateMascota(mascota: Mascota) {
    return this.httpClient.put<Mascota>(`${baseUrlHeroku}/mascotas`, mascota)
  }

  public deleteMascota(idMascotaEliminar: String) {
    return this.httpClient.delete<Mascota>(`${baseUrlHeroku}/mascotas/${idMascotaEliminar}`)
  }
}
