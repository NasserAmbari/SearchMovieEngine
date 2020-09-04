import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
   width:22rem;
   overflow:hidden;
   @media (max-width:28.75em){
      &{
         width:100%;
      }
   }
`;

const ContainerImage = styled.div`
   width:175px;
   height:265px;
`;

const Image = styled.img`
   width:100%;
   object-fit:cover;
   border-radius:1rem;
   margin-bottom:0.8rem;
`;

const Title = styled.p`
   font-size:1.6rem;
   background-color:transparent;
`;

const ContainerTitle = styled.div`
   width:100%;
   height:26rem;
   display:flex;
   align-items:center;
   justify-content:center;
`;

class Movie extends Component{
   constructor(props) {
      super(props);
   }

   render() {

      if(this.props.img){
         return(
         <Container>
            <Image src={process.env.REACT_APP_BASE_IMAGE_URL+this.props.img}/> 
            <Title>{this.props.title}</Title>
         </Container>
         )
      }

      return null;
   }
}

export default Movie;