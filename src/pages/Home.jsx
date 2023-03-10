import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import { Col, Container, Row } from 'reactstrap';
import heroImg from '../assets/images/hero-img.png';

import Services from '../services/Services';
import ProductsList from '../components/UI/ProductsList';
import Clock from '../components/UI/Clock';

import counterImg from '../assets/images/counter-timer-img.png';

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wielessProducts, setWielessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === 'chair'
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === 'sofa'
    );

    const filteredMobileProducts = products.filter(
      (item) => item.category === 'mobile'
    );

    const filteredWirelessProducts = products.filter(
      (item) => item.category === 'wireless'
    );

    const filteredPopularProducts = products.filter(
      (item) => item.category === 'watch'
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWielessProducts(filteredWirelessProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);

  return (
    <Helmet title='Home'>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className='hero__content'>
                <p className='hero__subtitle'>트렌드 제품 {year}</p>
                <h2>실내를 더욱 미니멀하고 모던하게!</h2>
                <p>
                  무난하고 평범한 집 말고, 내 취향을 가득 담은 집을 만들어
                  볼까요? MARKET에서는 내 취향을 가장 쉽게, 부담없이 만날 수
                  있어요. 아주 작은 시도로도 집은 계속 새로워질 수 있답니다.
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

      <Services />

      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>트렌드 상품</h2>
            </Col>
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>

      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title'>베스트 상품</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='12' className='count__down-col'>
              <div className='clock__top-content'>
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className='buy__btn store__btn'
              >
                <Link to='/shop'>쇼핑하기</Link>
              </motion.button>
            </Col>
            <Col lg='6' md='12' className='text-end counter__img'>
              <img src={counterImg} alt='counterImg' />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='new__arrivals'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>신제품</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wielessProducts} />
          </Row>
        </Container>
      </section>

      <section className='popular__category'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>인기제품</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
