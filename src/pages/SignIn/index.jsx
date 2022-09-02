import { FiMail, FiLock, FiUserPlus } from "react-icons/fi";

import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { useState } from "react";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application made to track everything you want to watch</p>

        <h2>Login</h2>

        <Input
          type="text"
          icon={FiMail}
          placeholder="E-mail"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          type="password"
          icon={FiLock}
          placeholder="Password"
          onChange={event => setPassword(event.target.value)}
        />

        <Button title="Login" onClick={handleSignIn} />

        <Link to="/register">
          <FiUserPlus /> Register
        </Link>
      </Form>

      <Background />
    </Container>
  );
}
