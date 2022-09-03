import { Link } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> <span>Back</span>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Luizfpsvn.png" alt="User Image" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input
          type="text"
          icon={FiUser}
          placeholder="Name"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <Input
          type="text"
          icon={FiMail}
          placeholder="E-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="Actual Password"
          onChange={event => setPasswordOld(event.target.value)}
        />

        <Input
          type="password"
          icon={FiLock}
          placeholder="New Password"
          onChange={event => setPasswordNew(event.target.value)}
        />

        <Button title="Save Changes" />
      </Form>
    </Container>
  );
}
