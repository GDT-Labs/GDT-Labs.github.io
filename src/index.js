import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../node_modules/normalize.css/normalize.css';
import '../node_modules/bootswatch/readable/bootstrap.min.css';
import './styles/index.css';
// import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import registerServiceWorker from './registerServiceWorker';

const PrimaryLayout = () => (
  <div>
    {/*<Navigation/>*/}
    <Header/>
    <main>
      <Switch>
        <Route path="/build" exact component={Main} />
      </Switch>
    </main>
    <Footer/>
  </div>
);

render(
  <BrowserRouter>
    <PrimaryLayout />
  </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
