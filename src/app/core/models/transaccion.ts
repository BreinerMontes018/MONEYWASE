import { TipoTransaccion } from "../constants/tipos-transaccion";
import { Categoria } from "./categoria";

export interface Transaccion {
  id: string;
  userId: string;
  tipo: TipoTransaccion;
  categoria: Categoria['nombre']
  monto: number;
  fecha: Date;
  descripcion?: string;
  foto?: string | null;
}