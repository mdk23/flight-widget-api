import React, { useState } from 'react'

function TableLetter({letter,index}) {
   const[flip,setFlip]=useState(false);
  
   setTimeout(() => { setFlip(true) }, 200 * index)

   return (

    <div className={flip ? 'flip' : null}>
        {flip ? letter : null}
      </div>
  )
}

export default TableLetter