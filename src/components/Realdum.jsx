import React from "react";
import "./Realdum.css"
import { firstkey } from "./Dummypower";
import { secondkey } from "./Dummypower";
import { Thirdkeys } from "./Dummypower";
const Realdum = () => {
  return (
    <div className="rose">
        <section className="mary">
      <h1>
      Powering growth for amazing <br/> businesses
      </h1>
      <p>Paystack is a growth engine for a new generation of innovative,<br/> forward-looking organizations operating in Africa.</p>
      </section>
     <article className="imgs">
       {firstkey.map((item) => (
  <img key={item.id} src={item.image} alt="" />
))}
    {secondkey.map((item) => (
  <img key={item.id} src={item.image} alt="" />
))}
    {Thirdkeys.map((item) => (
  <img key={item.id} src={item.image} alt="" />
))}
      </article>
    </div>
    

  )
}

export default Realdum