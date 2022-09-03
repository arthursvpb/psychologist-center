import './styles.scss';

import { Button, Checkbox, Form, Input } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

export const FormRegisterAuth = () => {
  return (
    <div className="authContainer">
      <LoginOutlined className="loginOutlinedSVG" style={{ color: 'var(--green-500)' }} />
      <h1>Psychologist Center</h1>
      <p>Create your account</p>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: 'Please input your name.',
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid e-mail.',
          },
          {
            required: true,
            message: 'Please input your e-mail.',
          },
        ]}
      >
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password.',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match.'));
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirm your password" />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button type="secondary" htmlType="submit">
          Sign up
        </Button>
      </Form.Item>
    </div>
  );
};
