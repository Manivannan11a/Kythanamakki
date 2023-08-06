import { Row, Col, Typography, Button } from "antd";
import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";

const { Text } = Typography;

const AppFooter = () => {

  const location = useLocation();
  return (
    <>
      <Row className="k-footer">
        <Col sm={24} md={8} xs={24}>
          <Text> Location:</Text> <br></br>
          <div>
            <p className="k-fooinner">
              +91 9480679280 <br></br> +91 8073601059
              <br></br>
              admin@Stay@Kyathanamakki.com
            </p>
          </div>
        </Col>
        <Col sm={24} md={8} xs={24}>
          <Text>Contact: </Text> <br></br>
          <p className="k-fooinner">
            +91 9480679280 <br></br> +91 8073601059
            <br></br>
            admin@Stay@Kyathanamakki.com
          </p>
        </Col>
        <Col sm={24} md={8} xs={24}>
          <Text> Social Media:</Text> <br></br>
          <FacebookOutlined className="k-public-face" />
          <InstagramOutlined className="k-public-ins" />
        </Col>
        <hr className="k-hrnew"></hr>

        <Col sm={24} md={24} xs={24}>
          <Text className="k-copy">2023 © StayatKyathanamakki</Text>
        </Col>
      </Row>
      {
        location.pathname !== "/bookings" && (
          <Link className="book-now" to={"/bookings"}>
            <Button>Book Now</Button>
          </Link>
        )
      }
    </>
  );
};

export default AppFooter;
