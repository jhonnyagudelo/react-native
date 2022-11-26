import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const paginaRef = useRef(1);

  useEffect(() => {
    cargarUsuario();
  }, []);

  const cargarUsuario = async () => {
    try {
      const res = await reqResApi.get<ReqResListado>("/users", {
        params: {
          page: paginaRef.current,
        },
      });

      if (res?.data?.data.length > 0) {
        setUsuarios(res?.data?.data);
      } else {
        paginaRef.current--;
        alert("No hay mas registros");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pSiguiente = () => {
    paginaRef.current++;
  };
  const pAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
    } else {
      cargarUsuario();
    }
  };

  return {
    usuarios,
    pSiguiente,
    pAnterior,
  };
};
