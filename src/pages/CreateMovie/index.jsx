import { FiArrowLeft } from 'react-icons/fi';
import { Container } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { TextLink } from '../../components/TextLink';
import { TextArea } from '../../components/TextArea';

export function CreateMovie() {
  return (
    <Container>
      <Header />

      <TextLink icon={FiArrowLeft} title="Back" />

      <Section title="New Movie" />

      <div className="inputs">
        <Input type="text" placeholder="Title" />
        <Input type="number" placeholder="Rate (from 0 to 5)" />
      </div>

      <TextArea placeholder="Observations"/>
    </Container>
  );
}
