import React, { useState } from 'react';
import './Userefer.css'
import Header from './Header';
import Main from './Main';
import Content from './Content';

const Userefer = () => {
    const buttons = [
        {id:1 , component : <Header />}, 
        {id:2 , component : <Content /> },
        {id:3, component : <Main />}];
            
    const [view,setView]  = useState();

    const handleChange = (index) => {
     setView(buttons[index].component);
    }
   
    return (
          <div>
            {view}
            {buttons.map((btn, index)=><button  onClick={() => {handleChange(index)}} key={btn.id}>Button {btn.id}</button>)}
           
          </div>
    )
}
export default Userefer ;
