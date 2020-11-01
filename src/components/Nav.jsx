import React from 'react';
import  styled from "styled-components";
import logo from '../ressources/logo.svg';
import find from '../ressources/find.svg';
import profile from '../ressources/profile.jpg';

const Bar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 5px 5px rgba(225,225,225,0.5);
`

const Logo = styled.img`
    margin-left: 40px;
    height: 50px;
`

const Icon = styled.img`
    margin-left: 20px;
    height: 40px;
`

const Separator = styled.div`
    border-left: 3.5px solid rgb(245, 245, 245);
    height: 45px;
    margin-left: 40px;
`

const Search = styled.input`
    font-size: 20px;
    border: none;
    ::placeholder {
        color: rgb(200, 200, 200);
    }
`

const Avatar = styled.img`
    border-radius: 100%;
    height: 35px;
`

const FullName = styled.p`
    color: rgb(100, 100, 100);
    margin-left: 20px;
    width: 140px;
    font-weight: 500;
`

const Searchbar = styled.div`
    display: flex;
    align-items: center;
`

const User = styled.a`
    display: flex;
    align-items: center;
    margin-right: 30px;
    text-decoration: none;
`

const Nav = () => {
    return (
        <Bar>
            <Searchbar>
                <Logo src={logo} alt="logo" />
                <Separator />
                <Icon src={find} alt="search icon" />
                <Search type="search" placeholder={"Search for ..."} name="search" />
            </Searchbar>
            <User href="https://www.linkedin.com/in/gordon-preumont-fullstack/">
                <Avatar src={profile} alt="profile picture" />
                <FullName>Gordon Preumont</FullName>
            </User>
        </Bar>
    )
}

export default Nav;