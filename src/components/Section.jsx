import React from 'react';
import styled from "styled-components";
import { Card } from './';

const Container = styled.section`
`

const Title = styled.h2``

const Section = ({ title, cards }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {
                cards.map(card => <Card key={card.id} name={card.name} />)
            }
        </Container>
    )
}

export default Section;