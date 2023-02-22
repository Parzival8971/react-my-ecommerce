import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Helmet title='장바구니'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>로그인</h3>

              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input
                    type='email'
                    placeholder='이메일을 입력해주세요.'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input
                    type='password'
                    placeholder='비밀번호를 입력해주세요.'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </FormGroup>
                <button type='submit' className='buy__btn auth__btn'>
                  로그인
                </button>
                <p>
                  아이디가 없으신가요? <Link to='signup'>아이디 만들기</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
