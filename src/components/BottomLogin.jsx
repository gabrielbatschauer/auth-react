import { Link } from "react-router-dom";

function BottomLogin(props) {
  return (
    <div>
      <p>{props.page == "login" ? "Não possui conta?" : "Já possui conta?"}</p>
      <p>
        {props.page == "login" ? (
          <Link to="/register">Registre-se</Link>
        ) : (
          <Link to="/login">Entre já</Link>
        )}
      </p>
    </div>
  );
}

export default BottomLogin;
