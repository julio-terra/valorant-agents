import styled from 'styled-components';
import background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: row;
    align-items: center;

    background: var(--secondary) url(${background}) center;

    @media(max-width: 1200px){
        height: 100vh;
    }
`;
export const Tittle = styled.h1`
    color: transparent;
    -webkit-text-stroke: 2px white;
    height: 0;
    width: 0;
    position: relative;
    left: 280px;
    top: -250px;

    transform: rotate(90deg);
    font-size: 120px;
    font-weight: bold;
    background-color: black;

    @media(max-width: 800px){
        left: 10%;
        top: -370px;

        font-size: calc(60px + 2vw);
        transform: rotate(0);
        
    }
`;
export const ChampionSection = styled.div`
    display: flex;
    @media(max-width: 1300px){
    flex-direction: row-reverse;

    }
    margin-left: 330px;
    @media(max-width: 800px){
        margin: 0 auto;
    }
`;
export const Champion = styled.div`
    border-top-left-radius: 8px;
    width: 250px;
    height: 500px;
    
    
    background: var(--primary);
    > h1{
        color: transparent;
        -webkit-text-stroke: 1.3px white;
        font-weight: bold;
    }
    :hover{
        padding-bottom: 40px;
    }
`;
export const Avatar = styled.img`

`;