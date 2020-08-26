import React from 'react'
import { Root } from 'react-static'
import DefaultLayout from './layout/Default'
import Index from './pages/index'
import Head from './components/Head'

import 'antd/dist/antd.less'
import './app.less'

function App() {
  return (
    <Root>
      <Head />
      <DefaultLayout>
        {/* There is no Routing, because currently this is a simple SPA */}
        <Index />
      </DefaultLayout>
    </Root>
  )
}

export default App
