import * as React from "react";
import Users from '../../models/Users'

function useFormValidation(initialState: any, validate: any) {
  const [values, setValueus] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        auth();
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }

    function auth() {
      const auth = new Users();
      const result = auth.auth(values.email, values.password);
      result.then((res) => {
        console.log(res);
      })
      .catch(e=>{
        console.log("Gagal");
      });
    }

  }, [isSubmitting, errors, values]);

  function handleChange(event: any) {
    setValueus({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleBlur() {
    const validateErrors = validate(values);
    setErrors(validateErrors);
  }

  function onSubmit(e: any) {
    e.preventDefault();
    const validateErrors = validate(values);
    setErrors(validateErrors);
    setIsSubmitting(true);
  }

  return {
    handleBlur,
    handleChange,
    onSubmit,
    isSubmitting,
    values,
    errors
  };
}

export default useFormValidation;
