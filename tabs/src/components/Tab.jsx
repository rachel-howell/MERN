import React, { useState } from 'react'

const Tab = ({ tabArr }) => {

    const [ contents, setContents ] = useState("Hi.");


  return (
    <div>
        {
            tabArr.map(tab =>
                <div className="d-inline-flex mx-auto col-1 mt-2">
                    <button type="submit" className="btn border" onClick={()=>setContents(tab.content)}>{tab.label}</button>
                </div>
        )}
        <div className="container border mt-3 col-3 p-3">
            <p>{ contents }</p>
        </div>
    </div>
  )
}

export default Tab