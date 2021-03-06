import React, { useState, useEffect } from 'react';
import ConverterPage from './ConverterPage.js';
import './Converter.css';
const API = 'https://api.nbp.pl/api/exchangerates/tables/A/?format=json';
function Converter() {
  const [currency, setCurrency] = useState([]);
  const [loadedData, setLoadedData] = useState(false);
  const [error, setError] = useState("Ładowanie danych...")

  const fetchData = (zloty) => { //pobieranie danych z pliku .json
    fetch(API)
      .then(response => response.json())
      .then(data => {
        // console.log(data[0].rates)    ; 
        data[0].rates.unshift(zloty)
        setCurrency(data[0]);
        setLoadedData(true);
      })
    .catch(() => setError("Ups.. coś poszło nie tak, spróbuj ponownie"))
  }
  useEffect(() => {  
    const zloty ={currency:"PLN złoty", code:"PLN", mid:1}  
    fetchData(zloty);
  }, []);

  const load = () =>{    
    if (loadedData){
      return <ConverterPage currency={currency}/>
    } else return error
  }

  return (
    <div className="box">
      {load()}
    </div>
  );
}

export default Converter;