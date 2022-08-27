import styled from "styled-components";

export const Container = styled.section`
  margin: 2rem 0;

  > h2 {
    font-weight: 500;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding-bottom: 1.6rem;
    margin-bottom: 1rem;
    text-align: left;
  }
`;
