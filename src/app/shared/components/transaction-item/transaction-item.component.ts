import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CATEGORIAS } from 'src/app/core/constants/categorias';
import { Transaccion } from 'src/app/core/models/transaccion';

@Component({
  selector: 'app-transaction-item',
  templateUrl: './transaction-item.component.html',
  styleUrls: ['./transaction-item.component.scss'],
  standalone: false,
})
export class TransactionItemComponent {

  @Input() transaccion!: Transaccion;

  @Output() clickItem = new EventEmitter<string>();

  onClick(){
    this.clickItem.emit(this.transaccion.id);
  }

  getCategoriaInfo(nombre: string){
    return CATEGORIAS.find(c => c.nombre === nombre);
  }
  
  getIcono(){

  const cat = this.getCategoriaInfo(this.transaccion.categoria);

  return cat?.icono || 'pricetag';

}

getColor(){

  const cat = this.getCategoriaInfo(this.transaccion.categoria);

  return cat?.color || 'medium';

}

}