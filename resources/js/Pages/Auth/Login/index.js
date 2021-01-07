import React from "react";
import { Card, Form, Input, Button, Checkbox } from "antd";
import SiteLayout from "~/Layouts/General";

const index = () => {
    const onFinish = values => {
        console.log("Success:", values);
    };

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };
    return (
        <div>
            <h2 className="pagehead">Login</h2>
            <Card className="pbox">
                <Form
                    name="basic"
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        placeholder="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Please input your username!"
                            }
                        ]}
                    >
                        <Input
                            size="large"
                            bordered={false}
                            placeholder="Username"
                        />
                    </Form.Item>

                    <Form.Item
                        placeholder="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!"
                            }
                        ]}
                    >
                        <Input.Password
                            size="large"
                            bordered={false}
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

index.layout = page => <SiteLayout guest children={page} />;

export default index;
