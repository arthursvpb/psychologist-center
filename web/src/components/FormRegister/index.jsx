import { Form } from 'antd';

import { FormRegisterPatient } from '../FormRegisterPatient';
import { FormRegisterSession } from '../FormRegisterSession';

export const FormRegister = ({ formType }) => {
  const formTypes = {
    patient: <FormRegisterPatient />,
    session: <FormRegisterSession />,
    login: '',
    signup: '',
  };

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 24,
      }}
      layout="horizontal"
      size="large"
    >
      {formTypes[formType]}
    </Form>
  );
};
