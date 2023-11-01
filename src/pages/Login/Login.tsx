import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./styles";
import { useState } from "react";
import api from "../../services/api";
import { AxiosError } from "axios";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await api.post("/auth", {
        email,
        password,
      });

      navigate("/workouts");
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data.error);
        return;
      }

      alert("Something went wrong, please try again.");
    }
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
