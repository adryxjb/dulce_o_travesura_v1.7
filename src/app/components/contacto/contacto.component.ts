// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   Component
// } from "@angular/core";

import { Component, OnInit } from "@angular/core";
import { Mensaje } from "./mensaje";
import { ContactoService } from "../services/contacto.service";

@Component({
  selector: "contactoComponent",
  templateUrl: "./contacto.component.html",
  styleUrls: ["./contacto.component.css"],
  providers: [ContactoService]
})
export class ContactoComponent {
  public titulo: string;
  public mensaje: Mensaje;
  public mensajes: Array<Mensaje>;

  constructor(private _contactoService: ContactoService) {
    this.titulo = "Contactanos";
  }

  ngOnInit() {
    this.titulo = "Contactanos";
    this.mensajes = this._contactoService.getMensaje();
    console.log("this.mensajesList: ", this.mensajes);
  }
  guardarMensaje(mail: string, mensaje: string) {
    this.mensaje = new Mensaje(mail, mensaje);
    this._contactoService.addMensaje(this.mensaje);
    this.mensaje = null;
  }
}
