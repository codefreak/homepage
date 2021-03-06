import React from 'react'
import { RocketOutlined, GithubOutlined } from '@ant-design/icons'
import { Button, Card, Col, Menu, Row, Typography } from 'antd'
import { ReactComponent as ProgLangIcon } from '../svg/programming-languages.svg'
import { ReactComponent as DockerIcon } from '../svg/docker.svg'
import { ReactComponent as FossIcon } from '../svg/foss.svg'
import { ReactComponent as BrowserIdeIcon } from '../svg/in-browser-ide.svg'
import { ReactComponent as LmsIntegrationIcon } from '../svg/lms-integration.svg'
import { ReactComponent as ModernUiIcon } from '../svg/modern-ui.svg'
import ResponsiveEmbed from 'react-responsive-embed'

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
  <>
    <Row className="hero-unit" gutter={16}>
      <Col xs={24} lg={12} style={{ marginBottom: 16 }}>
        <a className="anchor" id="about" />
        <Title>
          Coding Education Platform
          <br />
          that supports Teachers
          <br />
          and Students
        </Title>
        <Paragraph className="lead-text">
          Code FREAK is an Online Programming Environment and automatic
          Evaluation and Feedback System made for universities and higher
          education. The modular evaluation system based on Docker helps you
          checking your students' code for functional correctness and possible
          issues.
        </Paragraph>
        <Button
          size="large"
          type="primary"
          icon={<RocketOutlined />}
          href="https://github.com/codefreak/codefreak#installation"
        >
          Try Code FREAK now
        </Button>{' '}
        <Button
          size="large"
          type="default"
          icon={<GithubOutlined />}
          href="https://github.com/codefreak/codefreak"
        >
          Visit our GitHub Repository
        </Button>
      </Col>
      <Col xs={24} lg={12}>
        <img
          src="/screenshot.png"
          alt="Code FREAK Screenshot"
          style={{ maxWidth: '100%' }}
        />
      </Col>
    </Row>
    <a className="anchor" id="features" />
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
        students' code.
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
        Code FREAK can communicate with your university's Learning Management
        System (LMS) like Canvas or Moodle over LTI 1.3 enabling deep linking
        and single sign on capabilities.
      </FeatureCol>
      <FeatureCol title="100% Free and Open Source" cover={<FossIcon />}>
        Code FREAK is licensed under the AGPL license which gives you freedom to
        customize the whole system for your own needs.
      </FeatureCol>
    </Row>
    <Title level={2}>Tutorials for Users</Title>
    <Row gutter={16}>
      <Col xs={24} md={12} style={{ marginBottom: 24 }}>
        <ResponsiveEmbed
          src="https://www.youtube-nocookie.com/embed/QhE3ft66hTY"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Col>
      <Col xs={24} md={12} style={{ marginBottom: 32 }}>
        <ResponsiveEmbed
          src="https://www.youtube-nocookie.com/embed/L0J6IZiJvYg"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </Col>
    </Row>
    <Row gutter={16}>
      <Col xs={24} md={12} style={{ marginBottom: 24 }}>
        <a className="anchor" id="install" />
        <Title level={2}>Installation</Title>
        <Paragraph>
          The recommended way to install Code FREAK is by using our distributed
          Docker image. You can find the full installation instructions for
          local testing and production deployments in our documentation.
        </Paragraph>
        <Paragraph>
          <a href="https://hub.docker.com/r/cfreak/codefreak" target="_blank">
            <img
              alt="Docker Image Version"
              src="https://img.shields.io/docker/v/cfreak/codefreak?label=Docker%20Image&logo=docker&sort=semver&style=for-the-badge"
            />
          </a>
        </Paragraph>
        <Button href="https://docs.codefreak.org/codefreak/for-admins/installation.html">
          Install Documentation
        </Button>
      </Col>
      <Col xs={24} md={12}>
        <Title level={2}>Try Out</Title>
        <Paragraph>
          We do not provide a public demo yet but, you can use the following
          Docker command to test Code FREAK locally on your machine:
        </Paragraph>
        <code>
          <pre>{`docker run -it --rm \\
  -v /var/run/docker.sock:/var/run/docker.sock \\
  -p 8080:8080 \\
  cfreak/codefreak`}</pre>
        </code>
        <Paragraph>
          The UI is accessible in your browser at{' '}
          <code>http://localhost:8080</code>.
        </Paragraph>
      </Col>
    </Row>
  </>
)
