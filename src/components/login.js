import React, { useEffect } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, NavLink } from 'react-router-dom'
import Home from './home'
import 'antd/dist/antd.css';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


function Login() {
    useEffect(() => {
        console.log(arguments);
        let args = arguments[0]
        console.log(args.history);
    })
    const onFinish = values => {
        console.log('Success:', values);
        console.log('登录成功', history,arguments);
        arguments[0].history.push('/home')
    };

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    {/* <Link to='/home' >Submit</Link> */}
                    登录
                </Button>
            </Form.Item>
        </Form>
    )
}

export default Login;