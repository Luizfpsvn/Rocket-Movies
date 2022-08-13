import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin-bottom: 2rem;

  > main {
    overflow-y: auto;
    padding: 0 12.3rem;

    > a {
    margin: 4.8rem auto 2.4rem;
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    svg {
      margin-right: 0.8rem;
    }
  }

    > .inputs {
      display: flex;
      gap: 4rem;
    }

    > .notes {
      width: 100%;
      height: 8.8rem;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 2.4rem;

      padding: 1.6rem;

      background-color: #0d0c0f;
    }
  }

  > footer {
    width: 100%;

    display: flex;
    gap: 4rem;

    padding: 2rem 12.3rem;

    > button:first-child {
      color: ${({theme}) => theme.COLORS.PINK};
      background-color: #0d0c0f;
    }
  }
`;
