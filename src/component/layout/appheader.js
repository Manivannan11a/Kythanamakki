import { Row, Col, Menu, Image, Typography, Button } from "antd";
import logo from "../../images/logo.png";
import { useState } from "react";
import { PhoneOutlined  } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const items = [
  {
    label: "Home",
    key: "home",
    link: "/"
  },
  {
    label: "Cabins",
    key: "cabin",
    link: "/cabin"
  },
  {
    label: "Adventures",
    key: "adventures",
  },
  {
    label: "Experience",
    key: "experience",
  },
  {
    label: "Book now",
    key: "bookings",
  },
];
const AppHeader = () => {
  const [current, setCurrent] = useState("home");
  const navigate = useNavigate();
  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
    // console.log(e.key, "e.key");
    navigate(e.key)

  };
  return (
    <Row>
      <Col span={5}>
        <Image src={logo} width="90px" preview={false} />
        <Text className="k-stay">Stay @ Kyathanamakki</Text>
      </Col>
      <Col span={15}>
        <Menu
          className="k-menu"
          style={{
            justifyContent: "flex-end",
            background: "#001529",
            color: "#ffffff",
          }}
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </Col>
      <Col span={4}>
        <Button className="k-phone">
          <PhoneOutlined  className="k-phicon"/>
          9480679280 / 8073601059
        </Button>
      </Col>
    </Row>
  );
};

export default AppHeader;
