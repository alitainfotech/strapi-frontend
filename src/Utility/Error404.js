import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap";

// Import images
import errorImg from "../assets/images/error-img.png";

import { getToken } from "../helpers";

function Error404() {
  const navigate = useNavigate();
  const token = getToken();

  return (
    <React.Fragment>
      <div className="my-5 pt-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center my-5">
                <h1 className="fw-bold text-error">4 0 4</h1>
                <h3 className="text-uppercase">Page Not Found</h3>
                <div className="mt-5 text-center">
                  <Button
                    onClick={() => {
                      navigate(token ? -1 : "/login");
                    }}
                  >
                    Go Back
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Error404;
