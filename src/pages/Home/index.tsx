import React from 'react';
import avatar from '../../assets/logo.png';
import ChampionData from '../../components/ChampionData';


import Header from '../../components/Header';
import BottomHeader from '../../components/BottomHeader';


import { Container, Wrapper, Tittle, ChampSection, Champion } from './styles';

const Home: React.FC = () => {
  return (
      <Container>
            <Header />

            <Wrapper>
                <Tittle>AGENTS</Tittle>
                <ChampSection>
                {ChampionData.map(e =>(
                    <Champion>
                        <h1>{e.name}</h1>
                        <img width="200px" src={e.avatar} alt="" />
                    </Champion>
                ))}
                </ChampSection>
            </Wrapper>
            <BottomHeader />
      </Container>
  );
}

export default Home;