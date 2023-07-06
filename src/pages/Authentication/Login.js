import React, { useState } from "react";
import { Button, Col, Container, Label, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

import { AuthUserInfo } from "../../constants";
import AuthService from "../../services/auth";
import LocalstorageService from "../../helpers/localstorage-service";

import CommonField from "../../components/CommonField";

function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
    console.log(">values", values);
    LocalstorageService.setItem(AuthUserInfo, "test");
    navigate("/restaurants");
    return;

    AuthService.loginUser(values)
      .then((response) => {
        const { data, meta } = response.data;

        console.log(">data", data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div id="login-page">
          <h4>Login</h4>

          <Row>
            <Col>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { isSubmitting, setFieldValue } = props;

                  return (
                    <Form>
                      <CommonField fieldName="email" fieldPlaceholder="Email" />

                      <CommonField
                        fieldName="password"
                        fieldType="password"
                        fieldPlaceholder="Password"
                      />

                      <div className="mt-4">
                        <Button
                          color="primary"
                          className="w-md waves-effect waves-light"
                          type="submit"
                          disabled={isSubmitting || isLoading}
                        >
                          {isSubmitting || isLoading
                            ? "Please Wait..."
                            : "Login"}
                        </Button>

                        <Label className="ms-2">OR</Label>

                        <Button
                          color="link"
                          onClick={() => navigate("/register")}
                        >
                          Register
                        </Button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Login;
