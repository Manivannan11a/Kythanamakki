import {
  Row,
  Col,
  Card,
  Typography,
  Form,
  Button,
  Input,
  DatePicker,
} from "antd";
import { useState } from "react";
import "./book.scss";

const { Text } = Typography;

const Booknow = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;
  return (
    <div className="v-book">
      <Row gutter={16}>
        <Col span={12}>
          <Card hoverable title="Home Stay">
            <Text className="v-charges">
              * Charges mentioned below apply per day only.
            </Text>

            <Row gutter={[0, 10]}>
              <Col span={24}>Home stay (1800/- per person)</Col>
              <Col span={24}>Home stay + Activities (2300/- per person)</Col>
              <Col span={24}>
                Home stay + Activities + Vehicle (2800/- per person)
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={12}>
          <Card hoverable title="Tent Stay">
            <Text className="v-charges">
              * Charges mentioned below apply per day only.
            </Text>

            <Row gutter={[0, 10]}>
              <Col span={24}>Tent stay (1000/- per person)</Col>
              <Col span={24}>Tent stay + Activities (1500/- per person)</Col>
              <Col span={24}>
                Tent stay + Activities + Vehicle (2200/- per person)
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={24} align="middle">
          <Text className="v-info">
            Really curious about Kyathanamakki Home Stay? Great, fill out below enquiry form and
            we will get back to you as soon as possible.
          </Text>
        </Col>
        <Col span={24}>
          <Form {...formItemLayout} layout={formLayout} form={form}>
            <Form.Item
              label="Name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name!",
                },
              ]}
            >
              <Input
                style={{
                  width: "80%",
                }}
                placeholder="Enter your name"
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: "Please input your phone number!",
                },
              ]}
            >
              <Input
                placeholder="Enter Phone number"
                style={{
                  width: "80%",
                }}
              />
            </Form.Item>
            <Form.Item
              name="From"
              label="From"
              rules={[
                {
                  required: true,
                  message: "Enter from Date",
                },
              ]}
            >
              <DatePicker
                showTime={{
                  format: "HH:mm A",
                  use12Hours: true,
                }}
              />
            </Form.Item>
            <Form.Item
              name="To"
              label="To"
              rules={[
                {
                  required: true,
                  message: "Enter to Date",
                },
              ]}
            >
              <DatePicker
                showTime={{
                  format: "HH:mm A",
                  use12Hours: true,
                }}
              />
            </Form.Item>

            <Form.Item
              name="no of days"
              label="No of Days"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{
                  width: "80%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="no of rooms "
              label="Rooms Required"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{
                  width: "80%",
                }}
              />
            </Form.Item>

            <Form.Item
              name="no of persons "
              label="No of Persons"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                style={{
                  width: "80%",
                }}
              />
            </Form.Item>

            <Form.Item {...buttonItemLayout}>
              <Button className="v-bnt-s" type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Booknow;
