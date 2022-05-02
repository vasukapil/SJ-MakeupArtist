import React from 'react'
import './Bridal.css'

const Bridal = () => {
  return (
    <div className="bridal">
       {
           [...new Array(126)].map((_,i)=>
<img className="img-mb-style" src={`./Images/Gallery/Bridal/a${i + 1}.jpg`} loading="lazy" />
           )
       }
    </div>
  )
}

export default Bridal