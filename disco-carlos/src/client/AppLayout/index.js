import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'

import './app-layout.css'

const { Header, Footer, Content } = Layout

const AppLayout = props => (
  <Layout>
    <Header>Disco carloS</Header>
    <Content className='app-content'>{props.children}</Content>
    <Footer>made with love!</Footer>
  </Layout> 
)


AppLayout.propTypes = {
  children: PropTypes.array
}

export default AppLayout
