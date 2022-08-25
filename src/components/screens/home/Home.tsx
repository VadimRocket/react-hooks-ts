import React from 'react'
import Layout from '../../layout/Layout'
import Cookies from '@src/components/examples/Cookies'
import Debounce from '@src/components/examples/Debounce'
import DidMountEffect from '@src/components/examples/DidMountEffect'
import Toggle from '@src/components/examples/Toggle'
import FetchPost from '@src/components/examples/FetchPost'
import InputFocus from '@src/components/examples/InputFocus'
import WindowSize from '@src/components/examples/WindowSize'

const Home = () => {
  return (
    <Layout title="Home">
       <Cookies />
       <Debounce />
       <DidMountEffect />
       <Toggle />
       <FetchPost />
       <InputFocus />
       <WindowSize />
    </Layout>
  )
}

export default Home;

