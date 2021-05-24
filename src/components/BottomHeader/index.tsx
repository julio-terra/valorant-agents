import React from 'react';

import valorant from '../../assets/logo.png';

import { Container, Valorant, IconWrapper, MenuICon } from './styles';

const BottomHeader: React.FC = () => {
  return (
      <Container>
            <Valorant src={valorant}/>

            <IconWrapper>
                <MenuICon />
            </IconWrapper>
      </Container>
  )
}

export default BottomHeader;