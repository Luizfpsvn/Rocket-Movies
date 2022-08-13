import styled from 'styled-components';
import backgroundImage from '../../assets/background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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
    margin: 4.8rem auto 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    svg {
      margin-right: 0.8rem;
    }
  }
`;

export const Background = styled.div`
  flex: 1;

  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;
