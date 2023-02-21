import React, { Component } from "react";
import { Form, Input, Button, message, Card, Popconfirm } from "antd";
import "./hrdesk.css";
import { getNewsById, updateNewsById, deleteByID } from "../../APIList";
import Loading from "../Loader/Loading";

class Crudnews extends Component {
  constructor() {
    super();
    this.state = {
      getIdError: "",
      newsById: [],
      isLoading: false,
    };
  }

  onFinish = async (values) => {
    try {
      const id = this.props.match.params.id;
      const token = localStorage.getItem("token");
      await updateNewsById(id, values, token);
      message.success("Newsletter updated successfully!");
      this.formRef.current.resetFields();
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  componentDidMount() {
    this.getNewsById();
  }

  getNewsById = async (id) => {
    try {
      const id = this.props.match.params.id;
      const token = localStorage.getItem("token");
      const data = await getNewsById(id, token);
      this.setState({
        newsById: data,
        isLoading: false,
      });
      message.success("Newsletter retrieved successfully!");
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  handleDelete = async () => {
    try {
      const id = this.props.match.params.id;
      const token = localStorage.getItem("token");
      const data = await deleteByID(id, token);
      this.setState({
        newsById: data,
        isLoading: false,
      });
      message.success("Newsletter deleted successfully!");
      this.props.history.push("/hr");
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  render() {
    const { isLoading, getIdError, newsById } = this.state;
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
              <h2>Actions on news letter.</h2>
            </Form.Item>
            {isLoading && <Loading />}
            {getIdError ? (
              <div style={{ color: "red", fontWeight: "bold" }}>
                {getIdError}
              </div>
            ) : (
              newsById.map((item) => (
                <>
                  <Form.Item label="Title" name="title" key={item.id}>
                    <Input defaultValue={item.title} />
                  </Form.Item>
                  <Form.Item label="Image URL" name="imageUrl">
                    <Input defaultValue={item.imageUrl} />
                  </Form.Item>
                  <Form.Item label="Description" name="description">
                    <Input.TextArea defaultValue={item.description} rows={4} />
                  </Form.Item>
                  <Form.Item label="Author" name="author">
                    <Input defaultValue={item.author} />
                  </Form.Item>
                </>
              ))
            )}

            <Form.Item>
              <div className="buttoncrud">
                <Button type="primary" htmlType="submit">
                  UPDATE
                </Button>
                <Popconfirm
                  title="Are you sure you want to delete this News?"
                  onConfirm={this.handleDelete}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button type="primary" danger>
                    Delete
                  </Button>
                </Popconfirm>
              </div>
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}

export default Crudnews;
