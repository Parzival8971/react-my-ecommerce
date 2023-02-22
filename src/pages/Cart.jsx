import React from 'react';
import '../styles/cart.css';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import { Col, Container, Row } from 'reactstrap';

import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  return (
    <Helmet title='장바구니'>
      <CommonSection title='장바구니' />

      <section>
        <Container>
          <Row>
            <Col lg='9'>
              {cartItems.length === 0 ? (
                <h2 className='fs-4 text-center'>장바구니가 비어있습니다.</h2>
              ) : (
                <table className='table bordered'>
                  <thead>
                    <tr>
                      <th>상품정보</th>
                      <th>제목</th>
                      <th>판매 가격</th>
                      <th>수량</th>
                      <th>삭제</th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, idx) => {
                      const deleteProduct = () => {
                        dispatch(cartActions.deleteItem(item.id));
                      };
                      return (
                        <tr key={idx}>
                          <td>
                            <img src={item.imgUrl} alt='' />
                          </td>
                          <td>{item.productName}</td>
                          <td>${item.price}</td>
                          <td>{item.quantity}</td>
                          <td>
                            <motion.i
                              whileTap={{ scale: 1.2 }}
                              onClick={deleteProduct}
                              className='ri-delete-bin-line'
                            ></motion.i>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </Col>

            <Col lg='3'>
              <div>
                <h6>총 결제금액</h6>
                <span>{totalAmount}</span>
                <p>전 상품 배송비 무료</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Cart;
