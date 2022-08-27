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
import LoginForm from '@src/components/examples/forms/LoginForm'

const Home: React.FC= () => {

  const [accordionData, _] =  useState([
    { title: "useCookie", content: <Cookies />},
    { title: "useDebounce", content: <Debounce />},
    { title: "useDidMountEffect", content: <DidMountEffect />},
    { title: "useToggle", content: <Toggle />},
    { title: "useFetc", content: <FetchPost />},
    { title: "useFocus", content: <InputFocus />},
    { title: "useWindowSize", content: <WindowSize />},
    { title: "useLocalStorage", content: <LocalStorage />},
    { title: "useOutside", content: <Outside />},
    { title: "useEscape", content: <Escape />},
    { title: "useTheme", content: <ThemeBgSwitcher />},
    { title: "useInput", content: <LoginForm />},
  ]); 

  return (
    <Layout title="Home">
       <Accordion items={accordionData} />
    </Layout>
  )
}

export default Home;

