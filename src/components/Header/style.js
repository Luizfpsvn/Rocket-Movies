import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  width: 100%;
  height: 11.6rem;

  border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6.4rem;

  padding: 0 8rem;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};

    h1 {
      font-weight: 700;
      font-size: 2.4rem;
    }
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.9rem;

    a {
      color: ${({ theme }) => theme.COLORS.PINK};
      white-space: nowrap;

      strong {
        font-weight: 700;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    button {
      border: none;
      background: none;

      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 6.4rem;
    height: 6.4rem;
    border: 2px solid #3e3b47;
    border-radius: 50%;
  }
`;
