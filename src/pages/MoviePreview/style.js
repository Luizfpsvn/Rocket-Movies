import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  padding: 0 12.3rem;
  margin: 2rem auto;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  > header {
    margin: 1rem 0;
    display: flex;
    gap: 1.9rem;
    align-items: baseline;
    justify-content: flex-start;

    h1 {
      text-align: flex-start;
      font-weight: 500;
      font-size: 3.6rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.8rem;
    margin-bottom: 2rem;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  p:last-child {
    margin-top: 2rem;
    font-size: 1.4rem;
  }
`;
