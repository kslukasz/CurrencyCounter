import React, { useState } from 'react';
import './ConverterPage.css'
function ConverterPage(props) {
  const [input, setInput] = useState({ first: "", second: "" });
  const [select, setSelect] = useState({ first: "", second: "" });


  const option = () => {
    const inputOption = props.currency.rates.map((element) => {
      return (
        <option key={element.code} value={element.mid}>{element.currency}</option>
      )
    });
    return inputOption
  }
  const handleSelect = (event, nameSelect) => {
    const copySelect = { ...select };
    copySelect[nameSelect] = event.target.value;
    setSelect(copySelect);
  }

  const handleInput = (event, nameInput) => {
    const copyInput = { ...input }
    copyInput[nameInput] = event.target.value;
    setInput(copyInput)
  }

  // console.log(<select>{option()}</select>);

  return (
    <>
      <input type="number" value={input.first} onChange={(event) => handleInput(event, "first")} />
      <select value={select.first} onChange={(event) => handleSelect(event, "first")}>{option()}</select>
      <input type="number" value={input.second} onChange={(event) => handleInput(event, "second")} />
      <select value={select.second} onChange={(event) => handleSelect(event, "second")}>{option()}</select>
    </>
  );
}

export default ConverterPage;