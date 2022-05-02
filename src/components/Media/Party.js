import React from 'react'

const Party = () => {
  return (
    <div className="PArty">
    {
        [...new Array(32)].map((_,i)=>
<img className="img-mb-style" src={`./Images/Gallery/Party Makeup/z${i + 1}.jpg`} loading="lazy" />
        )
    }
 </div>
  )
}

export default Party