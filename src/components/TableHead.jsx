import React from 'react'

function TableHead() {
  return (
          <thead> 
            <tr>
                <th> </th>
                <th id='time'>Time </th>
                <th id='destination'>Destination </th>
                <th id='flight'>Flight Number </th>
                <th id='gate'>Company </th>
                <th id='remarks'>Status</th>  
            </tr>
          </thead>
  )
}

export default TableHead