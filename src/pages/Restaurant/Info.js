import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Row, Table } from "reactstrap";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";

import { BACK_URL } from "../../constants";
import RestaurantService from "../../services/restaurant";

import LoadingMessage from "../../components/LoadingMessage";

const Info = () => {
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    getRestaurantFn();
  }, []);

  async function getRestaurantFn() {
    setLoading(true);
    RestaurantService.listByParams(
      `/${params.id}`,
      "populate[0]=coverPhoto&populate[1]=gallery"
    )
      .then((response) => {
        const { data, meta } = response.data;

        const { attributes: attr } = data;

        setData(attr);

        const galList = [];
        attr?.gallery.data?.forEach(({ attributes: itemAtr }) => {
          galList.push({
            original: BACK_URL + itemAtr.url,
            thumbnail: BACK_URL + itemAtr.formats.thumbnail.url,
          });
        });

        setGalleryData(galList);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <React.Fragment>
      <Row>
        {!loading && data && (
          <>
            <Col sm={5} md={4} className="gallery-view">
              {galleryData.length === 0 ? (
                <LoadingMessage isLoading={false} len={0} msg="No Data" />
              ) : (
                <ImageGallery
                  items={galleryData}
                  originalHeight="300px"
                  showBullets
                  autoPlay
                />
              )}
            </Col>

            <Col sm={7} md={8}>
              <Table bordered striped responsive>
                <tbody>
                  <tr>
                    <td>
                      <b>Name:</b>
                    </td>
                    <td>{data?.name}</td>
                  </tr>
                  <tr>
                    <td>
                      <b>Description:</b>
                    </td>
                    <td>{data?.description}</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </>
        )}

        <Col>
          <LoadingMessage isLoading={loading} len={data || 0} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Info;
