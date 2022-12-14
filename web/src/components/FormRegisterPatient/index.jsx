import { Form, Input, Select, DatePicker } from 'antd';

export const FormRegisterPatient = () => {
  return (
    <>
      <Form.Item>
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="State ID Card" />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', gap: '10px' }}>
          <DatePicker placeholder="Age" style={{ width: '100%' }} />
          <Select placeholder="Gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </div>
      </Form.Item>
      <Form.Item>
        <Input placeholder="Address" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="E-mail" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Phone number" />
      </Form.Item>
    </>
  );
};
