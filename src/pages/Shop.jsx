import React, { useState } from 'react';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'reactstrap';

import '../styles/shop.css';

import products from '../assets/data/products';
import ProductsList from '../components/UI/ProductsList';

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = (e) => {
    const filterValue = e.target.value;
    console.log(filterValue);

    if (filterValue === 'sofa') {
      const filteredProducts = products.filter(
        (item) => item.category === 'sofa'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'mobile') {
      const filteredProducts = products.filter(
        (item) => item.category === 'mobile'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'chair') {
      const filteredProducts = products.filter(
        (item) => item.category === 'chair'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'watch') {
      const filteredProducts = products.filter(
        (item) => item.category === 'watch'
      );
      setProductsData(filteredProducts);
    }

    if (filterValue === 'wireless') {
      const filteredProducts = products.filter(
        (item) => item.category === 'wireless'
      );
      setProductsData(filteredProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title='쇼핑'>
      <CommonSection title='Products' />

      <section>
        <Container>
          <Row>
            <Col lg='3' md='6'>
              <div className='filter__widget'>
                <select onChange={handleFilter}>
                  <option>카테고리 정렬</option>
                  <option value='sofa'>소파</option>
                  <option value='mobile'>모바일</option>
                  <option value='chair'>의자</option>
                  <option value='watch'>시계</option>
                  <option value='wireless'>블루투스</option>
                </select>
              </div>
            </Col>
            <Col lg='3' md='6' className='text-end'>
              <div className='filter__widget'>
                <select>
                  <option value='ascending'>최신순</option>
                  <option value='descending'>오래된순</option>
                </select>
              </div>
            </Col>
            <Col lg='6' md='12'>
              <div className='search__box'>
                <input
                  type='text'
                  placeholder='검색하기'
                  onChange={handleSearch}
                />
                <span>
                  <i className='ri-search-line'></i>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className='text-center fs-4'>상품을 찾을 수 없습니다.</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Shop;
