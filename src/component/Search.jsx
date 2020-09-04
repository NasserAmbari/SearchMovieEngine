import React, {Component} from 'react';
import Movie from './Movie';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Form = styled.form`
   display:block;
   position:absolute;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   transition: all .3s ease-in-out;
   text-align:center;
   background-color:transparent;
`;

const Title = styled.p`
   font-size:3rem;
   letter-spacing:2px;
   transition: all .3s ease-in-out;
   background-color:transparent;
   @media (max-width:28.75em){
      font-size:2.5rem;
   }
`;

const SearchField = styled.input`
   width: 5rem;
   height: 5rem;
   padding:2rem;
   border: 2px solid white;
   border-radius:20rem; 
   box-sizing: border-box;
   font-family: Helvetica;
   font-size: 15px;
   color: white;
   background: transparent;
   outline-width: 0px;
   margin-bottom:2.4rem;
   transition: all .3s ease-in-out;
   letter-spacing:1px;
`;

const ContainerMovie = styled.div`
   width:90%;
   max-width:1024px; 
   margin: 14rem auto 7rem auto;
   display:grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;
   grid-column-gap: 2.4rem;
   grid-row-gap: 3.6rem;
   justify-items: center;

   @media (max-width:61.25em){
      &{
         grid-template-columns: 1fr 1fr 1fr;
      }
   }

   @media (max-width:28.75em){
      &{
         grid-template-columns: 1fr 1fr;
         margin: 12rem auto 0 auto;
      }
   }
`;

const Empty = styled.p`
   width:90%;
   max-width:1024px;
   margin:0 auto;
   font-size:2.4rem;
   display:block;
   text-align:center;
   grid-column: 1/-1;
`;


class Search extends Component{
   constructor(props){
      super(props);

      this.state = {
         search   : "",
         isSearch : false,
         isFocus  : false,
         isSubmit : false,
         style    : {},
         results   : []
      }

      this.focusedSearchfield = this.focusedSearchfield.bind(this);
      this.bluredSearchfield = this.bluredSearchfield.bind(this);
      this.updateText = this.updateText.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
   }

   focusedSearchfield(){
      this.setState({isFocus:true});
   }

   bluredSearchfield(){
      if(this.state.search === ""){
         this.setState({isFocus:false});
         return;
      }
      this.setState({isFocus:true});
   }

   async updateText(evt){
      await this.setState({search : evt.target.value})
   }

   onSubmit(evt){
      this.setState({ isSubmit : true });
      evt.preventDefault();

      fetch(`https://api.themoviedb.org/4/search/movie?&api_key=${process.env.REACT_APP_KEY}&query=${this.state.search}`)
         .then(res=>res.json())
         .then(data => {
            this.setState({results : data.results});
         })
         .catch(err=>console.log(err));
   }

   render() {
      return(
         <motion.div 
            initial={{ opacity:0 }}
            animate={{ opacity:1 }}
            exit={{ opacity:0 }}>
            <Form 
               onSubmit = {this.onSubmit}
               style    = {this.state.isSubmit ? { top : "25%" }:null} >

                  <SearchField 
                     onFocus  = {this.focusedSearchfield}
                     onBlur   = {this.bluredSearchfield}
                     onChange = {this.updateText}
                     style    = {this.state.isFocus ? { width:"24rem" } : { width:"5rem" }} />
                  <Title style = {this.state.isSubmit ? { opacity: "0" } : { opacity: "1"}} >Search Here</Title>
            </Form>

            <ContainerMovie>
               {
                  this.state.results ?
                  this.state.results.map((elm,idx) => {
                     console.log(elm.poster_path);
                     return <Movie key={idx} img={elm.poster_path} title={elm.original_title} />
                  })
                  :
                  <Empty>Please Input Something :(</Empty>
               }
            </ContainerMovie>
         </motion.div>
      )
   }
}

export default Search;