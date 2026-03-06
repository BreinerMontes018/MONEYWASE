import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransaccionesRoutingModule } from './transacciones-routing-module';
import { ListaTransaccionesPage } from './lista-transacciones/lista-transacciones.page';
import { DetalleTransaccionPage } from './detalle-transaccion/detalle-transaccion.page';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared-module';


@NgModule({
  declarations: [
    ListaTransaccionesPage,
    DetalleTransaccionPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransaccionesRoutingModule,
    SharedModule
  ]
})
export class TransaccionesModule { }
