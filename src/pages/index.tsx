import React from 'react'
import { RocketOutlined, GithubOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Typography } from 'antd'

import './index.less'

const { Title, Paragraph } = Typography

const FeatureCol: React.FC<{ title: string }> = ({ title, children }) => (
  <Col span={8} style={{ marginBottom: 16 }}>
    <Card title={title} bordered={false} style={{ height: 180 }}>
      {children}
    </Card>
  </Col>
)

export default () => (
  <aside>
    <Row className="hero-unit">
      <Col span={10}>
        <Title>Scalable Coding Education For The 21th Century</Title>
        <Paragraph className="lead-text">
          Code FREAK is an Online Programming Environment and automatic
          Evaluation and Feedback System made for universities and higher
          education. The modular evaluation system based on Docker makes it
          super flexible and secure.
        </Paragraph>
        <Paragraph className="lead-text">
          We do not only support functional testing but also static code
          analysis to make your students write readable and robust code.
        </Paragraph>
        <Button size="large" type="primary" icon={<RocketOutlined />}>
          Try Code FREAK now
        </Button>{' '}
        <Button size="large" type="default" icon={<GithubOutlined />}>
          Visit our GitHub Repository
        </Button>
      </Col>
      <Col push={1} span={13}>
        <img
          src="/screenshot.png"
          alt="Code FREAK Screenshot"
          style={{ maxWidth: '100%' }}
        />
      </Col>
    </Row>
    <Title level={2}>Main Features</Title>
    <Row gutter={16} style={{ marginBottom: 32 }}>
      <FeatureCol title="Language Agnostic">
        We support most major programming languages like Python, Java, C/C++,
        PHP or JavaScript.
      </FeatureCol>
      <FeatureCol title="Modular Evaluation System">
        The automatic evaluation allows dynamic and static testing. Docker
        guarantees flexible and reproducible environments to check your students
        code.
      </FeatureCol>
      <FeatureCol title="In-Browser IDE">
        Students can work on their tasks directly in the browser. They don't
        have to struggle setting up a local development environment.
      </FeatureCol>
      <FeatureCol title="Modern UI">
        The UI is based on React and Ant Design which gives a snappy and rich
        user experience.
      </FeatureCol>
      <FeatureCol title="Integrates with your LMS">
        Code FREAK can communicate with your universities' Learn Management
        System (LMS) over LTI 1.3.
      </FeatureCol>
      <FeatureCol title="100% Free and Open Source">
        Code FREAK is licensed under the AGPL license which gives you freedom to
        customize Code FREAK for you own needs.
      </FeatureCol>
    </Row>
    <Row gutter={16}>
      <Col span={8}>
        <Title level={2}>Installation</Title>
        <Paragraph>bla bla bla</Paragraph>
      </Col>
      <Col span={8}>
        <Title level={2}>Documentation</Title>
        <Paragraph>bla bla bla</Paragraph>
      </Col>
      <Col span={8}>
        <Title level={2}>License</Title>
        <Paragraph>bla bla bla</Paragraph>
      </Col>
    </Row>
  </aside>
)
