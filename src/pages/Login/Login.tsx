import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/workouts");
  };

  return (
    <Styled.Container>
      <h2>Login</h2>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input type="email" placeholder="Enter email" />
        <Styled.Input type="password" placeholder="Enter password" />
        <Styled.Button type="submit">ENTER</Styled.Button>
        <Styled.Span>
          Don't have an account yet? <Link to="/register">Register</Link>
        </Styled.Span>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Login;
