import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Container, Form, Background } from "./styles";

import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
     return alert("You need to fill all the fields to complete your register!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Sucess, now you are registered as user!");
        navigate("/");
      })
      .catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Error, it was not possible to complete your register!");
        }
      });
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Application made to track everything you want to watch</p>

        <h2>Create your account</h2>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Name"
          onChange={event => setName(event.target.value)}
        />
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

        <Button title="Register" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft /> Back
        </Link>
      </Form>
    </Container>
  );
}
