import React from 'react';
import './footer.css';

import { Col, Container, ListGroup, ListGroupItem, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
            <div className='logo'>
              <div>
                <h1 className='text-white'>리액트마켓</h1>
              </div>
            </div>
            <p className='footer__text mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              nemo aspernatur architecto ut, sed voluptates quaerat voluptatibus
              doloremque incidunt tempora?
            </p>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>카테고리 메뉴</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>핸드폰</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>소파</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>의자</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>스마트워치</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>링크</h4>
              <ListGroup className='mb-3'>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/shop'>쇼핑</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/cart'>장바구니</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>로그인</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>개인정보처리방침</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
            <div className='footer__quick-links'>
              <h4 className='quick__links-title'>연락처</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-map-pin-line'></i>
                  </span>
                  <p>123, ZindaBazar, Sylhet, Bangladesh</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-phone-line'></i>
                  </span>
                  <p>+02-1111-1111</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                  <span>
                    <i className='ri-mail-line'></i>
                  </span>
                  <p>exampletest123@gmail.com</p>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className='footer__copyright'>
              Copyright {year} developed by person. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
