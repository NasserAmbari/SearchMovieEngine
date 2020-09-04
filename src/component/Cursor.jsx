import React, {Component} from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const CustomCursor = styled.div`
   width: 60px;
   height: 60px;
   border: 2px solid #fefefe;
   border-radius: 100%;
   position: fixed;
   transform: translate(-50%, -50%);
   pointer-events: none;
   z-index: 9999;
   mix-blend-mode: difference;
   transition: all 150ms ease;
   transition-property:  opacity, background-color, transform, mix-blend-mode;
   

   &.--hidden{
      opacity: 0;
   }

   &.--clicked {
      transform: translate(-50%, -50%) scale(0.8);
      background-color: #fefefe;
   }

   &.--link-hovered {
      transform: translate(-50%, -50%) scale(1.25);
      background-color: #fefefe;
   }
`;

class Cursor extends Component{
   constructor(props) {
      super(props);

      this.state={
         position : {x : 0,y : 0},
         hidden   : false,
         clicked  : false,
         hovered  : false,
         cursor   : "",
      }

      this.onMouseMove = this.onMouseMove.bind(this);
      this.onMouseEnter = this.onMouseEnter.bind(this);
      this.onMouseLeave = this.onMouseLeave.bind(this);
      this.onMouseUp = this.onMouseUp.bind(this);
      this.onMouseDown = this.onMouseDown.bind(this);
   }

   updateClasses(){
      this.setState( 
         {
            cursor : classNames( 'cursor', { 
                                       '--hidden'  : this.state.hidden, 
                                       '--clicked' : this.state.clicked,
                                       '--link-hovered' : this.state.hovered
                                    }),
         },
      );
   } 

   onMouseMove (e){
      this.setState((state, props) => ({
         position : {
            x: e.clientX,
            y: e.clientY
         }
      }));
   };

   onMouseLeave (){
      this.setState((state, props) => ({ hidden : true}));
      this.updateClasses();
   };
   
   onMouseEnter (){
      this.setState((state, props) => ({ hidden : false}));
      this.updateClasses();
   };

   onMouseUp (){
      this.setState((state, props) => ({ clicked : false}));
      this.updateClasses();
      
   };

   onMouseDown (){
      this.setState((state, props) => ({ clicked : true}));
      this.updateClasses();
   };

   addEventListeners (){
      document.addEventListener("mousemove", this.onMouseMove);
      document.addEventListener("mouseenter", this.onMouseEnter);
      document.addEventListener("mouseleave", this.onMouseLeave);
      document.addEventListener("mousedown",this.onMouseDown);
      document.addEventListener("mouseup", this.onMouseUp);
   };

   removeEventListeners (){   
      document.removeEventListener("mousemove", this.onMouseMove);
      document.removeEventListener("mouseenter", this.onMouseEnter);
      document.removeEventListener("mouseleave", this.onMouseLeave);
      document.removeEventListener("mousedown", this.onMouseDown);
      document.removeEventListener("mouseup", this.onMouseUp);
   };

   handleLinkHoverEvents (){
      document.querySelectorAll("input,a").forEach(el => {
         el.addEventListener("mouseover", () => {
            this.setState((state, props) => ({ hovered : true}));
            this.updateClasses();
         });
         el.addEventListener("mouseout", () => {
            this.setState((state, props) => ({ hovered : false}));
            this.updateClasses();
         });
      });

   };

   componentDidMount() {
      this.addEventListeners();
      this.handleLinkHoverEvents(); 
   }

   componentWillUnmount() {
      this.removeEventListeners();
   }


   isMobile() {
      const ua = navigator.userAgent;
      return /Android|Mobi/i.test(ua);
   };


   render() {
      if(typeof navigator !== 'undefined' && this.isMobile()){
         return null;
      }
      else{
         return(
            <React.Fragment>
            <CustomCursor style = {
               { left: `${this.state.position.x}px`, top: `${this.state.position.y}px`}
            } 
            className={this.state.cursor}/>
            </React.Fragment>
         )
      }
   }
}

export default Cursor;