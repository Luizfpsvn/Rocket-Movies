import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.4rem 0 4rem;

  > h2 {
    font-weight: 500;
    font-size: 3.6rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    padding-bottom: 1.6rem;
    margin-bottom: 2.8rem;
    text-align: left;
  }
`;
