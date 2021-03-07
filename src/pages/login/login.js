import React, { Component } from 'react'
import { Form, Input, Button, } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import logo from './images/logo.png'
import './login.css'

export default class Login extends Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
      }

    onFinishFailed = (values) => {
        console.log('出错了',values);
    }
    render() {
        return (
            <div className="login">
                <header className='login-header'>
                    <img src ={logo} alt='logo'></img>
                    <h1>React后台管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <div>
                        <Form name="normal_login" className="login-form" onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Username!',
                                },
                                {
                                    min:4,
                                    message:'用户名最少4位'
                                },
                                {
                                    max:12,
                                    message:'用户名最多12位',                                    
                                },
                                {
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:'用户名必须由数字英文或下划线组成'
                                }
                                ]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your Password!',
                                },
                                {
                                    min:4,
                                    message:'密码最少4位'
                                },
                                {
                                    max:12,
                                    message:'密码最多12位',                                    
                                },
                                {
                                    pattern:/^[a-zA-Z0-9_]+$/,
                                    message:'密码必须由数字英文或下划线组成'
                                }
                                ]}
                            >
                                <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                                />
                            </Form.Item>
                            
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                                </Button>                                
                            </Form.Item>
                        </Form>
                    </div>
                </section>                
            </div>
        )
    }
}
