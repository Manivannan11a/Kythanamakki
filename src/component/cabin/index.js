import { Col, Image, Row, Typography } from "antd";
import Room1 from "../../images/Room 1.jpg";
import Room2 from "../../images/Room 2.jpg";
import Room3 from "../../images/Room 3.jpg";
import Room4 from "../../images/Room 4.jpg";
import Room5 from "../../images/Room 5.jpg";
import Room6 from "../../images/Room 6.jpg";
import Room7 from "../../images/Room 7.jpg";
import Room8 from "../../images/Room 8.jpg";
import Room9 from "../../images/Room 9.jpg";
import Room10 from "../../images/Room 10.jpg";
import Tent1 from "../../images/Tent1.png";
import breakfast from "../../images/breakfast.png";
import lunch from "../../images/lunch.png";
import snack from "../../images/snacks.png";
import dinner from "../../images/dinner.png";
import fire from "../../images/fire.png";
import "./cabin.scss";

const { Title } = Typography;

const CabinComponent = () => {
  return (
    <Row className="v-cabin">
      <Col sm={24} md={21}>
        <Typography className="v-head">Home Stay</Typography>
        <hr className="v-hr"></hr>
        <Image.PreviewGroup>
          <Row>
            <Col sm={24} md={6}>
              <Image src={Room1} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room2} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room3} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room4} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room5} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room6} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room7} width={280} height={280} />
            </Col>
            <Col sm={24} md={6}>
              <Image src={Room8} width={280} height={280} />
            </Col>

            <Col sm={24} md={6}>
              <Image src={Room9} width={280} height={280} />
            </Col>

            <Col sm={24} md={6}>
              <Image src={Room10} width={280} height={280} />
            </Col>
          </Row>
        </Image.PreviewGroup>
      </Col>
      <Col sm={24} md={3}>
        <Typography className="v-head">Facilities</Typography>
        <hr className="v-hr v-hrfac"></hr>
        <Image src={breakfast} width={35} preview={false} />{" "}
        <Title className="v-factitle " level={5}>
          Breakfast
        </Title>{" "}
        <br></br>
        <Image src={lunch} width={35} preview={false} />{" "}
        <Title className="v-factitle" level={5}>
          Lunch
        </Title>{" "}
        <br></br>
        <Image src={snack} width={35} preview={false} />{" "}
        <Title className="v-factitle v-marginnew" level={5}>
          Snacks
        </Title>{" "}
        <br></br>
        <Image src={dinner} width={35} preview={false} />{" "}
        <Title className="v-factitle v-marginnew" level={5}>
          Dinner
        </Title>{" "}
        <br></br>
        <Image src={fire} width={35} preview={false} />{" "}
        <Title className="v-factitle v-marginnew" level={5}>
          Fire Camp
        </Title>
      </Col>

      <Col sm={24} md={24}>
        <Typography className="v-head v-head2">Tent Stay</Typography>
        <hr className="v-hr v-hrstay"></hr>
        <Image.PreviewGroup>
          <Image src={Tent1} width={280} height={280} />
        </Image.PreviewGroup>
      </Col>
    </Row>
  );
};

export default CabinComponent;
