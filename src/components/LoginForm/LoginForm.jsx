import { Formik } from 'formik';
import { login } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import {
  FormWrap,
  FormField,
  FormLabel,
  FormButton,
} from '.././ContactForm/ContactForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      login({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrap autoComplete="off">
          <FormLabel>
            Email
            <FormField id="email" name="email" type="text" />
          </FormLabel>
          <FormLabel>
            Password
            <FormField id="password" name="password" type="text" />
          </FormLabel>
          <FormButton type="submit">Log In</FormButton>
        </FormWrap>
      )}
    </Formik>
  );
};
