import React from 'react';
import Button from '../../../../../../components/Button';
import Form from '../../../../../../components/Form';
import FormItem from '../../../../../../components/FormItem';
import HorizontalRule from '../../../../../../components/HorizontalRule';
import useForm from '../../../../../../hooks/useForm';
import AuthenticationModal from '../../../../../AuthenticationModal';
import formItems from './formItems';

const ForgetPasswordModal = ({
  open,
  onClose,
  onLogin,
}) => {
  const { data, setData, touched, setTouched } = useForm(formItems)

  return (
    <AuthenticationModal
      open={open}
      onClose={onClose}
      title="Forget password"
    >
      <Form
        formItems={formItems}
        data={data}
        setData={setData}
        touched={touched}
        setTouched={setTouched}
        onSubmit={() => {
          console.log(data.emailAddress.value)
        }}
      >
        <FormItem>
          <Button block>Reset password</Button>
        </FormItem>
      </Form>
      <HorizontalRule />
      <FormItem>
        <Button block variant="text" onClick={onLogin}>
          Back to login
        </Button>
      </FormItem>
    </AuthenticationModal>
  );
};

export default ForgetPasswordModal;
