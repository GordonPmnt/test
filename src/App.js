import React from 'react';
import { Nav, Section } from './components';
import data from "./data/data.json";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 2.5%;
  flex-direction: row;
  justify-content: space-evenly;
`

const App = () => {
  return (
    <>
      <Nav />
      <Container>
        {
          data.map(section => <Section key={section.id} title={section.title} cards={section.cards} />)
        }
      </Container>
    </>
  );
}

export default App;
