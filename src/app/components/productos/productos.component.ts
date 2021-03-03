// import {
//   Component,
//   Input,
//   Output,
//   EventEmitter,
//   Component
// } from "@angular/core";

import { Component } from "@angular/core";
import { Producto } from "./producto";

@Component({
  selector: "productosComponent",
  templateUrl: "./productos.component.html",
  styleUrls: ["./productos.component.css"]
})
export class ProductosComponent {
  public titulo: string;
  public producto: Producto;
  public productos: Array<Producto>;

  constructor() {
    this.titulo = "Nuestros Productos";
    this.producto = new Producto("Helado de fresa", 189, "Helados", true);
    this.productos = [
      new Producto(
        "Galletas de chocolate",
        175,
        "Galletas",
        true,
        "https://images.unsplash.com/photo-1590080874088-eec64895b423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80"
      ),
      new Producto(
        "Pay de manzana",
        200,
        "Pays",
        true,
        "https://images.unsplash.com/photo-1572383672419-ab35444a6934?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
      ),
      new Producto(
        "Pay de Queso",
        210,
        "Pays",
        true,
        "https://images.unsplash.com/photo-1582623196338-9454316891dd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ),
      new Producto(
        "Gelatina de cajeta",
        189,
        "Gelatinas",
        true,
        "https://cdn7.kiwilimon.com/recetaimagen/30077/32768.jpg"
      ),
      new Producto(
        "Flan napolitano",
        189,
        "Flanes",
        true,
        "https://images.squarespace-cdn.com/content/v1/5191acf4e4b0aff7f6090c79/1465696524143-FKYSIUOUL5M73KPU7K4J/ke17ZwdGBToddI8pDm48kIIFsYAJJX10OgNkc4SuD20UqsxRUqqbr1mOJYKfIPR7BkMVOKIvmfHLO2bBi0Tfju1AaMrK2ZMuFnsqT0Nl8tFCRW4BPu10St3TBAUQYVKc4HWs4erqks6VJzynaCTMyUyI4TQxvaWkAngaeNrRanuymNXvPPwYN0vu8pPY7y7_/image-asset.jpeg?format=1500w"
      ),
      new Producto(
        "Pastel Imposible",
        189,
        "Pasteles",
        true,
        "https://imgsnotigram.s3.amazonaws.com/uploads/2021/02/maxresdefault-1-1-1024x576.jpg"
      ),
      new Producto(
        "Panque de nata",
        200,
        "Panques",
        true,
        "https://canastarosa.s3.amazonaws.com/media/__sized__/market/product/9b439827814c4ce4c30f82a2be223866-thumbnail-1120x1120.png"
      ),
      new Producto(
        "Pastel de chocolate",
        189,
        "Pasteles",
        true,
        "https://images.unsplash.com/photo-1565808229224-264b6fcc5052?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ),
      new Producto(
        "Brownies de chocolate con nuez",
        189,
        "Brownies",
        true,
        "https://images.unsplash.com/photo-1588848009831-18daae4945a9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=776&q=80"
      ),
      new Producto(
        "Astorgas",
        189,
        "Mantecadas",
        true,
        "https://images.unsplash.com/photo-1587496578889-6b1dd67f4f06?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ),
      new Producto(
        "Galletas de mantequilla",
        189,
        "Galletas",
        true,
        "https://images.unsplash.com/photo-1449049607083-e29383d58423?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ),
      new Producto(
        "Helado de fresa",
        189,
        "Helados",
        true,
        "https://thumbs.dreamstime.com/b/helado-de-fresa-31633598.jpg"
      ),
      new Producto(
        "Helado de cajeta",
        189,
        "Helados",
        false,
        "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/03/como-hacer-helado-casero-facil-y-rapido-moka.jpg"
      ),
      new Producto(
        "Panque de naranja",
        200,
        "Panques",
        true,
        "https://canastarosa.s3.amazonaws.com/media/__sized__/market/product/cc3d5f3548ea301e976054f3b3fd4b3b-crop-c0-5__0-5-280x280-90.jpg"
      )
    ];
  }
}
