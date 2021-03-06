import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import Header from './Header'
import { SocialIcon } from 'react-social-icons';


const FlexContainer = styled.div`
width: 50%;
color: white;
font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
`
const ImgWrapper = styled.img`
width: 25%;
height: 25%;
float: bottom;
`

const Contact = styled.div`
display: flex;
justify-content: space-between;
width: 25%;
`

const Wrapper = styled.div`
display: block-flex;
justify-content: space-between;
align: center;
margin-left: 2%;
`

const Bar = styled.div`

@media screen and (max-width:450px) {
    .h4 {
        font-size: 1.25rem
    }
    .button {
        font-size: 1.20rem
    }
   }

`

class Bio extends Component {
    render() {
        return (
            <Bar>
            <Header />
            <Wrapper>
             <FlexContainer>
                 <h1>James Peterson</h1>
                 <ul>
                  <li>Full-Stack Web Developer with a diverse background in coding Adobe software such as Premiere and Audition. "If you want to be creative don’t worry about style or what is trending. Focus on what you want to achieve and do it. Don’t worry about the veneer and packaging till after." - Vincent Van Gogh</li>
                 </ul>
                  <h1>Languages/Experience</h1>
                  <ul>
                  <li>My primary choice for development is React on Rails. I have experience in both Front and Back-end development, and also have efficient experience with 
                      Javascript, jQuery, MondoDB, Node ,SQL and Postgresql, Ajax ,HTML5, and CSS3.</li>
                   </ul>
                <h1>Technologies Used for Portfolio</h1>
                  <ul>
                      <li>HTML5, CSS, Ruby, React, and Heroku (used to deploy the finalized working app)</li>
                  </ul>
    <ImgWrapper src="https://i.imgur.com/l8RnQp2.jpg"/>  

    <h3>Contact Me:</h3>
    <Contact>
    <SocialIcon url="https://www.linkedin.com/in/james-peterson-a6777814a/" />
    <br />
    <br />
    <SocialIcon url="https://github.com/jgpeterson" />
    <br />
    <br />
     </Contact>
       
       </FlexContainer> 
            </Wrapper>
            </Bar>
        );
    }
}

export default Bio;