import React, {Component} from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContainerNotFound = styled.div`
   position:fixed;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   font-size:5rem;
`;

class PageNotFound extends Component{
   constructor(props) {
      super(props);
   }

   render() {
      return(
         <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}
         >
         <ContainerNotFound>
            Page Not Found
         </ContainerNotFound>
         </motion.div>
      )
   }
}

export default PageNotFound;