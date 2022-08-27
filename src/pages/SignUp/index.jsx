import { FiMail, FiLock, FiUser, FiArrowLeft } from "react-icons/fi";

import { Container, Form, Background } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketMovies</h1>
        <p>Application made to track everything you want to watch</p>

        <h2>Create your account</h2>

        <Input type="text" icon={FiUser} placeholder="Name" />
        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Password" />

        <Button title="Register" />

        <Link to="/">
          <FiArrowLeft /> Back
        </Link>
      </Form>
    </Container>
  );
}
