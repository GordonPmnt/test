import React from 'react';
import styled from "styled-components";
import { Card } from './';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 30px;
`

const Title = styled.h2`
    font-size: 30px;
    font-weight: 500;
`

const Section = ({ title, cards }) => {
    return (
        <Container>
            <Title>{title}</Title>
            {
                cards.map(card => 
                    <Card 
                        key={card.id} 
                        name={card.name} 
                        text={card.text}
                        pseudo={card.pseudo}
                    />
                )
            }
        </Container>
    )
}

export default Section;