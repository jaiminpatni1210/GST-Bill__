import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMdHome, IoMdPerson } from "react-icons/io";
import Images1 from "../Images/sound wave.png";
import Images2 from "../Images/sound wave 2.png";
import Images3 from "../Images/sound wave 3.png";
import Images4 from "../Images/sound wave 4.png";
import Images6 from "../Images/sales reports1.png";
import Images7 from "../Images/waves1.png";
import Images8 from "../Images/calander logo1.png";
import Images9 from "../Images/chart.png";
import Images10 from "../Images/sales_image1.png";
import Images11 from "../Images/eraning_image1.png";
import Images12 from "../Images/Mtech Infotech Main Logo.png";
import Card from "react-bootstrap/Card";
import { TbDotsVertical } from "react-icons/tb";
import {
  FaArrowTrendUp,
  FaCamera,
  FaFacebookF,
  FaGoogle,
  FaLinkedin,
  FaLinkedinIn,
  FaRProject,
  FaSquareXTwitter,
  FaSquareYoutube,
  FaTwitter,
} from "react-icons/fa6";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MdOutlineAttachment } from "react-icons/md";
import { HiComputerDesktop } from "react-icons/hi2";
import { LiaCommentSolid } from "react-icons/lia";
import { AiFillLike } from "react-icons/ai";
import { ProgressBar } from "react-bootstrap";
import { colors } from "@mui/material";
import { TiSocialInstagram} from "react-icons/ti";
import Nav from "react-bootstrap/Nav";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { GrLocation, GrPhone } from "react-icons/gr";
import { FiMail } from "react-icons/fi";

export default function Header() {
  const percentage = 66;
  const percentage1 = 26;
  const percentage2 = 76;
  const percentage3 = 88;

  return (
    <>
      <Container fluid>
        <Row className=" d-flex align-items-center">
          <Col>
            <span className="fs-4">
              <IoMdHome />
            </span>
            DashBoard
          </Col>
          <Col className="text-end ">Welcome to Mtech Application</Col>
        </Row>
      </Container>
      {/* <-------------------Average section start-----------> */}
      <Container fluid className="mt-2">
        <Row className="g-4  ">
          <Col>
            <Card className="text-center ">
              <Card.Body className="my-4">
                <div class="div1" style={{ width: 90, height: 90 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}`}
                    styles={buildStyles({
                      textColor: "#000000",
                      pathColor: "#17a2b8",
                    })}
                  />
                </div>
                <Card.Title className="mt-3">Satisfaction Rate</Card.Title>
                <Card.Text>
                  47% Average
                  <span className="mx-2">
                    <FaArrowTrendUp />
                  </span>
                </Card.Text>
                <img src={Images1} width={"60px"} height="auto" class="mt-2" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center ">
              <Card.Body className="my-4">
                <div class="div1" style={{ width: 90, height: 90 }}>
                  <CircularProgressbar
                    value={percentage1}
                    text={`${percentage1}`}
                    styles={buildStyles({
                      textColor: "#000000",
                      pathColor: "#E49B4C",
                    })}
                  />
                </div>
                <Card.Title className="mt-3">Satisfaction Rate</Card.Title>
                <Card.Text>
                  76% Average
                  <span className="mx-2">
                    <FaArrowTrendUp />
                  </span>
                </Card.Text>
                <img src={Images2} width={"60px"} height="auto" class="mt-2" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center ">
              <Card.Body className="my-4">
                <div class="div1" style={{ width: 90, height: 90 }}>
                  <CircularProgressbar
                    value={percentage2}
                    text={`${percentage2}`}
                    styles={buildStyles({
                      textColor: "#000000",
                      pathColor: "#4CE4D9",
                    })}
                  />
                </div>
                <Card.Title className="mt-3">Satisfaction Rate</Card.Title>
                <Card.Text>
                  26% Average
                  <span className="mx-2">
                    <FaArrowTrendUp />
                  </span>
                </Card.Text>
                <img src={Images3} width={"60px"} height="auto" class="mt-2" />
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-center ">
              <Card.Body className="my-4">
                <div class="div1" style={{ width: 90, height: 90 }}>
                  <CircularProgressbar
                    value={percentage3}
                    text={`${percentage3}`}
                    styles={buildStyles({
                      textColor: "#000000",
                      pathColor: "#AFB976",
                    })}
                  />
                </div>
                <Card.Title className="mt-3">Satisfaction Rate</Card.Title>
                <Card.Text>
                  54% Average
                  <span className="mx-2">
                    <FaArrowTrendUp />
                  </span>
                </Card.Text>
                <img src={Images4} width={"60px"} height="auto" class="mt-2" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <-------------------Average section end-------------> */}
      {/* <------------------Chart Section start--------------> */}
      <Container fluid className="mt-4">
        <Row className="mx-1 ">
          <Col lg={9} className="bg-light mb-4" style={{ borderRadius: "7px" }}>
            <Row className=" my-3">
              <Col className="fs-5">Annual Report</Col>
              <Col className="text-end ">
                <span>
                  <TbDotsVertical />
                </span>
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="d-flex">
                <img src={Images6} width={"50px"} height={"50px"} />
                <div class="mx-2">
                  <p class="fs-5 ">$4,573</p>
                  <p style={{ marginTop: "-16px" }}>Sales Reports</p>
                </div>
              </Col>
              <Col className="d-flex">
                <img src={Images7} width={"50px"} height={"50px"} />
                <div class="mx-2">
                  <p class="fs-5 ">$6,688</p>
                  <p style={{ marginTop: "-16px" }}>Annual Revenue</p>
                </div>
              </Col>
              <Col className="d-flex">
                <img src={Images8} width={"50px"} height={"50px"} />
                <div class="mx-2">
                  <p className="mb-3 fs-5">$3,939</p>
                  <p style={{ marginTop: "-16px" }}>Total Profit</p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <img src={Images9} width={"1400px"} class=" img-fluid" />
              </Col>
            </Row>
          </Col>

          <Col lg={3}>
            <Row className="mx-2 w-100 mb-4">
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="py-3 fs-3">50.5 GB</Card.Title>
                      <Card.Subtitle className=" text-muted pb-3">
                        Traffic This Month
                      </Card.Subtitle>
                    </Col>
                    <Col className="text-end py-3">
                      <FaArrowTrendUp />
                    </Col>
                  </Row>
                  <ProgressBar
                    variant="info"
                    now={78}
                    style={{ height: "3px" }}
                  />
                  <Card.Text className="py-3 text-muted">Change 5 %</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className="mx-2 w-100 mb-4">
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="py-3 fs-3">1,600</Card.Title>
                      <Card.Subtitle className="mb-3 text-muted">
                        New Feedbacks
                      </Card.Subtitle>
                    </Col>
                    <Col className="text-end py-3">
                      <FaArrowTrendUp />
                    </Col>
                  </Row>
                  <ProgressBar
                    variant="danger"
                    now={50}
                    style={{ height: "3px" }}
                  />
                  <Card.Text className="py-3 text-muted">Change 15 %</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            <Row className=" mx-2 w-100 mb-4">
              <Card>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="py-3 fs-3">26.8%</Card.Title>
                      <Card.Subtitle className="mb-3 text-muted">
                        Server Load
                      </Card.Subtitle>
                    </Col>
                    <Col className="text-end py-3">
                      <FaArrowTrendUp />
                    </Col>
                  </Row>
                  <ProgressBar
                    variant="success"
                    now={49}
                    style={{ height: "3px" }}
                  />
                  <Card.Text className="py-3 text-muted">Change 17 %</Card.Text>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
      {/* <------------------Chart Section End--------------> */}
      {/* <------------------Likes and comment section Start--------> */}
      <Container fluid>
        <Row>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center ">
                <span
                  className="align-item-center fs-4"
                  style={{ color: "#FFC107" }}
                >
                  <FaCamera />
                </span>
                <Card.Title className="mt-2 mb-1 fs-4">2,365</Card.Title>
                <Card.Text>Shorts</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center ">
                <span
                  className="align-item-center  fs-4"
                  style={{ color: "#457fca" }}
                >
                  <AiFillLike />
                </span>
                <Card.Title className="mt-2 mb-1 fs-4">365</Card.Title>
                <Card.Text>Likes</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center  ">
                <span
                  className="align-item-center  fs-4"
                  style={{ color: "#ec3b57" }}
                >
                  <LiaCommentSolid />
                </span>
                <Card.Title className="mt-2 mb-1 fs-4">65</Card.Title>
                <Card.Text>Comments</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center ">
                <span
                  className="align-item-center  fs-4 "
                  style={{ color: "#28a745" }}
                >
                  <IoMdPerson />
                </span>
                <Card.Title className="mt-2 mb-1 fs-4">2,055</Card.Title>
                <Card.Text>Profile</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center   ">
                <span
                  className="align-item-center fs-4"
                  style={{ color: "#17a2b8" }}
                >
                  <HiComputerDesktop />
                </span>
                <Card.Title className="mt-2 mb-1 fs-4">3,159</Card.Title>
                <Card.Text>Website</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center   ">
                <span
                  className="align-item-center fs-4"
                  style={{ color: "#ffc107" }}
                >
                  <MdOutlineAttachment />
                </span>
                <Card.Title className="mt-2 mb-1 fs-4">2,365</Card.Title>
                <Card.Text>Attachments</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <------------------Likes and comment section End--------> */}
      {/* <-----------Sales & Earning section Start----------> */}
      <Container fluid className="mt-2">
        <Row>
          <Col lg={6} className="mb-4">
            <Card>
              <Row>
                <Col className="my-3 mx-4">
                  <h4>Sales</h4>
                </Col>
              </Row>
              <Row className="d-flex justify-content-between">
                <Col className="mx-4">
                  <h4>256</h4>
                  <p>This Week</p>
                </Col>
                <Col>
                  <h4>621</h4>
                  <p>This Month</p>
                </Col>
                <Col>
                  <h4>981</h4>
                  <p>Average</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={Images10}
                    class=" img-fluid"
                    style={{ width: "900px" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>

          <Col className="mb-4">
            <Card>
              <Row>
                <Col className="my-3 mx-4">
                  <h4>Earning</h4>
                </Col>
              </Row>
              <Row className="d-flex justify-content-between">
                <Col className="mx-4">
                  <h4>256</h4>
                  <p>This Week</p>
                </Col>
                <Col>
                  <h4>621</h4>
                  <p>This Month</p>
                </Col>
                <Col>
                  <h4>981</h4>
                  <p>Average</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <img
                    src={Images11}
                    class=" img-fluid"
                    style={{ width: "900px" }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <-----------Sales & Earning section End----------> */}
      {/* <------------------Social Media section Start--------> */}
      <Container fluid>
        <Row>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center ">
                <span
                  className="align-item-center fs-4"
                  style={{ color: "#3b5998" }}
                >
                  <FaFacebookF />
                </span>
                <Card.Text className="mt-2 mb-1">Like</Card.Text>
                <Card.Title className="fs-4">123</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center ">
                <span
                  className="align-item-center  fs-4"
                  style={{ color: "#fb3958" }}
                >
                  <TiSocialInstagram />
                </span>
                <Card.Text className="mt-2 mb-1">Followers</Card.Text>
                <Card.Title className="fs-4">231</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center  ">
                <span
                  className="align-item-center  fs-4"
                  style={{ color: "#0084b4" }}
                >
                  <FaTwitter />
                </span>
                <Card.Text className="mt-2 mb-1">Followers</Card.Text>
                <Card.Title className="fs-4">31</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center ">
                <span
                  className="align-item-center  fs-4 "
                  style={{ color: "#d34836" }}
                >
                  <FaGoogle />
                </span>
                <Card.Text className="mt-2 mb-1">Like</Card.Text>
                <Card.Title className="fs-4">254</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center   ">
                <span
                  className="align-item-center fs-4"
                  style={{ color: "#0077B5" }}
                >
                  <FaLinkedinIn />
                </span>
                <Card.Text className="mt-2 mb-1">Followers</Card.Text>
                <Card.Title className="fs-4">2510</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col className="mb-3">
            <Card>
              <Card.Body className="text-center   ">
                <span
                  className="align-item-center fs-4"
                  style={{ color: "#053eff" }}
                >
                  <FaRProject />
                </span>
                <Card.Text className="mt-2 mb-1">Project</Card.Text>
                <Card.Title className="fs-4">121</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      {/* <------------------Social Media section End--------> */}
      {/* <--------------About us start--------------------> */}
      <Container fluid className="bg-light pt-5 ">
        <Row className="mx-5" >
          <Col className="mb-5">
            <Row>
              <Col className="d-flex align-item-center ">
                <img src={Images12} style={{ width: "65px", height: "auto" }} />
                <div>
                  <h3 className="mt-3">MtechInfotech</h3>
                </div>
              </Col>
            </Row>
            <Row className="mx-1 my-2 ">
              Khatabook is India’s largest business management platform.
            </Row>
            <Row>
              <Nav
                activeKey=""
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
              >
                <Nav.Item>
                  <Nav.Link href="https://www.youtube.com/channel/UCIXSD6qoTMxqKzApPwk-B9A" className="text-dark">
                    <FaSquareYoutube  className="fs-5" />
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="https://www.facebook.com/profile.php?id=61558515593724" className="text-dark">
                  <FaFacebookSquare className="fs-5 " style={{marginLeft : "-20px"}} />

                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="https://www.instagram.com/mtechinfotech28/" className="text-dark">
                    <FaInstagramSquare className="fs-5" style={{marginLeft : "-20px"}}/>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link href="https://twitter.com/mtechinfotech48" className="text-dark">
                    <FaSquareXTwitter className="fs-5" style={{marginLeft : "-20px"}}/>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="" className="text-dark">
                    <FaLinkedin className="fs-5" style={{marginLeft : "-20px"}}/>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
          </Col>

          <Col  className="mb-4">  
          
          
            <h4>Company</h4>
            
            <p>About Us</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>Newsroom</p>
            <p>Landing Partner</p>
          </Col>
          <Col className="mb-4">
            <h4>We'd love to hear from you!</h4>
            <p>You can reach out to us at:</p>
            <div className="d-flex">
              <span>
                <GrPhone  className="fs-5"/>
              </span>
              <p className="mx-2 ">+919824391733</p>
            </div>
            <div className="d-flex">
              <span>
              <FiMail  className="fs-5"/>
              </span>
              <p className="mx-2">info@mtechinfotech.com</p>
            </div>
            <div className="d-flex">
              <span>
              <GrLocation  className="fs-5"/>
              </span>
              <p className="mx-2">
              GF-5 Four Avenue Sevasi Khanpur Road, Vadodara, Gujrat
              </p>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row className=" my-4 pb-4  text-center">
          <Col className="text-muted">
          © 2024 Mtech Infotech, All rights reserved.
          </Col>

          
          <Col>
          <Nav  >
        <Nav.Item >
          <Nav.Link href="">Terms & Conditions</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Privacy Policy</Nav.Link>
        </Nav.Item>
        </Nav>
          </Col>
        </Row>
      </Container>
      {/* <--------------About us end--------------------> */}
    </>
  );
}
