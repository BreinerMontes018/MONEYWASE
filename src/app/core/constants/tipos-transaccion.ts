export const TIPOS_TRANSACCION = [
  'Ingreso',
  'Gasto'
] as const;

export type TipoTransaccion = typeof TIPOS_TRANSACCION[number];