import { FiUser, FiMail, FiLock, FiArrowLeft} from 'react-icons/fi';

import { Container } from './styles';

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft /> <span>Back</span>
        </a>
      </header>
    </Container>
  )
}