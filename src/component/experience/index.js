import { Col, Image, Row, Typography } from "antd";
import Exp1 from "../../images/EX1.jpg";
import Exp2 from "../../images/EX2.JPG";
import Exp3 from "../../images/EX3.JPG";
import Exp6 from "../../images/EX6.jpg";
import Exp7 from "../../images/EX7.jpg";
import Exp8 from "../../images/EX8.jpg";
import Exp10 from "../../images/EX10.jpg";
import Exp12 from "../../images/EX12.jpg";
import Exp13 from "../../images/EX13.jpg";
import Exp14 from "../../images/EX14.jpg";
import Exp15 from "../../images/EX15.jpg";
import Exp16 from "../../images/EX16.jpg";
import Exp17 from "../../images/EX17.jpg";
import Exp18 from "../../images/EX18.jpg";

import Exp20 from "../../images/EX20.jpg";
import Exp21 from "../../images/EX21.jpg";
import Exp22 from "../../images/EX22.jpg";
import Exp23 from "../../images/EX23.jpg";
import Exp24 from "../../images/EX24.jpg";
import Exp25 from "../../images/EX25.jpg";
import Exp26 from "../../images/EX26.jpg";
import Exp27 from "../../images/EX27.jpg";
import Exp28 from "../../images/EX28.JPG";

import "./experience.scss";

const { Title } = Typography;

const ExperiencesComp = () => {
  return (
    <Row className="v-cabin">
      <Col xs={24} md={24} sm={24}>
        <Typography className="v-head">Experiences </Typography>
        <hr className="v-hr"></hr>
        <Image.PreviewGroup>
          <Row>
            <Col xs={24} md={6}>
              <Image src={Exp1}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp2}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp3}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp6}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp7}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp8}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp10}width="100%" height={320} />
            </Col>

            <Col xs={24} md={6}>
              <Image src={Exp12}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp13}width="100%" height={320} />
            </Col>

            <Col xs={24} md={6}>
              <Image src={Exp14}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp15}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp16}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp17}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp18}width="100%" height={320} />
            </Col>

            <Col xs={24} md={6}>
              <Image src={Exp20}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp21}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp22}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp21}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp22}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp23}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp24}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp25}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp26}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp27}width="100%" height={320} />
            </Col>
            <Col xs={24} md={6}>
              <Image src={Exp28}width="100%" height={320} />
            </Col>
          </Row>
        </Image.PreviewGroup>
      </Col>
    </Row>
  );
};

export default ExperiencesComp;
