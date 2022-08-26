import React, { useState } from 'react'
import Layout from '../../layout/Layout'
import Cookies from '@src/components/examples/Cookies'
import Debounce from '@src/components/examples/Debounce'
import DidMountEffect from '@src/components/examples/DidMountEffect'
import Toggle from '@src/components/examples/Toggle'
import FetchPost from '@src/components/examples/FetchPost'
import InputFocus from '@src/components/examples/InputFocus'
import WindowSize from '@src/components/examples/WindowSize'
import LocalStorage from '@src/components/examples/LocalStorage'
import Outside from '@src/components/examples/Outside'
import Escape from '@src/components/examples/Escape'
import ThemeBgSwitcher from '@src/components/examples/BgColorTheme/ThemeBgSwitcher'
import Accordion from '@src/components/ui/accordion/Accordion'

const Home: React.FC= () => {

  const [accordionData, _] =  useState([
    { title: "Cookies", content: <Cookies />},
    { title: "Debounce", content: <Debounce />},
    { title: "DidMountEffect", content: <DidMountEffect />},
    { title: "Toggle", content: <Toggle />},
    { title: "FetchPost", content: <FetchPost />},
    { title: "InputFocus", content: <InputFocus />},
    { title: "WindowSize", content: <WindowSize />},
    { title: "LocalStorage", content: <LocalStorage />},
    { title: "Outside", content: <Outside />},
    { title: "Escape", content: <Escape />},
    { title: "ThemeBgSwitcher", content: <ThemeBgSwitcher />},
  ]); 

  return (
    <Layout title="Home">
       <Accordion items={accordionData} />
    </Layout>
  )
}

export default Home;

