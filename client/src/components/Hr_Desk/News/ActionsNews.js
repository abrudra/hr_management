import { Component } from "react";
import { Form, Input, Button, message, Card, Popconfirm, Modal } from "antd";
import Loading from "../../Loader/Loading";
import { getNewsById, updateNewsById, deleteByID } from "../../../APIList";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";


class ActionNews extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isModalOpen: false,
      getIdError: "",
      newsById: [],
      isLoading: false,
    };
  }
  handleId = (e) => {
    console.log(this.props.id);
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

  componentDidMount() {
    this.getNewsById();
  }

  getNewsById = async (id) => {
    try {
      const id = this.props.id;
      const token = localStorage.getItem("token");
      const data = await getNewsById(id, token);
      this.setState({
        newsById: data,
        isLoading: false,
      });
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  handleDelete = async () => {
    try {
      const id = this.props.id;
      const token = localStorage.getItem("token");
      const data = await deleteByID(id, token);
      this.setState({
        newsById: data,
        isLoading: false,
        isModalOpen: false,
      });
      message.success("Newsletter deleted successfully!");
      setTimeout(() => {
        window.location.href = "/hr";
      }, "1000");
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  onFinish = async (values) => {
    try {
      const id = this.props.id;
      const token = localStorage.getItem("token");
      await updateNewsById(id, values, token);
      message.success("Newsletter updated successfully!");
      this.setState({
        isModalOpen: false,
      });
      setTimeout(() => {
        window.location.href = "/hr";
      }, "1000");
      this.formRef.current.resetFields();
    } catch (error) {
      this.setState({
        getIdError: error.response.data.message,
      });
    }
  };

  render() {
    const { isLoading, getIdError, newsById } = this.state;
    return (
      <>
        <Button
          type="primary"
          icon={<EditOutlined />}
          onClick={(e) => {
            this.handleId();
            this.showModal();
          }}
        >
          Edit
        </Button>
        <Modal
          title="Actions on news"
          open={this.state.isModalOpen}
          footer={null}
          onCancel={this.handleCancel}
        >
          <div>
            <Form
              ref={this.formRef}
              name="newsletterForm"
              onFinish={this.onFinish}
              layout="vertical"
            >
              <Card>
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
                        <Input.TextArea
                          defaultValue={item.description}
                          rows={4}
                        />
                      </Form.Item>
                      <Form.Item label="Author" name="author">
                        <Input defaultValue={item.author} />
                      </Form.Item>
                    </>
                  ))
                )}

                <Form.Item>
                  <div className="buttoncrud">
                    <Button
                      type="primary"
                      htmlType="submit"
                      icon={<EditOutlined />}
                    >
                      UPDATE
                    </Button>
                    <Popconfirm
                      title="Are you sure you want to delete this News?"
                      onConfirm={this.handleDelete}
                      okText="Yes"
                      cancelText="No"
                    >
                      <Button type="primary" icon={<DeleteOutlined />} danger>
                        Delete
                      </Button>
                    </Popconfirm>
                  </div>
                </Form.Item>
              </Card>
            </Form>
          </div>
        </Modal>
      </>
    );
  }
}

export default ActionNews;
