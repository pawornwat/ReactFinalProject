import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Title from "../Components/Title";
import { MainLayout, InnerLayout } from "../styles/Layout";
import profile from "../img/profile.jpg";

export default function AboutPage() {
  return (
    <>
      <MainLayout>
        <InnerLayout>
          <Title title={"About me"} span={"About me"} />
          <Row>
            <Col md={5}>
              <Image src={profile} rounded />
            </Col>
            <Col md={6}>
              <span>Pawornwat Tangwattapornchai (Fight)</span>
              <p>Age : 22</p>
              <p>Date of Birth : 31/Jan/2000</p>
              <p>Gender : Male</p>
              <p>City of Birth : Chanthaburi</p>
              <p>Country of Citizenship : Thailand</p>
              <p>Country of Residence : Thailand</p>
            </Col>
          </Row>
        </InnerLayout>
      </MainLayout>
    </>
  );
}
