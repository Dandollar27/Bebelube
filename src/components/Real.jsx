import React from 'react'
import './Real.css'
import { bodyData } from './Domidata'
import { secBodyData } from './Domidata'
import { thirdBodyData } from './Domidata'



const Real = () => {
  return (
    <>
    <div>
       {bodyData.map((item) => (
        <Moon key={item.id} item={item} />
        
        
      ))}
      {
        secBodyData.map(item =>(
          <Moon key={item.id} item={item} 
          className = 'row'
          />
        ))
      }
      {
         thirdBodyData.map(item =>(
          <Moon key={item.id} item={item} 
          />
        ))
      }
    </div>
    </>
  )
}

export default Real