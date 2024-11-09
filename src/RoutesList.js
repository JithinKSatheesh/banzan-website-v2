import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './bootstrap/css/bootstrap.min.css'
import './App.css'

import Home from './Components/Home';
import Games from './Components/Games';
import Labs from './Components/Labs';
import Comics from './Components/Comics';
import Bablah from './Components/Bablah';

import Snackr from "./Components/Snackr"

// import Store from './Components/Store/Store';
import Partners from './Components/Partners';
import About from './Components/About';
import Contact from './Components/Contact';
import Inmedia from './Components/InMedia';
import Careers from './Components/Careers';
import Policy from './Components/Policy';
import Error from './Components/Error';
import LeftSideMenu from './Components/LeftSideMenu';
import RightSideText from './Components/RightSideText';
import RightBottomIcon from './Components/RightBottomIcon';
import Navbar from './Components/Navbar';
import { YellowBg, WhiteBg } from './Components/DummyBg';
import { SocialIcons } from './Components/SocialIcons';
import Investors from './Components/Investors';
import Services from 'Components/Services';
import SnackRHandler from 'Components/SnackRHandler';

export default function RoutesList() {
  return (
    <BrowserRouter>
      <Navbar />
      <LeftSideMenu />
      <RightSideText />
      <RightBottomIcon />
      {/* <RightSideMenu /> */}
      <WhiteBg />
      <YellowBg />
      <Switch>
        <Route path="/snackR_handler" component={SnackRHandler} />
        <Route path="/games" component={Games} />
        <Route path="/labs" component={Labs} />
        <Route path="/comics" component={Comics} />
        <Route path="/bablah" component={Bablah} />
        <Route path="/snackr" component={Snackr} />
        {/* <Route path="/store" component={Store} /> */}
        <Route path="/partners" component={Partners} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        {/* <Route path="/investors" component={Investors} /> */}
        <Route path="/inmedia" component={Inmedia} />
        <Route path="/contact/:source" component={Contact} />
        <Route path="/careers" component={Careers} />
        {/* <Route path="/store" component={Store} /> */}
        <Route path="/content/policy.html" component={Policy} />
        <Route exact path="/" component={Home} />
        <Route path="*" component={Error} />
      </Switch>
      <SocialIcons />
    </BrowserRouter>
  );
}
