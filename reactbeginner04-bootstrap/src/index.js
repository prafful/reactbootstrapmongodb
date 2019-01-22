import React from 'react';
import ReactDOM  from 'react-dom'
import NavBar from './navbar/navbar';
import CarouselComponent from './carousel/carousel';
import FooterComponent from './footer/footer';
import FreindComponent from './friends/friend';

ReactDOM.render(
                <span>
                    <NavBar></NavBar>
                    <CarouselComponent></CarouselComponent>
                    <FreindComponent></FreindComponent>
                    <FooterComponent></FooterComponent>
                </span>
                , 
                document.getElementById('root'))