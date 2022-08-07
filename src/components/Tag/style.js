import styled from 'styled-components'

export const Container = styled.span`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;
  border-radius: 0.8rem;
`
