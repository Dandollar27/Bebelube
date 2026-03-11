import React from 'react'
import "./Contact.css";
import { contactEmail } from './Dooms';
import { companyTagline } from './Dooms';
import { offices } from './Dooms';


const Contact = () => {
  return (
     <div className="footer_contacts">
      <div className="contact_header">
        <h2>Contact</h2>
        <p>{contactEmail}</p>
        </div>
        <div className='stripe'>
        <p>{companyTagline}</p>
        <h3>Stripe</h3>
      </div>

      <div className="offices_container">
        {offices.map((office, idx) => (
          <div className="office" key={idx}>
            <h4>{office.city}</h4>
            {office.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact