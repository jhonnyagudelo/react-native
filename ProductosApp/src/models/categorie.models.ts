export interface CategoriaResponsive {
  total: number;
  categorias: CategoriaCompleta[];
}

export interface CategoriaCompleta {
  _id: string;
  nombre: string;
  usuario?: CreadoPor;
}

export interface CreadoPor {
  _id: string;
  nombre: string;
}
