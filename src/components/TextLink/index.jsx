import { FiArrowLeft } from 'react-icons/fi'
import { Container } from './style'

export function TextLink({ icon: Icon,title, ...rest }) {
  return (
    <Container>
      <a {...rest}>
      {Icon && <Icon size={20} />} { title }
      </a>
    </Container>
  )
}
