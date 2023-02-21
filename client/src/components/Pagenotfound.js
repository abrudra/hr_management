import { Button, Result } from "antd";
const Pagenotfound = () => (
  <Result
    status="404"
    title="404"
    subTitle="Sorry, the page you visited does not exist."
    extra={<Button type="primary" onClick={()=>{
     window.location.href = "/";
    }}>Back Home</Button>}
    style={{paddingTop:"8%"}}
  />
);
export default Pagenotfound;
