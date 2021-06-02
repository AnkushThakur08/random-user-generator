import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaChild } from "react-icons/fa";

const Cart = ({ details }) => {
  return (
    <Card>
      <CardBody className="text-center">
        <img
          height="150"
          width="150"
          className="rounded-circle img-thumbnail border-danger"
          src={details.picture?.large}
        />
        <CardTitle className="text-primary">
          <h2>
            <span className="pr-1"> {details.name?.title} </span>
            <span className="pr-2">{details.name?.first}</span>
            <span>{details.name?.last}</span>
          </h2>
        </CardTitle>
        <CardText>
          <h3>
            <FaMapMarkedAlt className="pr-2" />
            {details.location?.city}{" "}
          </h3>
          <h4>
            <FaPhone className="pr-2" />
            {details.phone}
          </h4>
          <h5>
            <FaEnvelope className="pr-2" />
            {details.email}
          </h5>
          <h2>
            <FaChild />
            <Button outline color="success" className="button">
              {details.dob?.age}
            </Button>
          </h2>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default Cart;
