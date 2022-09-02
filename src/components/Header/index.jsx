import { FiSearch } from "react-icons/fi";

import { Container, Profile } from "./style";

import { Input } from "../Input";
import { Link } from "react-router-dom";

export function Header() {
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

          <Link to="/">
            <span>Exit</span>
          </Link>
        </div>

        <img src="https://github.com/Luizfpsvn.png" alt="User Image" />
      </Profile>
    </Container>
  );
}
