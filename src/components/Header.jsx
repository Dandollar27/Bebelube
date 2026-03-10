import React from 'react'
import { Database, Data } from './Database'
import "./Header.css"
import Image from './Image'
import Button from './Button'

const Header = () => {
  return (
    <header className="header">

      
      <div className="header-left">
        <Image />

        <ul className="nav-links">
          {Database.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>


      
      <div className="header-right">

        <ul className="secondary-links">
          {Data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>

        <Button
          name="Create free account"
          style={{
            padding: "12px 28px",
            color: "white",
            border: "none",
            borderRadius: "6px",
            background: "green",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer"
          }}
        />

      </div>

    </header>
  )
}

export default Header