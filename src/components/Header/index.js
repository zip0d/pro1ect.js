import React from 'react';
import { useSelector } from 'react-redux';
import Logo from '../../media/Logo.png'
import Cart from '../../media/Cart.svg'
import { Link } from 'react-router-dom';
import s from './Header.module.css'



const Header = () => {

  const cartList = useSelector(store => store.cartList)
  const totalCount = cartList.reduce((total, item) => total + item.count, 0);

  return (
    <header className= {`${s.header}`}>
      <img className= {`${s.logo}`} src={Logo} alt="Логотип" />
      <nav className= {`${s.navigation}`}>
        <Link className= {`${s.navigation_item}`} to="/">Main Page</Link>
        <Link className= {`${s.navigation_item}`} to="/categories">All Categories</Link>
        <Link className= {`${s.navigation_item}`} to="/products/all">All Products</Link>
        <Link className= {`${s.navigation_item}`} to="/products/sales">All Sales</Link>
      </nav>
      <Link to="/cart">
        <button className= {`${s.cart_button}`}>
          <img src={Cart} alt="Корзина" />
{  (totalCount !== 0)     &&   <div className={s.circle}>
              {totalCount}
          </div>}
        </button>
      </Link>

    </header>
  );
};

export default Header;

