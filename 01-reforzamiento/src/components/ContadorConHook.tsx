import { useCounter } from "../hoosk/useCounter";

const ContadorConHook = () => {
  const { contador, acumular } = useCounter(100);
  return (
    <>
      <h3>
        Contador con hook: <small>{contador}</small>
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

export default ContadorConHook;
