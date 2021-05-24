import styled from 'styled-components';
import { Menu as MenuIcon } from '@styled-icons/boxicons-regular';


export const Container = styled.div`
    display: none;
    @media(max-width: 1200px){
        width: 100%;
        height: 70px;

        background: var(--primary);
    
        position: fixed;
        bottom: 0;
    
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;
export const Valorant = styled.img`
    margin-left: 30px;
`;
export const IconWrapper = styled.div`
    width: 30px;
    height: 30px;

    background: white;
    border-radius: 50%;

    margin-right: 30px;
`;
export const MenuICon = styled(MenuIcon)`
    fill: var(--primary);
`;