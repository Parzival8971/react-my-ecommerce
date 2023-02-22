import React, { useEffect, useRef, useState } from 'react';

import { Col, Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';

import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import '../styles/productDetails.css';
import { motion } from 'framer-motion';
import ProductsList from '../components/UI/ProductsList';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
  const [tab, setTab] = useState('desc');
  const reviewUser = useRef('');
  const reviewMsg = useRef('');
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    shortDesc,
    description,
    category,
  } = product;

  const relatedProducts = products.filter((item) => item.category === category);

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;
    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };
    console.log(reviewObj);
    toast.success('리뷰가 작성되었습니다.');
  };

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success('장바구니에 추가되었습니다.');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />

      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='6'>
              <img src={imgUrl} alt='' />
            </Col>
            <Col lg='6'>
              <div className='product__details'>
                <h2>{productName}</h2>
                <div className='product__rating d-flex align-items-center gap-5 mb-4'>
                  <div>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-s-fill'></i>
                    </span>
                    <span>
                      <i className='ri-star-half-s-line'></i>
                    </span>
                  </div>

                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>

                <div className='d-flex align-items-center gap-5'>
                  <span className='product__price'>${price}</span>
                  <span>카테고리: {category.toUpperCase()}</span>
                </div>

                <p className='mt-3'>{shortDesc}</p>

                <motion.button
                  whileTap={{ scale: 1.2 }}
                  className='buy__btn'
                  onClick={addToCart}
                >
                  장바구니
                </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className='tab__wrapper d-flex align-items-center gap-5'>
                <h6
                  className={`${tab === 'desc' ? 'active__tab' : ''}`}
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === 'rev' ? 'active__tab' : ''}`}
                  onClick={() => setTab('rev')}
                >
                  Review ({reviews.length})
                </h6>
              </div>

              {tab === 'desc' ? (
                <div className='tab__content mt-4'>
                  <p>{description}</p>
                </div>
              ) : (
                <div className='product__review mt-5'>
                  <div className='review__wrapper'>
                    <ul>
                      {reviews?.map((item, idx) => (
                        <li key={idx} className='mb-4'>
                          <h6>홍길동</h6>
                          <span>{item.rating} ( rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className='review__form'>
                      <h4>리뷰 남기기</h4>
                      <form action='' onSubmit={submitHandler}>
                        <div className='form__group'>
                          <input
                            type='text'
                            placeholder='이름을 입력해주세요.'
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className='form__group d-flex align-items-center gap-5 rating__group'>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(1)}
                          >
                            1<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(2)}
                          >
                            2<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(3)}
                          >
                            3<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(4)}
                          >
                            4<i className='ri-star-s-fill'></i>
                          </motion.span>
                          <motion.span
                            whileTap={{ scale: 1.2 }}
                            onClick={() => setRating(5)}
                          >
                            5<i className='ri-star-s-fill'></i>
                          </motion.span>
                        </div>

                        <div className='form__group'>
                          <textarea
                            ref={reviewMsg}
                            row={4}
                            type='text'
                            placeholder='리뷰를 남겨주세요.'
                            required
                          />
                        </div>

                        <motion.button
                          whileTap={{ scale: 1.2 }}
                          type='submit'
                          className='buy__btn'
                        >
                          제출하기
                        </motion.button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>

            <Col lg='12' className='mt-5'>
              <h2 className='related__title'>이 상품은 어때요?</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
