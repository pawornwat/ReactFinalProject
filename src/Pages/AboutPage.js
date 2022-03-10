import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Title from '../Components/Title'
import { MainLayout,InnerLayout } from '../styles/Layout'
import avatar from '../img/avatar.jpg'

export default function AboutPage() {
  return (
    <>
        <MainLayout>
            <InnerLayout>
            <Title title={'About me'} span={"About me"}/>
              <Row>
                <Col xs={6} md={4}>
                  <Image src={avatar} rounded />
                </Col>
              </Row>
            </InnerLayout>
        </MainLayout>
    </>
  )
}
