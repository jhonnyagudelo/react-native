import { useUsuarios } from "../hoosk";
import { Usuario } from "../interfaces";

export const Usuarios = () => {
  const { usuarios, pSiguiente, pAnterior } = useUsuarios();
  const renderItem = ({
    id,
    first_name,
    last_name,
    email,
    avatar,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 30, borderRadius: 100 }}
          />
        </td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary" onClick={pSiguiente}>
        +
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={pAnterior}>
        -
      </button>
    </>
  );
};
