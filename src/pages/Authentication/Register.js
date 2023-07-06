import React, { useState } from "react";
import { Button, Col, Container, Label, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { Form, Formik } from "formik";

import CommonField from "../../components/CommonField";

function Register() {
  const navigate = useNavigate();

  const [isLoading] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);

    const payload = { ...values };
    console.log(">payload", payload);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <div id="login-page">
          <h4>Register</h4>

          <Row>
            <Col>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={handleSubmit}
              >
                {(props) => {
                  const { isSubmitting } = props;

                  return (
                    <Form>
                      <CommonField
                        fieldName="appUsername"
                        fieldPlaceholder="Username"
                      />

                      <Row>
                        <Col sm={6}>
                          <CommonField
                            fieldName="firstName"
                            fieldPlaceholder="First Name"
                          />
                        </Col>

                        <Col sm={6}>
                          <CommonField
                            fieldName="lastName"
                            fieldPlaceholder="Last Name"
                          />
                        </Col>
                      </Row>

                      <CommonField
                        fieldName="userEmail"
                        fieldPlaceholder="Email"
                      />

                      <CommonField
                        fieldName="userPassword"
                        fieldType="password"
                        fieldPlaceholder="Password"
                      />

                      <CommonField
                        fieldName="confPassword"
                        fieldType="confPassword"
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
                            : "Register"}
                        </Button>

                        <Label className="ms-2">OR</Label>

                        <Button color="link" onClick={() => navigate("/login")}>
                          Login
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

export default Register;
