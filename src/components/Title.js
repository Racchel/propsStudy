import styled from "styled-components";

const Content = styled.h1`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Title = ({ text }) => {
  return <Content>{text}</Content>;
};

export default Title;
