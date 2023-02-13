import React from 'react';

import { NavLink } from 'react-router-dom';
import './header.css';

import { motion } from 'framer-motion';

import logo from '../../assets/images/eco-logo.png';
import userIcon from '../../assets/images/user-icon.png';

import { Container, Row } from 'reactstrap';

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
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav__wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>리액트마켓</h1>
              </div>
            </div>
            {/* navigation */}
            <div className='navigation'>
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
                <span className='badge'>1</span>
              </span>
              <span>
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={userIcon}
                  alt='userIcon'
                />
              </span>
            </div>
            {/* mobileMenu */}
            <div className='mobile__menu'>
              <span>
                <i className='ri-menu-line'></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
