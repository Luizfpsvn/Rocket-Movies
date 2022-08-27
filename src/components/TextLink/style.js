import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin: 4.8rem 0 2.4rem;

  > a {
    color: ${({ theme }) => theme.COLORS.PINK};
    display: flex;
    flex-direction: row;
    align-items: center;

    > svg {
      margin-right: 0.8rem;
    }
  }
`;
