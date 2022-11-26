import { useForm } from "../hoosk";

export const Formulario = () => {
  const { formulario, email, password, onChange } = useForm({
    email: "test@gmail.com",
    password: "123456",
  });
  return (
    <>
      <h3>Formulario</h3>
      <input
        type="text"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={({ target }) => onChange(target.value, "email")}
      />
      <input
        type="text"
        className="form-control mt-2 mb-2 "
        placeholder="password"
        value={password}
        onChange={({ target }) => onChange(target.value, "password")}
      />
      <code>
        <pre> {JSON.stringify(formulario, null, 2)} </pre>
      </code>
    </>
  );
};
