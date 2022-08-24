import React from 'react'
import Layout from '../../layout/Layout'
import Cookies from '@src/components/examples/Cookies'
import Debounce from '@src/components/examples/Debounce'
import DidMountEffect from '@src/components/examples/DidMountEffect'

const Home = () => {
  return (
    <Layout title="Home">
       <Cookies />
       <Debounce />
       <DidMountEffect />
    </Layout>
  )
}

export default Home