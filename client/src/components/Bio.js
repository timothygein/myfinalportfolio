import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'


const FlexContainer = styled.div`
display: ;
justify-content: space-between; 
align: center;

padding: 15px;
`
const ImgWrapper = styled.img`
width: 35%;
margin: 15px;
height: 60%;

`

class Bio extends Component {
    render() {
        return (
            <div>
            <Header />
             <FlexContainer>
                 <h1>Bio</h1>
                  <p>My name is James Peterson and I am a full-stack Web Application Developer currently living in Atlanta, Georgia. I have a Web Development certification from GA Assembly in Atlanta. In my spare time you can find me editing videos using Adobe Premeire or editing music using Adobe Audition.
                   My only passion in life is to create and I think that without the ability and freedom to create any piece of art, one would go insane. 
                   "If you want to be creative don’t worry about style or what is trending. Focus on what you want to achieve and do it. Don’t worry about the veneer and packaging till after." - Vincent Van Gogh</p>
                  <h2>Language</h2>
    <ImgWrapper src="https://i.imgur.com/KNhmwJD.jpg"/>  
       </FlexContainer> 
            </div>
        );
    }
}

export default Bio;