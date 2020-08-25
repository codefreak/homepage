import React, { PropsWithChildren } from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import ResponsiveContainer, {
  ResponsiveRow
} from 'components/ResponsiveContainer'
import Logo from 'components/Logo'
import { Head } from 'react-static'
import { ReactComponent as FHLogo } from '../svg/fh_kiel_logo_engl.svg'

const { Header, Footer, Content } = Layout

const DefaultLayout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Layout className="layout-root">
      <Head>
        <title>Code FREAK | Code Feedback, Review & Evaluation Kit</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Online Programming Platform and Evaluation/Auto-Feedback System for Coding Assignments "
        />
      </Head>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <ResponsiveRow className="layout-header">
          <Col>
            <a href="/">
              <Logo className="header-logo" />
            </a>
          </Col>
          <Col style={{ marginLeft: 'auto' }}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="about">About</Menu.Item>
              <Menu.Item key="installation">Installation</Menu.Item>
              <Menu.Item key="docs">Docs</Menu.Item>
              <Menu.Item key="license">License</Menu.Item>
              <Menu.Item key="github" icon={<GithubOutlined />}>
                <a
                  href="https://github.com/codefreak/codefreak"
                  target="_blank"
                >
                  GitHub
                </a>
              </Menu.Item>
            </Menu>
          </Col>
        </ResponsiveRow>
      </Header>
      <Content style={{ margin: '64px 0' }}>
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </Content>
      <Footer className="layout-footer">
        <Logo className="footer-logo" />
        <ResponsiveRow>
          <Col span={8}>
            <h3>Links</h3>
            <Menu theme="dark" selectable={false}>
              <Menu.Item>
                <a
                  href="https://github.com/codefreak/codefreak"
                  target="_blank"
                >
                  GitHub Repository
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="https://docs.codefreak.org" target="_blank">
                  Documentation
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="https://hub.docker.com/r/cfreak/codefreak"
                  target="_blank"
                >
                  Docker Hub
                </a>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={16}>
            <h3>Contact</h3>
            <Row>
              <Col span={12}>
                <address>
                  <strong>Kiel University of Applied Sciences</strong>
                  <br />
                  Faculty of Computer Science and Electrical Engineering
                  <br />
                  <a href="mailto:codefreak@fh-kiel.de">codefreak@fh-kiel.de</a>
                </address>
              </Col>
              <Col span={12}>
                <a href="https://www.fh-kiel.de" target="_blank">
                  <FHLogo className="fh-logo" />
                </a>
              </Col>
            </Row>
          </Col>
        </ResponsiveRow>
        <ResponsiveContainer className="layout-footer-copyright">
          © 2019-2020 codefreak.org
        </ResponsiveContainer>
      </Footer>
    </Layout>
  )
}

export default DefaultLayout
