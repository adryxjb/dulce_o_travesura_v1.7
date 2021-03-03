import { Component, OnInit } from "@angular/core";
import { AuthService } from "../.././services/auth.service";
import { ConectionService } from "../.././services/conexion.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "addProducto",
  templateUrl: "./addproducto.component.html"
})
export class AddProducto implements OnInit {
  registerForm: FormGroup;

  producto: any = {
    nombre: "",
    marca: "",
    precio: "",
    uid: ""
  };
  constructor(private _conexion: ConectionService, public _authS: AuthService) {
    console.log(_conexion);
  }

  ngOnInit() {}

  agregar() {
    this.producto.uid = this._authS.usuario.uid;
    this._conexion.addProducto(this.producto);
  }
}
