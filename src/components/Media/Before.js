import React from 'react'

const Before = () => {
  return (
    
    <div className="Before-After">
       {
           [...new Array(126)].map((_,i)=>
<img className="img-mb-style" src={`./Images/Gallery/Before- After/b${i + 2}.jpg`} loading="lazy" />
           )
       }
    </div>
  )
}

export default Before