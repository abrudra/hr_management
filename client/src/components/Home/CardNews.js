import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const CardNews = (props) => {
  return (
    <Card
      hoverable
      style={{
        width: 350,
      }}
      cover={<img alt="example" src={props.imageUrl} />}
    >
      <Meta title={props.title} description={props.description} />
    </Card>
  );
};

export default CardNews;
