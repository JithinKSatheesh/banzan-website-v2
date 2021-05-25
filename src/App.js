import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import './bootstrap/css/bootstrap.min.css'
import './App.css'

import Home from './Components/Home'
import Games from './Components/Games'
import Labs from './Components/Labs'
import Comics from './Components/Comics'
import Store from './Components/Store'
import Services from './Components/Services'
import About from './Components/About'
import Contact from './Components/Contact'
// import Test from './test2-1'

import LeftSideMenu from './Components/LeftSideMenu'
import Navbar from './Components/Navbar'
import RightSideMenu from './Components/RightSideMenu'
import { YellowBg, ZenBg } from './Components/DummyBg'
import { SocialIcons } from './Components/SocialIcons'
import Investors from './Components/Investors'
import Inmedia from './Components/InMedia'

export default function App(props) {
  

  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <LeftSideMenu />
        <RightSideMenu />
        <ZenBg/>
        <YellowBg/>
          <Switch>
            <Route path="/games" component={Games} />
            <Route path="/labs" component={Labs} />
            <Route path="/comics" component={Comics} />
            <Route path="/store" component={Store} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/investors" component={Investors} />
            <Route path="/inmedia" component={Inmedia} />
            <Route path="/contact" component={Contact} />
            <Route path="/" component={Home} />
          </Switch>
        <SocialIcons/>
      </BrowserRouter>
    </div>
  )
}


