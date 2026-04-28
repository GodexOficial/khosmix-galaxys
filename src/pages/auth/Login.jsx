import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Login() {
  const { user, loginWithDiscord, logout } = useContext(AuthContext);

  console.log("USER:", user);

  return (
    <div>
      <h1>Login</h1>

      {user ? (
        <>
          <p>Logado como: {user.email}</p>
          <button onClick={logout}>Sair</button>
        </>
      ) : (
        <button onClick={loginWithDiscord}>Entrar com Discord</button>
      )}
    </div>
  );
}
