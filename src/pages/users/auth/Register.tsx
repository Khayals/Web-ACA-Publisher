import React, { useState } from 'react';
import './Login.css';
// import { login } from '../../../utils/APIUtils';
import { Form, Input, Button, Card, Icon } from 'antd';
// import { ACCESS_TOKEN } from '../../../constants';
import { FormComponentProps } from 'antd/lib/form/Form';
import {
    HeaderComponent,
} from '../../../components';

const FormItem = Form.Item;

interface UserFormProps extends FormComponentProps {
    onLogin: any;
}

function Register(props: any) {
    const WrappedRegisterForm = Form.create<UserFormProps>()(RegisterForm);
    return (
        <>
            <HeaderComponent />
            <div className='login-container'>
                <div className='login-body'>
                    {/* <img src='Logo.png' alt='Logo' style={{ height: '128px' }} /> */}
                    <h3>Daftar ke Platform</h3>
                    <Card bordered={false} style={{ width: 300 }}>
                        <div className='login-content'>
                            <WrappedRegisterForm onLogin={props.onLogin} />
                        </div>
                    </Card>
                </div>
            </div>
        </>
    );
}

function RegisterForm(props: any) {
    const [loading, setLoading] = useState(false);
    const handleSubmit = () => { };

    const { getFieldDecorator } = props.form;
    return (
        <Form onSubmit={handleSubmit}>
            <FormItem>
                {getFieldDecorator('identifier', {
                    rules: [
                        { required: true, message: 'Isikan username!' },
                    ],
                })(
                    <Input
                        prefix={<Icon type='user' />}
                        size='large'
                        name='identifier'
                        placeholder='Username'
                    />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('email', {
                    rules: [
                        { required: true, message: 'Isikan alamat email!' },
                    ],
                })(
                    <Input
                        prefix={<Icon type='mail' />}
                        size='large'
                        name='identifier'
                        placeholder='Email'
                    />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('phone', {
                    rules: [
                        { required: true, message: 'Isikan alamat email!' },
                    ],
                })(
                    <Input
                        prefix={<Icon type='phone' />}
                        size='large'
                        name='identifier'
                        placeholder='Telephone'
                    />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('home', {
                    rules: [
                        { required: true, message: 'Isikan alamat anda!' },
                    ],
                })(
                    <Input
                        prefix={<Icon type='home' />}
                        size='large'
                        name='identifier'
                        placeholder='Alamat'
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
                    Daftar
                </Button>
            </FormItem>
        </Form>
    );
}

export default Register;
