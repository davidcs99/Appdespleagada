/* eslint-disable object-shorthand */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Producto } from '../models/Producto';

@Injectable({
  providedIn: 'root'
})
export class Producto2Service {

  private url = 'https://crudbackend1.herokuapp.com/api/';

  constructor(private http: HttpClient) { }

  listarProductos(){
    return this.http.get<Producto[]>(this.url+'productos/');
  }

  // eslint-disable-next-line @typescript-eslint/type-annotation-spacing
  guardarProducto(producto:Producto)
  {
    // eslint-disable-next-line prefer-const
    let json= JSON.stringify(producto);
    // eslint-disable-next-line prefer-const
    let params = json;
    // eslint-disable-next-line prefer-const
    let headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json'
    });

    return this.http.post(this.url+'producto/',json, { headers: headers })
    .pipe(
      // eslint-disable-next-line arrow-body-style
      map((data) => {
        return data;
      })
    );
  }
}
