import React, { Component } from "react";
import { Form, Input, Button, message, Card } from "antd";
import "./hrdesk.css";
import { gettingemployeeById } from "../../APIList";
import Loading from "../Loader/Loading";

class Crudnews extends Component {

    constructor(){
        super()
        this.state = {
            getIdError : "",
            empDataById : [],
            isLoading: false,
        }
    }
//   onFinish = async (values) => {
//     console.log(values);
//     try {
//       const token = localStorage.getItem("token");
//       const data = await addNewsLetter(values, token);
//       console.log(data);
//       message.success("Newsletter added successfully!");
//       this.formRef.current.resetFields();
//     } catch (error) {
//       this.setState({
//         error: error.response.data.message,
//       });
//     }
//   };
  
componentDidMount(){
    this.gettingemployeeById();
}
  gettingemployeeById = async (id) => {
     try {
    const id = this.props.param.match.id;
       const token = localStorage.getItem("token");
       const data = await gettingemployeeById(id, token);
       this.setState({
         empDataById: data,
         isLoading: false,
       });
       console.log(data);
       message.success("Newsletter updated successfully!");
    //    this.formRef.current.resetFields();
     } catch (error) {
       this.setState({
         getIdError: error.response.data.message,
       });
     }
  }

  render() {
    const {isLoading ,getIdError , empDataById} = this.state;
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
              empDataById.map((item) => (
                <>
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
                    <Input placeholder={item.title} />
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
                    <Input placeholder={item.imageUrl} />
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
                    <Input.TextArea placeholder={item.description} rows={4} />
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
                    <Input placeholder={item.author} />
                  </Form.Item>
                </>
              ))
            )}

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Card>
        </Form>
      </div>
    );
  }
}

export default Crudnews;