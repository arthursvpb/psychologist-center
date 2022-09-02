import { Button, Modal } from 'antd';
import { useState } from 'react';
import { FormRegister } from '../FormRegister';

export const FormRegisterModal = ({ buttonTitle, modalTitle, formType }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {buttonTitle}
      </Button>
      <Modal
        okText="Save"
        title={modalTitle}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FormRegister formType={formType} />
      </Modal>
    </>
  );
};
