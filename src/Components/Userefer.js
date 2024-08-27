import React, { useRef } from 'react';
import './Userefer.css'
import Header from './Header';
import Main from './Main';
import Content from './Content';

const Userefer = () => {
    const buttons = [{id:1}, {id:2}, {id:3}];
    // const [view,setView]  = useState();
    const inputRef = useRef([]);

    const handleChange = (index) => {
     inputRef.current[index]= index;
        
    }
   
    return (
          <div>
            {/* {view} */}
            {buttons.map((btn)=><button  onClick={() => {handleChange(index)}} index={buttons.id}>{btn}</button>)}
           
          </div>
    )
}
export default Userefer ;
