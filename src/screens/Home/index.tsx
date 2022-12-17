import React from 'react'
import { Layout } from '@src/layout/Layout'

import { Accordion } from '@src/components/ui'

import {
  Cookies, Debounce, DidMountEffect, Escape, FetchPost, Geolocation, InputFocus,
  LocalStorage, LoginForm, Outside, ThemeBgSwitcher, Toggle, WindowSize
} from '@src/components/examples'


const accordionData = [
  { title: "useCookie", content: <Cookies /> },
  { title: "useDebounce", content: <Debounce /> },
  { title: "useDidMountEffect", content: <DidMountEffect /> },
  { title: "useToggle", content: <Toggle /> },
  { title: "useFetch", content: <FetchPost /> },
  { title: "useFocus", content: <InputFocus /> },
  { title: "useWindowSize", content: <WindowSize /> },
  { title: "useLocalStorage", content: <LocalStorage /> },
  { title: "useOutside", content: <Outside /> },
  { title: "useEscape", content: <Escape /> },
  { title: "useTheme", content: <ThemeBgSwitcher /> },
  { title: "useInput", content: <LoginForm /> },
  { title: "useGeolocation", content: <Geolocation /> },
]
const Home: React.FC = () => {
  return (
    <Layout title="Home">
      <Accordion items={accordionData} />
    </Layout>
  )
}

export default Home;

