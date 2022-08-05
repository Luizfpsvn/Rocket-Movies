import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 4.8rem;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    flex-direction: row;
    align-items: center;

    > svg {
      margin-right: 0.8rem;
    }
  }
`
