import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 3.2rem;
  margin-bottom: 2.4rem;

  background: #FF859B0D;
  border: none;
  border-radius: 1.6rem;
  text-align: left;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: 700;
    font-size: 2.4rem;
    margin-bottom: 1.5rem;
  }

  > p {
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`
