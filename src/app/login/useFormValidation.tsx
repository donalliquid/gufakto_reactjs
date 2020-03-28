import * as React from "react";

function useFormValidation(initialState: any, validate: any) {
  const [values, setValueus] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noError = Object.keys(errors).length === 0;
      if (noError) {
        console.log("Success: ", values);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
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
