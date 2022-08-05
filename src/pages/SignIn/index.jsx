import { FiMail, FiLock } from 'react-icons/fi';

import { Container, Form } from './styles';
import { Input } from '../../components/Input';

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application made to track everything you want to watch</p>

        <h2>Login</h2>

        <Input icon = { FiMail } placeholder = "E-mail"/>
        <Input icon = { FiLock } placeholder = "Password"/>

        <a href="#">Register now</a>
      </Form>
    </Container>
  )
}