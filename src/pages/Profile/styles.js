import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;
    height: 14.4rem;

    padding: 0rem 14.6rem;
    background: ${({ theme }) => theme.COLORS.PINK_BACKGROUND};

    display: flex;
    align-items: center;

    > a {
      display: flex;

      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 1rem;
      }

      span {
        color: ${({ theme }) => theme.COLORS.PINK};
      }
    }
  }
`;

export const Form = styled.form`
  max-width: 34rem;
  margin: 0 auto;
  padding-bottom: 2rem;

  align-items: center;
  justify-content: center;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }
`;

export const Avatar = styled.div`
  position: relative;
  width: 18.6rem;
  height: 18.6rem;

  margin: -8.5rem auto 3.2rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.6rem;
    right: 0.6rem;

    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    cursor: pointer;

    svg {
      width: 2rem;
      height: 2rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }

    input {
      display: none;
    }
  }
`;
