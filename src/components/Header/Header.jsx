import React, { useEffect, useRef } from 'react';

import { NavLink } from 'react-router-dom';
import './header.css';

import { motion } from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';

const nav__links = [
  {
    path: 'home',
    display: '전체',
  },
  {
    path: 'shop',
    display: '쇼핑',
  },
  {
    path: 'cart',
    display: '카트',
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  console.log(useSelector((state) => state));

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  });

  const menuToggle = () => menuRef.current.classList.toggle('active__menu');

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>MARKET</h1>
              </div>
            </div>
            {/* navigation */}
            <div className='navigation' ref={menuRef} onClick={menuToggle}>
              <ul className='menu'>
                {nav__links.map((item, idx) => (
                  <li className='nav__item' key={idx}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? 'nav__active' : ''
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* navIcons */}
            <div className='nav__icons'>
              <span className='fav__icon'>
                <i className='ri-heart-2-line'></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart__icon'>
                <i className='ri-briefcase-line'></i>
                <span className='badge'>{totalQuantity}</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt='userIcon'
                />
              </span>
              {/* mobileMenu */}
              <div className='mobile__menu'>
                <span onClick={menuToggle}>
                  <i className='ri-menu-line'></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
