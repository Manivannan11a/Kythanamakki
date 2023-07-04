import { Row, Col, Typography } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";

const { Text } = Typography;

const AppFooter = () => {
  return (
    <Row className="k-footer">
      <Col sm={24} md={8}>
        <Text> Location:</Text> <br></br>
        <div>
          <p className="k-fooinner">
            Stay At Kyathanamakki, <br></br> near horanadu kalasa, <br></br>{" "}
            chikkamagalur - Karnataka - 577181
          </p>
        </div>
      </Col>
      <Col sm={24} md={8}>
        <Text>Contact: </Text> <br></br>
        <p className="k-fooinner">
          +91 9480679280 <br></br> +91 8073601059
          <br></br>
          admin@Stay@Kyathanamakki.com
        </p>
      </Col>
      <Col sm={24} md={8}>
        <Text> Social Media:</Text> <br></br>
        <FacebookOutlined className="k-public-face" />
        <InstagramOutlined className="k-public-ins" />
      </Col>
      <hr className="k-hrnew"></hr>

      <Col sm={24} md={24}>
        <Text className="k-copy">2023 © StayatKyathanamakki</Text>
      </Col>
    </Row>
  );
};

export default AppFooter;
