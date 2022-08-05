import styled from 'styled-components'
import backgroundImage from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: start;


  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > p {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > a {
    margin-top: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: .8rem;
    
    > svg {
      font-size: 2rem;
    }
  }
`

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`
