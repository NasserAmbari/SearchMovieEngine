import React, {Component} from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
   max-width:1024px;
   width:90%;
   position:fixed;
   bottom:0;
   left:50%;
   transform:translateX(-50%);
   margin:0 auto;
   padding: 2rem 2rem;
   font-size:1.2rem;
`;

const Seperator = styled.div`
   max-width:1024px;
   width:90%;
   height:6rem;
`;

class Footer extends Component{
   render() {
      return(
         <>
         <Seperator />
            <Foot>
               &copy; Re:Movie
            </Foot>
         </>
      )
   }
}

export default Footer;