import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;
  padding: 1.6rem;

  font-weight: 500;

  border: none;
  border-radius: 1rem;

  background-color: ${ ( { theme } ) => theme.COLORS.PINK};
  color: ${ ( { theme } ) => theme.COLORS.BACKGROUND};

  &:disabled {
    opacity: 0.5;
  }
`
