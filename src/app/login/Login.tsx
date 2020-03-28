import * as React from "react";
import "../../styles.css";
import useFormValidation from "./useFormValidation";
import validationAuth from "./validationAuth";

const INITIAL_STATE = {
  email: "",
  password: ""
};

export default function App() {
  const {
    handleBlur,
    onSubmit,
    handleChange,
    isSubmitting,
    values,
    errors
  } = useFormValidation(INITIAL_STATE, validationAuth);

  const displayErrors: any = errors;
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-center">
            <h2>Halaman Login</h2>
            <h6>Selamat datang. silahkan login!</h6>
            <form
              onSubmit={e => onSubmit(e)}
              style={{
                padding: "50px",
                backgroundColor: "#e3e3e3"
              }}
            >
              <div className="form-group row">
                <label>Email</label>
                <input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Your username"
                />
                {Object.keys(displayErrors).length > 0 && displayErrors.email && (
                  <small id="emailHelp" className="form-text text-danger">
                    {displayErrors.email}
                  </small>
                )}
              </div>
              <div className="form-group row">
                <label>Password</label>
                <input
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="Your password"
                />
                {Object.keys(displayErrors).length > 0 &&
                  displayErrors.password && (
                    <small id="emailHelp" className="form-text text-danger">
                      {displayErrors.password}
                    </small>
                  )}
              </div>
              <button
                type="submit"
                name="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
