import React, {Component} from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const Container = styled.section`
   max-width:1024px;
   width:90%;
   padding:0 2rem;
   margin:0 auto;
   height:80vh;
   position:relative;
`;

const InnerContainer = styled.div`
   position:absolute;
   top: 50%;
   transform: translateY(-50%);
`

const Title = styled.h1`
   font-size: 8rem;
   margin-bottom: 4rem;

   @media (max-width:28.75em){
      font-size: 6rem;
   }
`;

const TextContent = styled.p`
   font-size:3.6rem;
   width:50%;
   margin-bottom: 4rem;

   @media (max-width:61.25em){
      width: 100%;
   }

   @media (max-width:28.75em){
      font-size: 2.4rem;
   }
`;

const ContainerSearchButton = styled.div`
   display:inline-block;
   overflow:hidden;
`;

const ContainerInnerSearch = styled.div`
   position:relative;
   display:flex;
   align-items:center;
   left:-8rem;
   transition:0.2s ease-in-out;
   pointer:cursor;

   &:hover{
      left:0rem;
   }
`;

const LineDecoration = styled.div`
   width:6rem;
   height:2px;
   background-color:white;
`;

const SearchButton = styled.div`
   font-size:2.4rem;
   left:2px;
   padding-left:2rem;
`;

class Hero extends Component{
   render() {
      return(
         <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
         >
            <Container>
               <InnerContainer>
                  <Title>
                     Search ur Movie
                  </Title>

                  <TextContent>
                     We are the search movie engine who's gonna find ur lovely movie.
                  </TextContent>

                  <Link to="/search">
                     <ContainerSearchButton >
                        <ContainerInnerSearch>
                           <LineDecoration />
                           <SearchButton>
                              Search Now
                           </SearchButton>
                        </ContainerInnerSearch>
                     </ContainerSearchButton>
                  </Link>
                  
               </InnerContainer>
            </Container>
         </motion.div>
      )
   }
}

export default Hero;