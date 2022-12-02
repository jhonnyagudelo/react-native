export interface FunctionBtn {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (numeroTexto: string) => void;
}
