import React from 'react'
import Layout from '../../layout/Layout'
import Cookies from '@src/components/examples/Cookies'
import Debounce from '@src/components/examples/Debounce'

const Home = () => {
  return (
    <Layout title="Home">
       <Cookies />
       <Debounce/>
    </Layout>
  )
}

export default Home