import React, { useState } from "react";
import './../styles/App.css';

const Table = ({price}) => {
  const TableData = [
    {
      name: "Apple",
      price: "20"
    },
    {
        name: "Banana",
        price: "10"
    },
    {
        name: "Neutella",
        price: "30"
    },
    {
        name: "Razor",
        price: "5"
    },
    {
        name: "CornFlakes",
        price: "15"
    },
    {
        name: "Sound Bar",
        price: "50"
    },
    {
        name:"Iphone",
        price:"80"
    }
  ];
  const [color,setcolor] = useState();

// className={`${isStopped===true ? 'stopped' : 'not_stopped'}`}

  return(
    <div>
    <p><b>Items you can buy are in Green color</b></p>
    <table>
       {
        TableData.map((item, index) => (
            <tr key={index}>
                <td>{item.name}</td>
                <td className={`${item.price > price ? 'redTextStyle' : 'greenTextStyle'}`}>{item.price}</td>
            </tr>
        ))
       }
    </table>
  </div>
  ) 
  
};

export default Table;
