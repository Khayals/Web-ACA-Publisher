import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
// import { login } from '../../../utils/APIUtils';
import { Form, Input, Button, Card, notification, Icon } from 'antd';
import { ACCESS_TOKEN } from '../../../constants';
import { FormComponentProps } from 'antd/lib/form/Form';
import {
  HeaderComponent,
} from '../../../components';

const FormItem = Form.Item;

interface UserFormProps extends FormComponentProps {
  onLogin: any;
}

function Login (props: any) {
  const WrappedLoginForm = Form.create<UserFormProps>()(LoginForm);
  return (
    <>
      <HeaderComponent />
      <div className='login-container'>
        <div className='login-body'>
          {/* <img src='Logo.png' alt='Logo' style={{ height: '128px' }} /> */}
          <h3>Masuk ke Platform</h3>
          <Card bordered={false} style={{ width: 300 }}>
            <div className='login-content'>
              <WrappedLoginForm onLogin={props.onLogin} />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}

function LoginForm (props: any) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {};

  const { getFieldDecorator } = props.form;
  return (
    <Form onSubmit={handleSubmit}>
      <FormItem>
        {getFieldDecorator('identifier', {
          rules: [
            { required: true, message: 'Isikan username atau email' },
          ],
        })(
          <Input
            prefix={<Icon type='user' />}
            size='large'
            name='identifier'
            placeholder='Username atau Email'
          />
        )}
      </FormItem>
      <FormItem>
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Isikan kata sandi!' }],
        })(
          <Input.Password
            prefix={<Icon type='lock' />}
            size='large'
            name='password'
            type='password'
            placeholder='Kata sandi'
          />
        )}
      </FormItem>
      <FormItem>
        <Button
          htmlType='submit'
          size='large'
          className='login-form-button'
          loading={loading}
        >
          Masuk
        </Button>
        <Link to='/lupa-sandi'>Lupa kata sandi ? </Link>
      </FormItem>
    </Form>
  );
}

export default Login;
