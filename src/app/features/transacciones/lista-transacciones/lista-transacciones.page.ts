import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { TipoTransaccion } from 'src/app/core/constants/tipos-transaccion';
import { Categoria } from 'src/app/core/models/categoria';
import { Transaccion } from 'src/app/core/models/transaccion';
import { TransaccionService } from 'src/app/core/services/transaccion';
import { TransactionFormComponent } from 'src/app/shared/components/transaction-form/transaction-form.component';

@Component({
  selector: 'app-lista-transacciones',
  templateUrl: './lista-transacciones.page.html',
  styleUrls: ['./lista-transacciones.page.scss'],
  standalone: false,
})
export class ListaTransaccionesPage implements OnInit {

  transacciones$: Observable<Transaccion[]>;

tipoFiltro: TipoTransaccion | 'todos' = 'todos';
categoriaFiltro: Categoria['nombre'] | 'todas' = 'todas';
textoBusqueda = '';

  constructor(
    private transaccionService: TransaccionService,
    private modalCtrl: ModalController,
    private router: Router
  ) {
    this.transacciones$ = this.transaccionService.transacciones$;
  }

  ngOnInit() {}

  async abrirFormulario() {

    const modal = await this.modalCtrl.create({
      component: TransactionFormComponent
    });

    await modal.present();
  }

  abrirDetalle(id: string){

  this.router.navigate(['/tabs/transacciones/detalle', id]);

}

}