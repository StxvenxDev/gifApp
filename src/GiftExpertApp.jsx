import React, { useEffect } from 'react';
import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['one punch', 'naruto']);
    const onAddCategory = (newCategory) => {
        newCategory = newCategory.toLowerCase()
        if(categories.includes(newCategory))return;
        setCategories([newCategory, ...categories]);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>
    <AddCategory 
        onNewCategory={value => onAddCategory(value)}
    />

    {
        categories.map(category => (
            <GifGrid key={ category } category = { category }/>
        )
    ) 
    }


    </>
  )
}
