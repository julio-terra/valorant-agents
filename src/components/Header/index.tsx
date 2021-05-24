import React from 'react';
import { Container, LogoRiot, Br,LogoValorant, SideRight, SideLeft, Avatar } from './styles';

import Riot from '../../assets/riotgames.png';
import Valorant from '../../assets/logo.png';


const Header: React.FC = () => {
  return (
      <Container>
        <SideLeft>
            <LogoRiot src={Riot} />
            <Br />
            <LogoValorant src={Valorant} />

            <span>GAME</span>
            <span>CHAMPIONS</span>
            <span>NEWS</span>
            <span>NOTES</span>
            <span>DISCOVER</span>
            <span>ESPORTS</span>
            <span>UNIVERSE</span>
            <span>SHOP</span>
            <span>SUPPORT</span>
        </SideLeft>
        <SideRight>
            <Avatar />
            <span>cSharpe</span>
        </SideRight>
      </Container>
  );
}

export default Header;