import React, { Component } from "react";
import { GlobalStyle, theme } from "./styles";
import { Outbox, About, Title } from "./components";

class App extends Component {
  render() {
    return (
      <Outbox bgColor={theme.colors.mainColor}>
        <GlobalStyle />
        <Title text="Olá mundo!" />
        <About name="Racchel" age="19" studying="ReactJS" />
      </Outbox>
    );
  }
}

export default App;
