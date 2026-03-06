import { Categoria } from './categoria';

export interface ResumenFinanciero {
  saldoActual: number;
  totalIngresos: number;
  totalGastos: number;
  gastosPorCategoria: {
    categoria: Categoria['nombre'];
    monto: number;
    porcentaje: number;
  }[];

}
