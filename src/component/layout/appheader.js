import { Row, Col, Menu, Image, Typography, Button, Drawer, Space } from "antd";
import logo from "../../images/logo.png";
import { useState } from "react";
import { MenuOutlined, PhoneOutlined } from "@ant-design/icons";
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
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  const onClick = (e) => {
    // console.log("click ", e);
    setCurrent(e.key);
    // console.log(e.key, "e.key");
    navigate(e.key)
    setOpen(false);

  };
  return (
    <>
      <Row>
        <Col sm={5} md={0}>
          <Button type="link" size="large" onClick={showDrawer} style={{ color: "#fff" }}>
            <MenuOutlined />
          </Button>
        </Col>
        <Col sm={19} style={{ width: "80%", textAlign: "center" }} md={0}>
          <Image src={logo} width="90px" preview={false} />
        </Col>
        <Col sm={0} md={9} lg={5} hidden="sm">
          <Image src={logo} width="90px" preview={false} />
          <Text className="k-stay">Stay @ Kyathanamakki</Text>
        </Col>
        <Col sm={0} md={15} lg={15} hidden="sm">
          <Menu
            className="k-menu"
            style={{
              justifyContent: "flex-end",
              background: "#001529",
              color: "#ffffff",
              border: "none"
            }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
          />
        </Col>
        <Col md={0} lg={4} hidden="xs">
          <a target="_blank" href="https://api.whatsapp.com/send?phone=9480679280" rel="noreferrer">
            <Button className="k-phone">
              <PhoneOutlined className="k-phicon" />
              9480679280 / 8073601059
            </Button>
          </a>
        </Col>
      </Row>
      <Drawer
        // title="Drawer with extra actions"
        placement={"left"}
        width={280}
        onClose={onClose}
        open={open}
      // extra={
      //   <Space>
      //     <Button onClick={onClose}>Cancel</Button>
      //     <Button type="primary" onClick={onClose}>
      //       OK
      //     </Button>
      //   </Space>
      // }
      >
        <Row gutter={12}>
          <Col xs={24}>
            <Menu
              mode="inline"
              onClick={onClick}
              selectedKeys={[current]}
              items={items}
              theme="light"

            />
          </Col>
          <Col xs={24} style={{ marginTop: 20 }}>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=9480679280" rel="noreferrer">
              <Button className="k-phone">
                <PhoneOutlined className="k-phicon" />
                9480679280 / 8073601059
              </Button>
            </a>
          </Col>
        </Row>
      </Drawer>
    </>
  );
};

export default AppHeader;
