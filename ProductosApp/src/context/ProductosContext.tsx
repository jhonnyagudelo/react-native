import { createContext, useContext, useState } from 'react';
import { Producto } from '../models';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<void>;
  updateProduct: (
    categoryId: string,
    productName: string,
    productId: string,
  ) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  loadProductById: (id: string) => Promise<Producto>;
  uploadImage: (data: any, id: string) => Promise<void>;
};

export const ProductosContext = createContext({} as ProductsContextProps);

export const ProductProvider = ({ children }: any) => {
  const [products, setProducts] = useState<Producto[]>([]);
  const loadProducts = async () => { };
  const addProduct = async (categoryId: string, productName: string) => { };
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => { };
  const deleteProduct = async (id: string) => { };
  const loadProductById = (id: string) => {
    throw new Error('not implements');
  };
  const uploadImage = async (data: any, id: string) => { };

  return (
    <ProductosContext.Provider
      value={{
        products,
        loadProductById,
        addProduct,
        updateProduct,
        deleteProduct,
        loadProducts,
        uploadImage,
      }}>
      {children}
    </ProductosContext.Provider>
  );
};

export const useProductsContext = () => {
  const context = useContext(ProductosContext);
  if (context === undefined) {
    throw new Error('Un error en el context');
  }
  return context;
};
