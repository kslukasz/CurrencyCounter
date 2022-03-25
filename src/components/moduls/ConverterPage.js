import React, {useState} from 'react';
import './ConverterPage.css'
function ConverterPage(props) {
  const [input, setInput] = useState(""); 
  const [select, setSelect] = useState({first:"",second:""});
  

  const option = ()=>{
    const inputOption = props.currency.rates.map((element)=>{
      return(
        <option key={element.code} value={element.mid}>{element.currency}</option>
      )
    }); 
    return inputOption
  }
  const handleSelect = (event, nameSelect) => {    
    const copySelect={...select};
    copySelect[nameSelect]=event.target.value;    
    setSelect(copySelect);
    console.log(select.first);
    
  }

  const handleInput = (event) => {
    setInput(event.target.value)
  }
  
  // console.log(<select>{option()}</select>);

  return ( 
    <>
    <input type="text" value={input} onChange={handleInput} />
    <select value={select.first} onChange={(event)=>handleSelect(event, "first")}>{option()}</select>
    <input type="text" /> <select value={select} onChange={(event)=>handleSelect(event, "first")}>{option()}</select>
    </>
   );
}

export default ConverterPage;