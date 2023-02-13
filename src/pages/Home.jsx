import React from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

const Home = () => {
  const year = new Date().getFullYear();
  return (
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className='hero__subtitle'>트렌드 제품 {year}</p>
                <h2>실내를 더욱 미니멀하고 모던하게!</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolorem eos odit nobis nam fugiat explicabo autem. Rem
                  deserunt atque labore!
                </p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy__btn'>
                  <Link to='/shop'>쇼핑하기</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className='hero__img'>
                <img src={heroImg} alt='heroImg' />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
