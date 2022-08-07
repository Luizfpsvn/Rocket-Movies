import { Container } from './styles'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'
import { FiPlus } from 'react-icons/fi'

export function Home() {
  return (
    <Container>
      <Header />

      <main>
        <Section title="My Movies">
          <Tag title="Ficçao cientifica" />
          <Tag title="Drama" />
          <Tag title="Familia" />
        </Section>

        <Button icon ={FiPlus} title="add a movie" />
      </main>
    </Container>
  )
}
