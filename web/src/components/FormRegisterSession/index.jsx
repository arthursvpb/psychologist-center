import { DatePicker, Form, Input, Select } from 'antd';

export const FormRegisterSession = () => {
  return (
    <>
      <Form.Item>
        <Select placeholder="Patient">
          <Select.Option value="patient1">Patient1</Select.Option>
          <Select.Option value="patient2">Patient2</Select.Option>
          <Select.Option value="patient3">Patient3</Select.Option>
        </Select>
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
