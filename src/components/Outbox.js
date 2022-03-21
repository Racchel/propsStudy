import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
`;

const OutBox = ({ children, bgColor }) => {
  return <Container bgColor={bgColor}> {children} </Container>;
};

export default OutBox;
