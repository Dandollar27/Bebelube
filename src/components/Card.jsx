import React from 'react'
import "./Card.css"
import { card1 } from './Dommycard'

const Card = () => {
    return(
        <div>
            <div>
                <h1>
                    Backed by strong global partners
                </h1>
                <p className='text'>
                   Paystack is backed by notable investors as well as some of the best<br/>
                    payments companies on the planet.
                </p>
                <div className='box_container'>
                    {
                        card1.map(item => (
                                    <section>
                                <img src={item.image} alt=""/>
                                <p className='first'>{item.paragraph}</p>
                                <div className='second'>
                                    <img src={item.picture}alt =""/>
                                    <div className='title'>
                                          <h2>{item.name}</h2>
                                    <p>{item.title}</p>
                                    </div> 
                                </div>
                            </section>
                        ))
                    }
                    

                </div>
            </div>
        </div>

    )
 
}

export default Card