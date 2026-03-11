import React from 'react'
import "./Section.css";
import Button from './Button';

const Section = () => {
  return (
    <div className='all'>
      <section className="heroine">
        <h2>Try Paystack Now</h2>
        <h1>Start accepting payments in <br/>just 30 minutes</h1>
        </section>
        <article className='free'>
        <Button name="Create free account"
                        style= {{
                         padding: "12px 28px",
            color: "white",
            border: "none",
            borderRadius: "5px",
            background: "green",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer"}}/>
            </article>
      
    
</div>

  )
}

export default Section
