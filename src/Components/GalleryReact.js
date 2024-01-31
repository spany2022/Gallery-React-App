import React, { useState } from 'react'
import Menu from './Menu'
import MainSection from './MainSection';
import HeadingList from './HeadingList';

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), "all"];

const GalleryReact = () => {
    const[items, setItems] = useState(Menu);
    const[catItem, setCatItem] = useState(allCatValues);

    const filterItem= (categoryItem) =>{
        if(categoryItem === "all"){
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) =>{
            return curElem.category === categoryItem
        });
        setItems(updatedItems);
    }
  return (
    <>
    <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
    <hr />
    

    <HeadingList filterItem={filterItem} catItem={catItem}/>

    {/* My main items section */}
    <MainSection item={items}/>
    </>
  )
}

export default GalleryReact
