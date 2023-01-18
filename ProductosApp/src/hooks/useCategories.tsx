import { useEffect, useState } from 'react';
import cafeApi from '../api/cafeApi';
import { CategoriaCompleta, CategoriaResponsive } from '../models';
import { Loading } from '../components';

export const useCategories = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<CategoriaCompleta[]>([]);

  const getCategories = async () => {
    const res = await cafeApi.get<CategoriaResponsive>('/categorias');
    setCategories(res?.data?.categorias);
    setIsLoading(false);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, isLoading };
};
