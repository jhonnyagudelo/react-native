export const TiposBasicos = (props: {}) => {
  let nombre: string = "Jhonny";
  const edad = 35;
  const estaActivo: boolean = true;
  const poderes: string[] = [];
  return (
    <div>
      <h3>Tipos basicos</h3>
      {nombre},{edad}, {estaActivo ? "Activo" : "Inactivo"}
      <br />
      {poderes.join(", ")}
    </div>
  );
};
