import React, { createContext, useContext, useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { Producto, ProductsResponse } from '../models';

type ProductsContextProps = {
  products: Producto[];
  loadProducts: () => Promise<void>;
  addProduct: (categoryId: string, productName: string) => Promise<Producto>;
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

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const res = await cafeApi?.get<ProductsResponse>('/productos?limit=50');
    setProducts([...res?.data?.productos]);
  };

  const addProduct = async (
    categoryId: string,
    productName: string,
  ): Promise<Producto> => {
    const res = await cafeApi?.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts([...products, res?.data]);
    return res?.data;
  };
  const updateProduct = async (
    categoryId: string,
    productName: string,
    productId: string,
  ) => {
    const res = await cafeApi?.post<Producto>('/productos', {
      nombre: productName,
      categoria: categoryId,
    });
    setProducts(
      products?.map(prod => {
        return prod?._id === productId ? res?.data : prod;
      }),
    );
  };
  const deleteProduct = async (id: string) => {
    try {
      const res = await cafeApi?.delete<Producto>(`/productos${id}`);
      setProducts([...products, res?.data]);
    } catch (e: any) {
      console.log(e?.response?.data?.errors[0]?.msg);
    }
  };
  //
  const loadProductById = async (id: string): Promise<Producto> => {
    try {
      const res = await cafeApi?.get<Producto>(`/productos/${id}`);
      return res?.data;
    } catch (error) {
      console.log(error);
    }
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
