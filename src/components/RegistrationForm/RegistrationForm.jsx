import { Formik } from 'formik';
import { register } from 'redux/auth/authOperations';
import { useDispatch } from 'react-redux';

import {
  FormWrap,
  FormField,
  FormLabel,
  FormButton,
} from '.././ContactForm/ContactForm.styled';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <FormWrap autoComplete="off">
          <FormLabel>
            Username
            <FormField id="name" name="name" type="text" />
          </FormLabel>

          <FormLabel>
            Email
            <FormField id="email" name="email" type="text" />
          </FormLabel>
          <FormLabel>
            Password
            <FormField id="password" name="password" type="password" />
          </FormLabel>
          <FormButton type="submit">Register</FormButton>
        </FormWrap>
      )}
    </Formik>
  );
};
