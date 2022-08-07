import { Container } from './style'
import { Tag } from '../Tag'

export function Note({ data, ...rest }) {
  return (
    <Container>
      <h1>{data.title}</h1>

      <p>{data.text}</p>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/> )
          }
        </footer>
      }

    </Container>
  )
}
