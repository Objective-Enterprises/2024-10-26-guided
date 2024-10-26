import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import AlertMessage from "../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";

const ProductsListPage = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(listProducts())
  }, [])
  const loading = useSelector(state => state.listProducts.loading)
  const productsList = useSelector(state => state.listProducts.products)
  if (loading) {
    return <Spinner />
  }
  return (
    <>
      {productsList && productsList.length === 0 && (
        <AlertMessage variant="info" message="No products to display" />
      )}
      {productsList && (
        <Row>
          {productsList.map((product) => (
            <Col key={product.id} md={6} sm={12} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ProductsListPage;
