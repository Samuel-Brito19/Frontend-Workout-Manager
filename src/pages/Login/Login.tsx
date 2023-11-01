import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/workouts");
  };

  return (
    <Styled.Container>
      <h2>Login</h2>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Styled.Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Styled.Button type="submit">ENTER</Styled.Button>
        <Styled.Span>
          Don't have an account yet? <Link to="/register">Register</Link>
        </Styled.Span>
      </Styled.Form>
    </Styled.Container>
  );
};

export default Login;
