import React, { useState } from 'react';
import signUp from '../../../../../../apis/signUp';
import Alert from '../../../../../../components/Alert';
import Button from '../../../../../../components/Button';
import Form from '../../../../../../components/Form';
import FormItem from '../../../../../../components/FormItem';
import HorizontalRule from '../../../../../../components/HorizontalRule';
import useAlert from '../../../../../../hooks/useAlert';
import useForm from '../../../../../../hooks/useForm';
import AuthenticationModal from '../../../../../AuthenticationModal';
import formItems from './formItems';

const RegisterModal = ({
  onClose,
  onLogin,
  onUser,
}) => {
  const { valid, data, setData, touched, setTouched } = useForm(formItems);
  const [loading, setLoading] = useState(false);
  const { alert, setAlert } = useAlert();

  return (
    <>
      <AuthenticationModal
        onClose={onClose}
        title="Register"
      >
        <Form
          formItems={formItems}
          data={data}
          setData={setData}
          touched={touched}
          setTouched={setTouched}
          onSubmit={async () => {
            setLoading(true);
            
            try {
              const user = await signUp(data.emailAddress.value, data.password.value);

              onUser(user);
            } catch (error) {
              if (error.response?.status === 409) {
                setAlert('Email address already exits');

                return;
              }

              setAlert('Internal server error, please try again later');
            }

            setLoading(false);
          }}
        >
          <FormItem>
            <Button disabled={!valid || loading} block>Register</Button>
          </FormItem>
        </Form>
        <HorizontalRule />
        <FormItem>
          <Button block variant="text" onClick={onLogin}>
            Having an account?
          </Button>
        </FormItem>
      </AuthenticationModal>
      {alert && <Alert>{alert}</Alert>}
    </>
  );
};

export default RegisterModal;
