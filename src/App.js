import React from 'react';
import { Nav, Section } from './components';
import data from "./data/data.json";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 0.5%;
  padding: 0 7.5% 0 7.5%;
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
