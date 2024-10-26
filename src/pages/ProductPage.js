import React, { useState, useEffect } from "react";
import { Row, Col, Image, Button, ListGroup, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AlertMessage from "../components/AlertMessage";
import { LinkContainer } from "react-router-bootstrap";
import { fetchProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import Spinner from 'react-bootstrap/Spinner';



const ProductPage = () => {
  const { id } = useParams();
  const [selectedQuantity, setSelectedQuantity] = useState('')

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, success, failure, product } = productDetails;
  const loggedInUser = JSON.parse(sessionStorage.getItem('userInfo'));
  console.log(loggedInUser);
  const dispatch = useDispatch();
  console.log('product details', productDetails)


  useEffect(() => {
    dispatch(fetchProductDetails(id))
  }, [])

  if (loading) {
    return (
      <Spinner animation="grow" />
    )
  }

  const counts = [...new Array(productDetails.product.rating.count + 1).keys()]
  console.log('counts', counts)
  const quantityDropdownOptions = counts.map(count => {
    return (
      <option key={count} value={count}>{count}</option>
    )
  })

  return (
    <>
      {failure && (
        <AlertMessage
          variant="danger"
          message="Not able to load product details"
        />
      )}

      <LinkContainer to="/">
        <Button variant="primary" className="mb-4">
          Show All Products
        </Button>
      </LinkContainer>
      {success && product && (
        <Row>
          <Col md={4}>
            <Image src={product.image} width={300} height={300} fluid />
          </Col>
          <Col md={5}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>Description : {product.description}</h4>
              </ListGroup.Item>
              <ListGroup.Item>
                <h4>Category : {product.category}</h4>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Price : </h4>
                  </Col>
                  <Col>
                    <h4>
                      <strong>${product.price}</strong>
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Status : </h4>
                  </Col>
                  <Col>
                    <h4>
                      <strong>{"Available"}</strong>
                    </h4>
                  </Col>
                </Row>
              </ListGroup.Item>

              {loggedInUser && 
              <ListGroup.Item>
                <Row>
                  <Col>
                    <h4>Select Quantity : </h4>
                  </Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(e.target.value)}
                    >
                      {quantityDropdownOptions}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
              }
              {loggedInUser && 
              <ListGroup.Item>
                <Button className="btn-block" type="button">
                  Add To Cart
                </Button>
              </ListGroup.Item>
              }
            </ListGroup>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductPage;
