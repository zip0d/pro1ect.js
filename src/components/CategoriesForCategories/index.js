import React from 'react';
import { Link } from 'react-router-dom';
import s from './CategoriesForCategories.module.css'
import CategoriesList from '../CategoriesList';

const CategoriesForCategories = () => {
  return (
    <div className={`${s.CategoriesForCategories_Container}`}>
        <h2 className= {`${s.CategoriesForCategories_Head_Title}`}>Categories</h2>
        <CategoriesList count={5}/>
    </div>

  );
};

export default CategoriesForCategories;