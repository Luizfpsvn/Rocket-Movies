import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  > .homeHeader {
    padding: 0 12.4rem;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    > button {
      width: 20.7rem;
      height: 4.8rem;
    }
  }

  > main {
    width: 100%;
    height: 100vh;
    padding: 0 12.4rem;
    padding-bottom: 25rem;
  }
`;
