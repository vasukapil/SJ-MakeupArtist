import React from 'react'

const Editorial = () => {
  return (
    <div className="Editorial">
       {
           [...new Array(36)].map((_,i)=>
<img className="img-mb-style" src={`./Images/Gallery/Fashion- Editorial/c${i + 1}.jpg`} loading="lazy" />
           )
       }
    </div>
  )
}

export default Editorial