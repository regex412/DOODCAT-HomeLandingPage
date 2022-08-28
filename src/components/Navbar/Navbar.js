import React from "react";
import "./Navbar.css";
import { Row, Col } from "antd";
import LogoIMG from "../../assets/welcome.png";
import { MenuOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <Row className="headerBar">
        <Col lg={5}></Col>
        <Col lg={3}>
          <a href="/service">
            <img src={LogoIMG} alt="Anathalogo" className="img_anathalogo" />
          </a>
        </Col>
        <Col lg={10} className="headerBarItem">
          <a href="/service">TWITTER</a>
          <a href="/service">DISCORD</a>
          <a href="/service">TELEGRAM</a>
          <a href="/service">WHITEPAPER</a>
          <a href="/service">MEDIUM</a>
        </Col>
        <Col lg={6}></Col>
      </Row>
    </nav>
  );
};

export default Navbar;
