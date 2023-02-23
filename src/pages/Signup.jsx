import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Col, Container, Form, FormGroup, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/login.css';

const Signup = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);

  return (
    <Helmet title='회원가입'>
      <section>
        <Container>
          <Row>
            <Col lg='6' className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>회원가입</h3>

              <Form className='auth__form'>
                <FormGroup className='form__group'>
                  <input
                    type='text'
                    placeholder='닉네임'
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </FormGroup>
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
                <FormGroup className='form__group'>
                  <input
                    type='file'
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                </FormGroup>
                <button type='submit' className='buy__btn auth__btn'>
                  회원가입
                </button>
                <p>
                  이미 아이디가 있으신가요? <Link to='/login'>로그인</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Signup;
