import React, { useEffect, useReducer } from "react";

interface AuthState {
  validando: Boolean;
  token: String | null;
  username: String;
  nombre: String;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  username: "",
  nombre: "",
};

type LoginPayload = {
  username: string;
  nombre: string;
};
type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        nombre: "",
        username: "",
      };
    case "login":
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: "ABC123",
        nombre,
        username,
      };
  }
};

export const Login = () => {
  const [{ validando, token, username }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Jhonny",
        username: "Balacera",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (validando) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">Validando.....</div>
      </>
    );
  }

  return (
    <>
      <h3>Login</h3>
      {token ? (
        <div className="alert alert-success">Autenticado como: {username}</div>
      ) : (
        <div className="alert alert-danger">No autenticado.....</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>
          LogOut
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </>
  );
};
