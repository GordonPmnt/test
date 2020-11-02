import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 2px 0px 0px rgba(235,235,235,0.5);
    height: 145px;
    margin-bottom: 25px;
    padding: 20px;
`

const Name = styled.h3`
    margin: 0;
    font-weight: 500;
    color: rgb(75, 75, 75);
`

const Text = styled.p`
    color: rgb(200, 200, 200);
    line-height: 1.8;
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Pseudo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ color }) => color};
    color: white;
    border-radius: 100%;
    padding: 5px;
    font-weight: bold;
    font-size: 12px;
    height: 20px;
    width: 20px;
`

const Duedate = styled.p`
    color: ${({ color }) => color};
    font-size: 15px;
    font-weight: 500;
`

const Card = ({ name, text, pseudo, duedate }) => {
    return (
        <Container>
            <div>
                <Name>{name}</Name>
                <Text>{text}</Text>
            </div>
            <Footer>
                <Pseudo color={pseudo.color}>{pseudo.label}</Pseudo>
                <Duedate color={duedate.color}>{duedate.text}</Duedate>
            </Footer>
        </Container>
    )
}

export default Card;