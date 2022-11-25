import React, { useState } from "react";

export const Contador = (props: {}) => {
  const [contador, setContador] = useState<number>(0);
  const acumular = (numero: number) => setContador(contador + numero);
  return (
    <>
      <h3>
        Contador: <small>{contador}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(+1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </>
  );
};
