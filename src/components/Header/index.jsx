import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { FiSearch } from "react-icons/fi";

import { Container, Profile } from "./style";

import { Input } from "../Input";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Link to="/">
        <h1>RocketMovies</h1>
      </Link>

      <Input type="search" icon={FiSearch} placeholder="Search by title" />

      <Profile>
        <div>
          <Link to="/profile">
            <strong>Luiz Fernando</strong>
          </Link>

          <button onClick={signOut} >Exit</button>
        </div>

        <img src="https://github.com/Luizfpsvn.png" alt="User Image" />
      </Profile>
    </Container>
  );
}
