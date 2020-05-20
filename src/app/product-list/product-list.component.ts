import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  conta = 10;

  share(x) {
    window.alert('The product has been shared! '+x);
  }

  onNotify(nome){
    window.alert(nome);
    this.conta++;
  }

  onOut(){
    this.conta++;
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
