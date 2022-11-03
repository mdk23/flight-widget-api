import React from 'react'
import TableCell from './TableCell';

function TableRow({flight}) {
  const {companyName,destiny,flightNumber,estimadedhour,state}=flight;
  
  const words = Object.values({estimadedhour,destiny,flightNumber,companyName,state})

    //console.log(words)

  return (
    <tr>
        <td>✈</td>
        {
          words?.map((word,index)=>( 
            <TableCell key={index} word={word}/>
          ))
        }
    </tr>
  )
}

export default TableRow