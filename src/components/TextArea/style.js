import styled from 'styled-components';

export const Container = styled.textarea`
  width: 100%;
  height: 27.4rem;

  border: none;
  resize: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  color: ${({ theme }) => theme.COLORS.WHITE};

  padding: 1.9rem 1.6rem;

  margin: 4rem 0;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY};
  }
`;
