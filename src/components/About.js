import styled from "styled-components";
import { Card } from ".";

const About = ({ name, age, studying }) => {
  return (
    <>
      <Card
        imageUrl="https://iloveflores.com/wp-content/uploads/2015/10/flores-bonitas.jpg"
        description={`Meu nome é ${name}, tenho ${age} e estou estudando ${studying}!`}
      />
    </>
  );
};

export default About;
