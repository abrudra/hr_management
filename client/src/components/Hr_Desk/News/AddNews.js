import { Component } from "react";
import { Button, message } from "antd";
import { addNewsLetter } from "../../../APIList";
import { Form, Input, Card, Alert, Modal } from "antd";

class AddNews extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isModalOpen: false,
    };
  }

  onFinish = async (values) => {
    console.log(values);
    try {
      const token = localStorage.getItem("token");
      await addNewsLetter(values, token);
      message.success("Newsletter added successfully!");
      this.setState({
        isModalOpen: false,
      });
      setTimeout(() => {
        window.location.href = "/hr";
      }, "1000");
      this.formRef.current.resetFields();
    } catch (error) {
      this.setState({
        error: error.response.data.message,
      });
    }
  };

  showModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  handleCancel = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    const { error } = this.state;
    return (
      <>
        <Button className="employee-add-empbutton" onClick={this.showModal}>
          Add News letter
        </Button>
        <Modal
          title="Add news"
          open={this.state.isModalOpen}
          footer={null}
          onCancel={this.handleCancel}
        >
         <div >
        <Form
          ref={this.formRef}
          name="newsletterForm"
          onFinish={this.onFinish}
          layout="vertical"
          
        >
          <Card>
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
        </Modal>
      </>
    );
  }
}

export default AddNews;
