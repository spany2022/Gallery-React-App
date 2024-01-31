import React from 'react'
import Menu from './Menu'

const HeadingList = ({filterItem, catItem}) => {
  return (
    <>

<div className="menu-tabs container">
<div className="menu-tab d-flex justify-content-around">
    
    {
        catItem.map((curElem, index) =>{
           return <button className="btn btn-warning" key={index} onClick={()=> filterItem(curElem)}>{curElem}</button>
        })
    }
    </div>
    </div>


   
    </>
  )
}

export default HeadingList
