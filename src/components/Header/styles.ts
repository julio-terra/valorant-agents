import styled from 'styled-components';

export const Container = styled.div`
    display: none;

    @media(min-width: 1200px){
        width: 100%;
        height: 80px;
    
        background-color: var(--primary);

        display: flex;
        align-items: center;
    }
`;
export const LogoRiot = styled.img`
    width: 50px;
`;
export const Br = styled.div`
    width: 2px;
    height: 30px;
    background: var(--white);
`;
export const LogoValorant = styled.img`
    width: 30px;
`;

export const SideLeft = styled.div`
    width: 65%;
    height: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    
    margin-left: 30px;
    > span{
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;

        :hover{
            color: var(--secondary);    
        }
    }
`;

export const SideRight = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    margin: 10px 0 0 20%;
    > span{
        font-size: 15px;
    }
`;
export const Avatar = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 15px;

    background: var(--gray);

    border-radius: 50%;
`;