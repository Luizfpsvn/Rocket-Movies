import { Link } from "react-router-dom";

import { api } from "../../services/api";

import { useAuth } from "../../hooks/auth";

import { FiSearch } from "react-icons/fi";

import { Container, Profile } from "./style";

import { Input } from "../Input";

export function Header() {
  const { signOut, user } = useAuth();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input type="search" icon={FiSearch} placeholder="Search by title" />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>{user.name}</strong>
          </Link>

          <button onClick={signOut}>Exit</button>
        </div>

        <img src={avatarUrl} alt={`user image of ${user.name}`} />
      </Profile>
    </Container>
  );
}
