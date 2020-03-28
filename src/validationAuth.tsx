export default function validationAuth(values: any) {
  const errors: any = {};
  // email validation
  if (!values.email) {
    errors.email = "Required email field";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // password validation
  if (!values.password) {
    errors.password = "Required password field";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 6 character";
  }
  return errors;
}
