import { Container } from './styles';

import { FiPlus } from 'react-icons/fi';

import { Note } from '../../components/Note';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

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
            description:
              'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand.',
            tags: [
              { id: '1', name: 'drama' },
              { id: '2', name: 'fiction' },
              { id: '3', name: 'Family' }
            ]
          }}
        />

        <Note
          data={{
            title: "Harry Potter and the Philosopher's Stone",
            description:
              "Harry is an orphan living with his abusive aunt and uncle, Vernon and Petunia Dursley and their bullying son, Dudley. On his eleventh birthday, Harry discovers he is a wizard when Rubeus Hagrid delivers him an acceptance letter to Hogwarts School of Witchcraft and Wizardry. He learns that his parents, James and Lily Potter, were murdered by a powerful dark wizard, Lord Voldemort. Harry, instead, survived Voldemort's killing curse, which ended up bouncing back and apparently killing Voldemort, leaving a lightning bolt shaped scar on his forehead. Thus Harry became famous in the wizarding world.",
            tags: [
              { id: '1', name: 'Teen' },
              { id: '2', name: 'Fantasy' },
              { id: '3', name: 'Adventure' }
            ]
          }}
        />
      </main>
    </Container>
  );
}
