import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import { NavLink } from "react-router-dom";

import { BACK_URL } from "../../constants";
import RestaurantService from "../../services/restaurant";

import LoadingMessage from "../../components/LoadingMessage";

const RestaurantList = () => {
  const [loading, setLoading] = useState(false);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    listRestaurantFn();
  }, []);

  async function listRestaurantFn() {
    setLoading(true);
    RestaurantService.listByParams("", "populate[0]=coverPhoto")
      .then((response) => {
        const { data, meta } = response.data;
        setRestaurants(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      <Row>
        {!loading &&
          restaurants.map(({ id, attributes: item }, index) => (
            <Col xs={6} sm={4} lg={3} key={id}>
              <Card>
                <div style={{ height: "250px" }}>
                  <img
                    src={BACK_URL + item.coverPhoto.data?.attributes.url}
                    alt={item.name}
                    width="100%"
                    height="100%"
                  />
                </div>

                <div className="p-2">
                  <NavLink to={`${id}`}>
                    <h4>{item.name}</h4>
                  </NavLink>
                  <p>{item.description}</p>
                </div>
              </Card>
            </Col>
          ))}

        <Col>
          <LoadingMessage isLoading={loading} len={restaurants.length} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default RestaurantList;
