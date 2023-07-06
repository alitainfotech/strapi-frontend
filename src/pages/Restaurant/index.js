import React from "react";
import { Outlet } from "react-router-dom";
import { Card, CardBody } from "reactstrap";

const Restaurant = () => {
  return (
    <React.Fragment>
      <Card className="card-box">
        <CardBody>
          <Outlet />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Restaurant;
