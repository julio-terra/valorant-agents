import React, { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Popup from 'reactjs-popup';


import Header from '../../components/Header';
import BottomHeader from '../../components/BottomHeader';
import ChampionData from '../../components/ChampionData';


import {Container,
        Wrapper,
        Tittle,
        ChampionSection,
        Champion,
        Avatar,
        } from './styles';



const Home: React.FC = () => {


    const [details, setDetails] = useState<Boolean>(false);
    const detail = () => {
        setDetails(!details)
    }
  return (
      <Container>
            <Header />

            <Wrapper>
                <Tittle>AGENTS</Tittle>
                <ChampionSection style={{overflow: 'hidden'}}>
                    <Carousel
                    axis="horizontal"
                    infiniteLoop={true}
                    width="1000px"
                    showStatus={false}
                    showIndicators={false}
                    autoPlay={true}
                    centerMode={true}
                    centerSlidePercentage={27}
                    >
                {ChampionData.map(e =>(
                    <>
                    <Champion
                    onClick={detail}
                    >
                        <h1>{e.name}</h1>
                        <Avatar src={e.avatar}/>
                    </Champion>
                    </>
                ))}
                </Carousel>
                </ChampionSection>
            </Wrapper>
            <BottomHeader />
      </Container>
  );
}

export default Home;