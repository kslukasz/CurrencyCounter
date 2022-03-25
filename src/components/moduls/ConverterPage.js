import React, { useState } from 'react';
import './ConverterPage.css'
function ConverterPage(props) {
  const date=props.currency.rates;  
  const [input, setInput] = useState({ first: "0.00", second: "0.00" });
  const [select, setSelect] = useState({ first: date[0].mid, second: date[8].mid });


  const option = () => {
    const inputOption = props.currency.rates.map((element) => {
      return (
        <option key={element.code} value={element.mid}>{element.currency}</option>
      )
    });
    return inputOption
  }
  const handleSelect = (event, nameSelect) => {
    const copyInput = { ...input }
    const copySelect = { ...select };
    copySelect[nameSelect] = event.target.value;
    let counter = 0;
    counter = copyInput.first * (copySelect.first / copySelect.second);
    // console.log(copyInput[result])
    copyInput.second = counter.toFixed(2);
    setInput(copyInput);
    setSelect(copySelect);
  }

  const handleInput = (event, nameInput , result) => {
    const copyInput = { ...input }
    const copySelect = { ...select };
    copyInput[nameInput] = event.target.value;
    let counter = 0;
    counter = copyInput[nameInput] * (copySelect[nameInput] / copySelect[result]);
    console.log(copyInput[result])
    copyInput[result] = counter.toFixed(2);    
    setInput(copyInput)
  } 

  return (
    <>
      <input type="number" value={input.first} onChange={(event) => handleInput(event, "first" , "second")} />
      <select value={select.first} onChange={(event) => handleSelect(event, "first" )}>{option()}</select>
      <input type="number" value={input.second} onChange={(event) => handleInput(event, "second" , "first")} />
      <select value={select.second} onChange={(event) => handleSelect(event, "second")}>{option()}</select>
    </>
  );
}

export default ConverterPage;