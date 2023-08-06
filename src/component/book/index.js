import {
  Row,
  Col,
  Card,
  Typography,
  Form,
  Button,
  Input,
  DatePicker,
  message,
} from "antd";
import moment from "moment";
import { useState } from "react";
import { insertBooking } from "../../api/req-api";
import "./book.scss";

const { Text } = Typography;

const Booknow = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState("horizontal");
  const [loading, setLoading] = useState(false);
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


  const onFinish = async (values) => {
    console.log("submit", values);
    const data = {
      name: values.name,
      phoneNumber: values.phone,
      emailId: "user@gmail.com",
      noOfPerson: parseInt(values.noofpersons),
      packageId: "1",
      packageName: "p1",
      visitingDate: values.fromdate,
      fromDate: values.fromdate,
      endDate: values.enddate,
      roomRequired: values.noofrooms,
      noOfDays: values.noofdays,
    }
    setLoading(true);
    const { data: response, status } = await insertBooking(data);
    if (status === 200) {
      message.success(response.message)
      form.resetFields();
      setLoading(false);
    } else {
      setLoading(false);
      message.success("Somthing went wrong")
    }

    // console.log(res, "res");
    // console.log(res, "res");
    // const prames = {

    // }
  }


  return (
    <div className="v-book">
      <Row gutter={16}>
        <Col xs={24} sm={12}>
          <Card hoverable title="Home Stay" style={{ marginBottom: "15px" }}>
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
        <Col xs={24} sm={12}>
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
        <Col xs={24} align="middle">
          <Text className="v-info">
            Really curious about Kyathanamakki Home Stay? Great, fill out below enquiry form and
            we will get back to you as soon as possible.
          </Text>
        </Col>
        <Col hidden="xs" sm={7}></Col>
        <Col sm={24} lg={10}>
          <Card style={{ padding: "15px" }}>
            <Form
              form={form}
              name="basic"
              onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
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
                    width: "100%",
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
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="fromdate"
                label="From"
                rules={[
                  {
                    required: true,
                    message: "Enter from Date",
                  },
                ]}
              >
                <DatePicker
                  // showTime={{
                  //   format: "HH:mm A",
                  //   use12Hours: true,

                  // }}
                  disabledDate={(current) => {
                    let customDate = moment()?.format("YYYY-MM-DD");
                    return current && current < moment(customDate, "YYYY-MM-DD");
                  }}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="enddate"
                label="To"
                rules={[
                  {
                    required: true,
                    message: "Enter to Date",
                  },
                ]}
              >
                <DatePicker
                  // showTime={{
                  //   format: "HH:mm A",
                  //   use12Hours: true,
                  // }}
                  disabledDate={(current) => {
                    let customDate = moment(form?.getFieldValue('fromdate')?.toDate())?.format("YYYY-MM-DD");
                    return current && current < moment(customDate, "YYYY-MM-DD");
                  }}
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="noofdays"
                label="No of Days"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="noofrooms"
                label="Rooms Required"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item
                name="noofpersons"
                label="No of Persons"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input
                  style={{
                    width: "100%",
                  }}
                />
              </Form.Item>

              <Form.Item {...buttonItemLayout}>
                <Button disabled={loading} loading={loading} className="v-bnt-s" type="primary" htmlType="submit">Submit</Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Booknow;
