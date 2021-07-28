import { Component } from '@angular/core';
import { Producto } from '../models/Producto';
import { Producto2Service } from '../service/Producto2.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lista: Producto []=[];

  constructor(private productservice: Producto2Service ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  producto: Producto = new Producto();

  ionViewDidEnter(){
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.productservice.listarProductos().subscribe((data: any) =>{
      this.lista = data;
    });
  }
  agregarProducto() {

    this.productservice.guardarProducto(this.producto).subscribe((res: any) =>{
      this.producto = new Producto();
      this.obtenerProductos();
    });

  }

}
