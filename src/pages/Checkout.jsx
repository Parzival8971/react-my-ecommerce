import React from 'react';
import { useSelector } from 'react-redux';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';

import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';

import '../styles/checkout.css';

const Checkout = () => {
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  console.log(totalQty, totalAmount);
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout' />

      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>주문자 정보</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='이름을 입력해주세요.' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='이메일을 입력해주세요.' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='핸드폰 번호' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='주소' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type='text' placeholder='상세주소' />
                </FormGroup>
              </Form>
            </Col>

            <Col lg='4'>
              <div className='checkout__cart'>
                <h6>
                  총 수량
                  <span>{totalQty}개</span>
                </h6>
                <h6>
                  주문금액
                  <span>{totalAmount} 원</span>
                </h6>
                <h6>
                  <span>
                    총 배송료 <br />
                    무료배송
                  </span>
                  <span>0</span>
                </h6>
                <h4>
                  총 결제금액<span>{totalAmount} 원</span>
                </h4>
                <button className='buy__btn auth__btn w-100'>주문하기</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
