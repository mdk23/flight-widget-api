import React, { useEffect, useState } from 'react'

import {flight_Api} from '../utils/fechtApi';
import TableRow from './TableRow';

function TableBody() {
    const [data,setData]=useState([])
    
    useEffect(()=>{
        flight_Api().then(result=>{
          setData(result.slice(0,6)) 
        });
  
      },[]);
  
      //console.log(data);
      return (
        
        <tbody>
            { data.map((flight,index)=>(
                <TableRow key={index} flight={flight} />  
            ))

            } 
            
        
        </tbody>
  )
}

export default TableBody