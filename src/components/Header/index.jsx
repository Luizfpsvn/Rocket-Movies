import { FiSearch } from 'react-icons/fi'

import { Container, Profile } from './style'

import { Input } from '../Input'

export function Header() {
  return (
    <Container>
      <h1>RocketMovies</h1>

      <Input type="search" icon={FiSearch} placeholder="Search by title" />

      <Profile>
        <div>
          <strong>Luiz Fernando</strong>
          <span>Exit</span>
        </div>

        <img src="https://github.com/Luizfpsvn.png" alt="User Image" />
      </Profile>
    </Container>
  )
}
