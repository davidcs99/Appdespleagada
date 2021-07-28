import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  mensajes: string;
  numeroConcatenar: string;

  numero1: number;
  numero2: number;
  operadorMatematico: string;


  constructor(public toastController: ToastController) {
    this.numeroConcatenar = '0.0';
  }

  operacionesBasicas(simbolo: string) {
    let resultado: number;

    if (simbolo === '=') {
      this.numero2 = Number(this.numeroConcatenar);
      if (this.operadorMatematico === '+') {
        resultado = this.numero1 + this.numero2;
      }
      if (this.operadorMatematico === '-') {
        resultado = this.numero1 - this.numero2;
      }
      if (this.operadorMatematico === '*') {
        resultado = this.numero1 * this.numero2;
      }
      if (this.operadorMatematico === '/') {
        resultado =  this.numero1 / this.numero2;
      }
      if(this.operadorMatematico==='CE'){
        this.numeroConcatenar = '0.0';
      }
      if(this.operadorMatematico==='%'){
        resultado= this.numero1 % this.numero2;
      }
      if(this.operadorMatematico==='+/-'){
        resultado=this.numero1 * (-1);
      }
      this.numeroConcatenar = resultado + '';
    } else {
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = '0.0';
    }
  }

  erase(){
    this.numeroConcatenar = '0.0';
  }

  concatenarNumero(numero: string) {
    if (this.numeroConcatenar === '0.0') {
      this.numeroConcatenar = numero;
    } else {
      this.numeroConcatenar = this.numeroConcatenar + numero;
    }
  }

  metodoC() {
    this.numeroConcatenar = '0.0';
  }
  metodoCE() {
    this.numeroConcatenar = '0.0';
  }

  operacionInv(simbolo: string){
    let resultado: number;
    if(simbolo === '+/-'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado = this.numero1 * (-1);
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }
  operacionRaiz(simbolo: string){
    let resultado: number;
    if(simbolo === '√'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado = Math.sqrt(this.numero1);
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }
  operacionPotenciacion(simbolo: string){
    let resultado: number;
    if(simbolo === 'x^2'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado = Math.pow(this.numero1,2);
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }

  operacionInver(simbolo: string){
    let resultado: number;
    if(simbolo === '1/x'){
      this.numero1 = Number(this.numeroConcatenar);
      resultado= 1/ this.numero1;
      this.numeroConcatenar = resultado + '';
    }else{
      this.numero1 = Number(this.numeroConcatenar);
      this.operadorMatematico = simbolo;
      this.numeroConcatenar = resultado + '';
    }
  }


}
