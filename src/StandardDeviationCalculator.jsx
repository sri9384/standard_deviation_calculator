import React, { useState } from 'react';
import axios from 'axios';

function StandardDeviationCalculator() {
  const [numbers, setNumbers] = useState('');
  const [result, setResult] = useState('');
  
  const handleInputChange = (event) => {
    setNumbers(event.target.value);
  };
  
  const data = {
    numbers : numbers
  }

  const calculateStandardDeviation = () => {
    axios.post("http://127.0.0.1:80/calculate_standard_deviation.php",data,{
      headers:{
        'Content-Type':'application/json'
      }})
      .then((response)=>{
        //console.log(response);
        // console.log(response.data.standardDeviation);
        setResult(response.data.standardDeviation);
      })
      .catch((error)=>console.error('Error: ',error));
  };

  return (
    <div className="container" >
      <input className="input" type="text" value={numbers} onChange={handleInputChange} placeholder='Enter the numbers' />
      <br />
      <button className="button-64" onClick={calculateStandardDeviation}><span className="text">Calculate Standard Deviation</span></button>
      <br />
      <div className="result">Result: {result !== '' ? result : 'N/A'}</div>
    </div>
  );
}

export default StandardDeviationCalculator;
