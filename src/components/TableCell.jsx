import React from 'react'
import TableLetter from './TableLetter'

function TableCell({word}) {
  
  /* for (var i = 0; i < word.length; i++) {
      console.log(word[i]);
    }
  */

  return (
    <td>
       {
        Array.from(word).map((letter,index)=>(
          <TableLetter key={index} letter={letter} index={index}/>
        ))
       }
    </td>
  )
}

export default TableCell