
import React, { useState } from "react";
import './../styles/App.css';
import Table from "./Table";

const App = () => {

  const [price,setPrice] = useState('');

  const handleChange = (event) => {
    setPrice(event.target.value);
    // console.log(price)
  }

  return (
    <div>
      <p><b>Enter your budget to check available items:</b></p>
      <br/>
      <input type="number" onChange={handleChange} value={price} />
       <Table price={price}/>
    </div>
  )
}

export default App
