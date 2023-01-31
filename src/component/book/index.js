import { Row, Col, Card, Image, Typography, Radio } from "antd";
import "./book.scss";

const { Text} = Typography;

const Booknow = () => {
  return (
    <div className="v-book">
      <Row gutter={16}>
        <Col span={12}>
          <Card hoverable title="Home Stay" >
            <Text className="v-charges">* Charges mentioned below apply per day only.</Text>
            <Radio.Group
              style={{
                width: "100%",
              }}
            >
              <Row gutter={[0,10]}>
                <Col span={24}>
                  <Radio value="A">Home stay (1800/- per person)</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="B">Home stay + Activities (2300/- per person)</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="C">Home stay + Activities + Vehicle (2800/- per person)</Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable title="Tent Stay">
            <Text className="v-charges">* Charges mentioned below apply per day only.</Text>
            <Radio.Group
              style={{
                width: "100%",
              }}
            >
              <Row gutter={[0,10]}>
                <Col span={24}>
                  <Radio value="A">Tent stay (1000/- per person)</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="B">Tent stay + Activities (1500/- per person)</Radio>
                </Col>
                <Col span={24}>
                  <Radio value="C">Tent stay + Activities + Vehicle (2200/- per person)</Radio>
                </Col>
              </Row>
            </Radio.Group>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Booknow;
