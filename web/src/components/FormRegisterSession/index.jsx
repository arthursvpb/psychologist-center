import { DatePicker, Form, Input, Select } from 'antd';

export const FormRegisterSession = () => {
  return (
    <>
      <Form.Item>
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item>
        <div style={{ display: 'flex', gap: '10px' }}>
          <DatePicker placeholder="Date" style={{ width: '100%' }} />
          <Input placeholder="Duration e.g.: 01:00" />
        </div>
      </Form.Item>
      <Form.Item>
        <Select placeholder="Session type">
          <Select.Option value="individual">Individual</Select.Option>
          <Select.Option value="couple">Couple</Select.Option>
          <Select.Option value="group">Group</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Input placeholder="Subject" />
      </Form.Item>
    </>
  );
};
