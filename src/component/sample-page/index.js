import { Button, Carousel, Col, Image, Row, Typography } from "antd";
import slider1 from "../../images/Slider1.JPG";
import slider2 from "../../images/Slider2.jpg";
import slider3 from "../../images/Slider3.jpg";
import slider4 from "../../images/Slider4.jpg";
import slider5 from "../../images/Slider5.jpg";
import slider6 from "../../images/Slider6.jpg";
import seperator from "../../images/seperator.png";
import pack from "../../images/pack.jpg";
import experience from "../../images/expeirence.jpg";

const { Text } = Typography;

const SamplePage = () => {
  return (
    <Row>
      <Col xs={24} >
        <Carousel effect="fade">
          <div>
            <Image src={slider1} preview={false} width="100%" height={600} />
          </div>
          <div>
            <Image src={slider2} preview={false} width="100%" height={600} />
          </div>
          <div>
            <Image src={slider5} preview={false} width="100%" height={600} />
          </div>
          <div>
            <Image src={slider4} preview={false} width="100%" height={600} />
          </div>
          <div>
            <Image src={slider3} preview={false} width="100%" height={600} />
          </div>
          <div>
            <Image src={slider6} preview={false} width="100%" height={600} />
          </div>
        </Carousel>
      </Col>
      <Col xs={24} className="k-seperatortop">
        <Image src={seperator} preview={false} />
      </Col>
      <Col xs={24} className="k-description">
        <Text>
          Discover exquisite beauty at Kyathanamakki, the most luxurious and
          good-looking homestay in the kuderemukha. The property is dotted with
          waterfalls and mists, with bird songs cicadas in the early mornings.
          Kyathanamakki home stay is a perfect getaway as much as a luxury
          family home.
        </Text>
      </Col>
      <Col span={24} className="k-seperatorbelow">
        <Image src={seperator} preview={false} />
      </Col>

      <Col xs={24} sm={12}>
        <Image src={pack} height="500px" preview={false} />
      </Col>
      <Col xs={24} sm={12} className="k-packdesc">
        <Text className="k-title">Packages</Text>
        <hr class="k-hr"></hr>
        <Text className="k-overalldesc">
          Designed for your utmost comfort, a stay in one of our luxury Packages
          is guaranteed to bring you closer to Mother Nature’s soul than you
          have ever been. Sit in your private balcony, over-looking the majestic
          Kodava landscape. Or sink into a cloudlike bed and let the
          unadulterated sounds of nature take you to dreamland.
        </Text>
        <Button type="link" href="/bookings" size="large" className="k-explorebtn">
          <Text className="k-explore-btn">Explore Packages</Text>
        </Button>
      </Col>

      <Col xs={24} sm={12} className="k-packdesc">
        <Text className="k-title">Adventures</Text>
        <hr class="k-hr"></hr>
        <Text className="k-overalldesc">
          Designed for your utmost comfort, a stay in one of our luxury Packages
          is guaranteed to bring you closer to Mother Nature’s soul than you
          have ever been. Sit in your private balcony, over-looking the majestic
          Kodava landscape. Or sink into a cloudlike bed and let the
          unadulterated sounds of nature take you to dreamland.
        </Text>
        <Button size="large" type="link" href="adventures" className="k-explorebtn">
          <Text className="k-explore-btn">Our Adventures</Text>
        </Button>
      </Col>
      <Col xs={24} sm={12}>
        <Image src={pack} height="500px" preview={false} />
      </Col>

      <Col xs={24} sm={12}>
        <Image src={experience} width='100%' height="500px" preview={false} />
      </Col>
      <Col xs={24} sm={12} className="k-packdesc">
        <Text className="k-title">Experiences</Text>
        <hr class="k-hr"></hr>
        <Text className="k-overalldesc">
          Designed for your utmost comfort, a stay in one of our luxury Packages
          is guaranteed to bring you closer to Mother Nature’s soul than you
          have ever been. Sit in your private balcony, over-looking the majestic
          Kodava landscape. Or sink into a cloudlike bed and let the
          unadulterated sounds of nature take you to dreamland.
        </Text>
        <Button size="large" href="/experience" type="link" className="k-explorebtn">
          <Text className="k-explore-btn">Check Experiences</Text>
        </Button>
      </Col>
    </Row>
  );
};

export default SamplePage;
