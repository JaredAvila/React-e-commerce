import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonComponent } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            title,
            price,
            inCart
          } = value.detailProduct;
          return (
            <div className="container">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} alt="product" className="img-fluid" />
                </div>
                {/* product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model : {title}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    made by : <span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>
                      {price}
                    </strong>
                  </h4>
                  <p className="text-capitalize font-weight-bold mt-3mb-0">
                    some info about product:
                  </p>
                  <p className="text-muted lead">{info}</p>
                  <div>
                    <Link to="/">
                      <ButtonComponent>back to products</ButtonComponent>
                    </Link>
                    <ButtonComponent
                      cart
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </ButtonComponent>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
