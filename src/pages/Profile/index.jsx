import { FiUser, FiMail, FiLock, FiArrowLeft, FiCamera } from 'react-icons/fi';

import { Container, Form, Avatar } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return (
    <Container>
      <header>
        <a href="#">
          <FiArrowLeft /> <span>Back</span>
        </a>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Luizfpsvn.png" alt="User Image" />

          <label htmlFor="avatar">
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

        <Input type="text" icon={FiUser} placeholder="Name" />
        <Input type="text" icon={FiMail} placeholder="E-mail" />

        <Input type="password" icon={FiLock} placeholder="Actual Password" />
        <Input type="password" icon={FiLock} placeholder="New Password" />

        <Button title="Save Changes" />
      </Form>
    </Container>
  );
}
