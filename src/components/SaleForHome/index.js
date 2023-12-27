import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import s from './SaleForHome.module.css'
import SalesList from '../SalesList';
import { useRef } from 'react';

export const SaleForHome = forwardRef((props, ref) => {

  return (
    <div className={`${s.SaleForHome_Container}`}
     ref={ref}
     >
        <header className= {`${s.SaleForHome_Head}`}>
            <h2 className= {`${s.SaleForHome_Head_Title}`}>Sale</h2>
            <div className= {`${s.SaleForHome_Btn_Area}`}>
                <div className= {`${s.SaleForHome_Head_Line}`}></div>
                <Link className= {`${s.SaleForHome_Nav_Button}`} to="/categories">All Sales</Link>
            </div>
        </header>
        <SalesList/>
    </div>

  );
});


