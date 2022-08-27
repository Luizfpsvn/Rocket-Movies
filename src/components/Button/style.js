import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 5.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  margin-top: 2.4rem;
  padding: 1.6rem;

  font-weight: 500;

  border: none;
  border-radius: 1rem;

  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};

  &:disabled {
    opacity: 0.5;
  }
`;
