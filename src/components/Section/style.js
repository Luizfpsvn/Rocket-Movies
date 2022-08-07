import styled from 'styled-components'

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2 {
    font-weight: 400;
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;
    text-align: left;
  }
`
