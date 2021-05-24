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
    left: 200px;
    top: -210px;

    transform: rotate(90deg);
    font-size: 120px;
    font-weight: bold;
    background-color: black;

    @media(max-width: 1200px){
        position: relative;
        left: 30px;
        top: -350px;

        font-size: calc(60px + 2vw);
        transform: rotate(0);
    }
`;
export const ChampSection = styled.div`
    width: 100%;
    height: 450px;

    
    display: flex;
    flex-direction: row;

    margin-left: 260px;
    overflow-x:auto;
    overflow-y: hidden;
    scroll-snap-type:x mandatory ;

    @media(max-width: 1200px){
        margin-left: 10%;
        margin-top: -60px;
    }
`;
export const Champion = styled.div`
    width: 220px;
    height: 100%;
    
    margin-right: 10px;
    background: var(--primary);
    border-top-left-radius: 8px;

    scroll-snap-align: start;
    -webkit-overflow-scrolling: touch;

    @media(max-width: 1200px){
        width: 200px;
    }
`;