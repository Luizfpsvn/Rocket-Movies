import { Container } from './styles'

import { FiPlus } from 'react-icons/fi'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'

export function Home() {
  return (
    <Container>
      <Header />

      <div className="homeHeader">
        <Section title="My Movies" />
        <Button icon={FiPlus} title="Add a movie" />
      </div>

      <main>
        <Note
          data={{
            title: 'Interstellar',
            text: 'a movie....',
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'fiction' }
            ]
          }}
        />

        <Note
          data={{
            title: 'Interstellar',
            text: 'a movie....',
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'fiction' }
            ]
          }}
        />
        <Note
          data={{
            title: 'Interstellar',
            text: 'a movie....',
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'fiction' }
            ]
          }}
        />
        <Note
          data={{
            title: 'Interstellar',
            text: 'a movie....',
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'fiction' }
            ]
          }}
        />
        <Note
          data={{
            title: 'Interstellar',
            text: 'a movie....',
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'fiction' }
            ]
          }}
        /><Note
        data={{
          title: 'Interstellar',
          text: 'a movie....',
          tags: [
            { id: '1', name: 'drama' },
            { id: '2', name: 'fiction' }
          ]
        }}
      /><Note
      data={{
        title: 'Interstellar',
        text: 'a movie....',
        tags: [
          { id: '1', name: 'drama' },
          { id: '2', name: 'fiction' }
        ]
      }}
    />
      </main>
    </Container>
  )
}
