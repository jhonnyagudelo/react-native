export const Funciones = () => {
  const sumar = (a: number, b: number) => {
    return [a + b];
  };
  return (
    <>
      <h1>Funciones</h1>
      El resultado es: <span>{sumar(10, 5)}</span>
    </>
  );
};
