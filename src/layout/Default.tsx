import React, { PropsWithChildren } from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import ResponsiveContainer, {
  ResponsiveRow
} from 'components/ResponsiveContainer'
import Logo from 'components/Logo'
import { ReactComponent as FHLogo } from '../svg/fh_kiel_logo_engl.svg'

const { Header, Footer, Content } = Layout

const iconSources = [
  {
    author: 'Payungkead',
    url: 'https://www.flaticon.com/authors/payungkead'
  },
  {
    author: 'Vectors Market',
    url: 'https://www.flaticon.com/authors/vectors-market'
  },
  {
    author: 'roserodionova',
    url: 'https://www.freepik.com/roserodionova'
  }
]

const DefaultLayout: React.FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Layout className="layout-root">
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <ResponsiveRow className="layout-header">
          <Col>
            <a href="/">
              <Logo className="header-logo" />
            </a>
          </Col>
          <Col style={{ marginLeft: 'auto' }}>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="about">
                <a href="#about">About</a>
              </Menu.Item>
              <Menu.Item key="features">
                <a href="#features">Features</a>
              </Menu.Item>
              <Menu.Item key="install">
                <a href="#install">Installation</a>
              </Menu.Item>
              <Menu.Item key="docs">
                <a href="https://docs.codefreak.org" target="_blank">
                  Docs
                </a>
              </Menu.Item>
              <Menu.Item key="license">
                <a
                  href="https://github.com/codefreak/codefreak/blob/master/LICENSE"
                  target="_blank"
                >
                  License
                </a>
              </Menu.Item>
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
          <Col xs={24} sm={8} style={{ marginBottom: 24 }}>
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
          <Col xs={24} sm={16}>
            <h3>Contact</h3>
            <Row>
              <Col xs={24} lg={12}>
                <address>
                  <strong>Kiel University of Applied Sciences</strong>
                  <br />
                  Faculty of Computer Science and Electrical Engineering
                  <br />
                  <a href="mailto:codefreak@fh-kiel.de">codefreak@fh-kiel.de</a>
                </address>
              </Col>
              <Col xs={24} lg={12}>
                <a href="https://www.fh-kiel.de" target="_blank">
                  <FHLogo className="fh-logo" />
                </a>
              </Col>
            </Row>
          </Col>
        </ResponsiveRow>
        <ResponsiveContainer className="layout-footer-copyright">
          <p>© 2019-2020 codefreak.org</p>
          <p>
            Icons and images by{' '}
            {iconSources.map(({ author, url }, index) => {
              const ret = [
                <a href={url} target="_blank" rel="noopener nofollow">
                  {author}
                </a>
              ]
              if (index + 1 !== iconSources.length) {
                ret.push(<>, </>)
              }
              return ret
            })}
          </p>
        </ResponsiveContainer>
      </Footer>
    </Layout>
  )
}

export default DefaultLayout
