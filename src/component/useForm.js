import { useState } from 'react';

const useForm = (validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    town: '',
    region: '',
    postcode: '',
    country: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });

    
    setErrors(validate({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};

export default useForm;

