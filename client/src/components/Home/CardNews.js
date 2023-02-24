import React from "react";
import { Card } from "antd";
import ActionNews from "../Hr_Desk/News/ActionsNews";

const { Meta } = Card;

const CardNews = (props) => {
  // const handleClick = (id) => {
  //   console.log(id);
  //   // do something with the id
  // };
  return (
    <Card
      hoverable
      style={{
        width: 350,
        paddingBottom: "3%",
      }}
      cover={<img alt="example" src={props.imageUrl} />}
    >
      <Meta title={props.title} description={props.description} />
      {localStorage.length === 0 ? null : (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            paddingBottom: 10,
            paddingRight: 10,
          }}
        >
         <ActionNews id={props.id} ></ActionNews>
        </div>
      )}
    </Card>
  );
};

export default CardNews;
