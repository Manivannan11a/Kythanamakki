import { Button, Carousel, Col, Image, Row, Typography } from "antd";
import slider1 from "../../images/carousel1.jpg";
import slider2 from "../../images/carousel2.jpeg";
import seperator from "../../images/seperator.png";
import pack from "../../images/pack.jpg";

const { Text } = Typography;

const SamplePage = () => {
  return (
    <Row>
      <Col span={24}>
        <Carousel effect="fade" dotPosition="right">
          <div>
            <Image src={slider1} preview={false} width="100%" />
          </div>
          <div>
            <Image src={slider2} preview={false} width="100%" />
          </div>
        </Carousel>
      </Col>
      <Col span={24} className="k-seperatortop">
        <Image src={seperator} preview={false} />
      </Col>
      <Col span={24} className="k-description">
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

      <Col span={12}>
        <Image src={pack} height="500px" preview={false} />
      </Col>
      <Col span={12} className="k-packdesc">
        <Text className="k-title">Packages</Text>
        <hr class="k-hr"></hr>
        <Text className="k-overalldesc">
          Designed for your utmost comfort, a stay in one of our luxury Packages
          is guaranteed to bring you closer to Mother Nature’s soul than you
          have ever been. Sit in your private balcony, over-looking the majestic
          Kodava landscape. Or sink into a cloudlike bed and let the
          unadulterated sounds of nature take you to dreamland.
        </Text>
        <Button size="large" className="k-explorebtn">
          <Text className="k-explore-btn">Explore Packages</Text>
        </Button>
      </Col>

      <Col span={12} className="k-packdesc">
        <Text className="k-title">Adventures</Text>
        <hr class="k-hr"></hr>
        <Text className="k-overalldesc">
          Designed for your utmost comfort, a stay in one of our luxury Packages
          is guaranteed to bring you closer to Mother Nature’s soul than you
          have ever been. Sit in your private balcony, over-looking the majestic
          Kodava landscape. Or sink into a cloudlike bed and let the
          unadulterated sounds of nature take you to dreamland.
        </Text>
        <Button size="large" className="k-explorebtn">
          <Text className="k-explore-btn">Explore Our Adventures</Text>
        </Button>
      </Col>
      <Col span={12}>
        <Image src={pack} height="500px" preview={false} />
      </Col>

      <Col span={12}>
        <Image src={pack} height="500px" preview={false} />
      </Col>
      <Col span={12} className="k-packdesc">
        <Text className="k-title">Experiences</Text>
        <hr class="k-hr"></hr>
        <Text className="k-overalldesc">
          Designed for your utmost comfort, a stay in one of our luxury Packages
          is guaranteed to bring you closer to Mother Nature’s soul than you
          have ever been. Sit in your private balcony, over-looking the majestic
          Kodava landscape. Or sink into a cloudlike bed and let the
          unadulterated sounds of nature take you to dreamland.
        </Text>
        <Button size="large" className="k-explorebtn">
          <Text className="k-explore-btn">Check Experiences</Text>
        </Button>
      </Col>
    </Row>
  );
};

export default SamplePage;
