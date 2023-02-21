import React, { Component } from "react";
import { Form, Input, Button, message, Card, Alert } from "antd";
import "./hrdesk.css";
import { addNewsLetter } from "../../APIList";

class Addnews extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
    };
  }

  formRef = React.createRef();

  onFinish = async (values) => {
    console.log(values);
    try {
      const token = localStorage.getItem("token");
      await addNewsLetter(values,token);
      message.success("Newsletter added successfully!");
      this.formRef.current.resetFields();
    } catch (error) {
      this.setState({
        error: error.response.data.message,
      });
    }
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    const { error } = this.state;
    return (
      <div className="cardaddnews">
        <Form
          ref={this.formRef}
          name="newsletterForm"
          onFinish={this.onFinish}
          layout="vertical"
          className="formaaddnews"
        >
          <Card>
            <Form.Item>
              <h2>Add new news letter</h2>
            </Form.Item>
            {error && <Alert description={error} type="error" showIcon />}
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please enter a title",
                },
              ]}
            >
              <Input placeholder="Enter title" />
            </Form.Item>
            <Form.Item
              label="Image URL"
              name="imageUrl"
              rules={[
                {
                  required: true,
                  message: "Please provide an image URL",
                },
              ]}
            >
              <Input placeholder="Enter image URL" />
            </Form.Item>
            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please provide a description",
                },
              ]}
            >
              <Input.TextArea placeholder="Enter description" rows={4} />
            </Form.Item>
            <Form.Item
              label="Author"
              name="author"
              rules={[
                {
                  required: true,
                  message: "Please provide author name",
                },
              ]}
            >
              <Input placeholder="Enter author name" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Newsletter
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}

export default Addnews;
