export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    } else if (values.username.length > 4) {
      errors.username = 'Username must be 4 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password needs to be 6 characters or more';
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm your password';
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    if (!values.firstName.trim()) {
      errors.firstName = 'First name is required';
    }
  
    if (!values.lastName.trim()) {
      errors.lastName = 'Last name is required';
    }
  
    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = 'Phone number is required';
    }
  
    if (!values.address.trim()) {
      errors.address = 'Address is required';
    }
  
    if (!values.town.trim()) {
      errors.town = 'Town is required';
    }
  
    if (!values.region.trim()) {
      errors.region = 'Region is required';
    }
  
    if (!values.postcode.trim()) {
      errors.postcode = 'Postcode is required';
    }
  
    if (!values.country.trim()) {
      errors.country = 'Country is required';
    }
  
    return errors;
  }
  