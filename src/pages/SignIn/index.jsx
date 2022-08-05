import { FiMail, FiLock } from 'react-icons/fi'

import { Container, Form, Background } from './styles'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Application made to track everything you want to watch</p>

        <h2>Login</h2>

        <Input type="text" icon={FiMail} placeholder="E-mail" />
        <Input type="password" icon={FiLock} placeholder="Password" />

        <Button title="Login" />

        <a href="#">Register now</a>
      </Form>

      <Background />
    </Container>
  )
}
