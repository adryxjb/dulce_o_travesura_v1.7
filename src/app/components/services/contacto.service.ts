import { Injectable } from "@angular/core";
import { Mensaje } from "../contacto/mensaje";

@Injectable()
export class ContactoService {
  public titulo: string;
  public mensaje: Mensaje;
  public mensajes = [
    new Mensaje("rosa@mail.com", "Las recetas son muy sencillas y deliciosas."),
    new Mensaje(
      "pedro@mail.com",
      "¿Cuando tendrás disponible el Helado de cajeta?"
    ),
    new Mensaje("maria@mail.com", "No me gusta su pagina."),
    new Mensaje(
      "roberto@mail.com",
      "¿Podrian actualizar su lista de productos? está incompleta"
    ),
    new Mensaje(
      "ale@mail.com",
      "¿Podrian contactarme? Me interesa hacer un pedido"
    )
  ];

  getMensaje(): Array<Mensaje> {
    return this.mensajes;
  }

  addMensaje(usuario: Mensaje) {
    this.mensajes.push(usuario);
    return this.mensajes;
  }
}
