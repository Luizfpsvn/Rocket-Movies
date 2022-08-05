import { Container } from './style'

export function Button( { title, loading, ...rest}) {
  return (
    <Container 
    type = "button"
    disabled = { loading }
    >
      { loading ? "loading" : title }
    </Container>
  )
}