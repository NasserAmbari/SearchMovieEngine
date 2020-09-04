import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

const Nav = styled.nav`
   max-width:1024px;
   width: 90%;
   display: flex;
   margin: 0 auto;
   justify-content: space-between;
   padding: 2rem;
   color: white;
`;

const ContainerLogo = styled.div`
   display:flex;
   align-items:center;
`

const ContainerInnerLogo = styled.div`
   font-size:2.4rem;
`;


const ContainerTitleLogo = styled.span`
   padding-left:1.2rem;
   font-size:2rem
`;


const NavLinks = styled.ul`

`;

const Links = styled.li`
   
   display:inline;
   font-size:2rem;
`

class Navbar extends Component{
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <React.Fragment>
               <Nav>
                  <Link to="/">
                     <ContainerLogo>
                        <ContainerInnerLogo>
                           <FontAwesomeIcon icon={faFilm} />
                        </ContainerInnerLogo>
                        <ContainerTitleLogo>
                           Re:Movie
                        </ContainerTitleLogo>
                     </ContainerLogo>
                  </Link>

                  <Link to="/search">
                     <NavLinks>
                        <Links>
                           <ContainerInnerLogo>
                              <FontAwesomeIcon icon={faSearch} />
                           </ContainerInnerLogo>
                        </Links>
                     </NavLinks>
                  </Link>
               </Nav>
         </React.Fragment>
      )
   }
}

export default Navbar;