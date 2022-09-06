import { Link } from "react-router-dom";

import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from "react-icons/fi";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    await updateProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft /> <span>Back</span>
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt={`user image of ${user.name}`} />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" onChange={handleChangeAvatar} />
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

        <Button title="Save Changes" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
