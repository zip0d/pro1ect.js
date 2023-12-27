import React from 'react';
import { Link } from 'react-router-dom';
import s from './CategoriesForHome.module.css'
import CategoriesList from '../CategoriesList';

const CategoriesForHome = () => {
  return (
    <div className={`${s.CategoriesForHome_Container}`}>
        <header className= {`${s.CategoriesForHome_Head}`}>
            <h2 className= {`${s.CategoriesForHome_Head_Title}`}>Categories</h2>
            <div className= {`${s.CategoriesForHome_Btn_Area}`}>
                <div className= {`${s.CategoriesForHome_Head_Line}`}></div>
                <Link className= {`${s.CategoriesForHome_Nav_Button}`} to="/categories">All Categories</Link>
            </div>
        </header>
        <CategoriesList count={4}/>
    </div>

  );
};

export default CategoriesForHome;