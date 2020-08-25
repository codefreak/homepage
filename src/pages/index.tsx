import React from 'react'
import { RocketOutlined, GithubOutlined } from '@ant-design/icons'
import { Button, Card, Col, Row, Typography } from 'antd'
import { ReactComponent as ProgLangIcon } from '../svg/programming-languages.svg'
import { ReactComponent as DockerIcon } from '../svg/docker.svg'
import { ReactComponent as FossIcon } from '../svg/foss.svg'
import { ReactComponent as BrowserIdeIcon } from '../svg/in-browser-ide.svg'
import { ReactComponent as LmsIntegrationIcon } from '../svg/lms-integration.svg'
import { ReactComponent as ModernUiIcon } from '../svg/modern-ui.svg'

import './index.less'

const { Title, Paragraph } = Typography

const FeatureCol: React.FC<{
  title: string
  cover: React.ReactElement | string
}> = ({ title, children, cover }) => (
  <Col xs={24} md={12} xl={8} style={{ marginBottom: 16 }}>
    <Card
      bordered={false}
      cover={<div className="feature-cover">{cover}</div>}
      style={{ height: '100%' }}
    >
      <Card.Meta title={title} description={children} />
    </Card>
  </Col>
)

export default () => (
  <aside>
    <Row className="hero-unit">
      <Col span={10}>
        <Title>
          Coding Education Platform
          <br />
          that supports Teachers and Students
        </Title>
        <Paragraph className="lead-text">
          Code FREAK is an Online Programming Environment and automatic
          Evaluation and Feedback System made for universities and higher
          education. The modular evaluation system based on Docker helps you
          checking you student's code for functional correctness and possible
          issues.
        </Paragraph>
        <Paragraph className="lead-text">
          Code FREAK is 100% Free and Open Source!
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
      <FeatureCol title="Language Agnostic" cover={<ProgLangIcon />}>
        We support most major programming languages like Python, Java, C/C++,
        PHP or JavaScript. In fact, Code FREAK does not make any assumptions
        about the languages you use.
      </FeatureCol>
      <FeatureCol title="Modular Evaluation System" cover={<DockerIcon />}>
        The automatic evaluation system allows dynamic and static testing.
        Docker guarantees flexible and reproducible environments to check your
        students code.
      </FeatureCol>
      <FeatureCol title="In-Browser IDE" cover={<BrowserIdeIcon />}>
        Students can work on their tasks directly in the browser. They don't
        have to struggle setting up a local development environment.
      </FeatureCol>
      <FeatureCol title="Modern UI" cover={<ModernUiIcon />}>
        The UI is based on React and Ant Design which gives a snappy and rich
        user experience.
      </FeatureCol>
      <FeatureCol
        title="Integrates with your LMS"
        cover={<LmsIntegrationIcon />}
      >
        Code FREAK can communicate with your universities' Learning Management
        System (LMS) like Canvas or Moodle over LTI 1.3 enabling deep linking
        and single sign on capabilities.
      </FeatureCol>
      <FeatureCol title="100% Free and Open Source" cover={<FossIcon />}>
        Code FREAK is licensed under the AGPL license which gives you freedom to
        customize the whole system for you own needs.
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
