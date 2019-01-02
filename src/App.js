import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Modules from './components/Modules';
import Login from './components/Login';
import Register from './components/Register';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import {Layout,Navigation,Header,Drawer,Content} from 'react-mdl';




class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
        <Layout >
            <Header className="header-color" title={<Link style={{textDecoration: 'none' ,color:'white'}} to="/" >ERP Website</Link>} scroll>
                <Navigation>
             
              <Link to="/Modules" style={{color: '#fff'}}>Modules</Link>
              <Link to="/Login" style={{color: '#fff'}}>Login</Link>
              <Link to="/Register" style={{color: '#fff'}}>Register</Link>
          </Navigation>
      </Header>
      <Drawer title={<Link style={{textDecoration: 'none' ,color:'black'}} to="/" >ERP Website</Link>} scroll>
          <Navigation>
            
          <Link to="/Modules" style={{color: '#000'}}>Modules</Link>
              <Link to="/Login" style={{color: '#000'}}>Login</Link>
              <Link to="/Register" style={{color: '#000'}}>Register</Link>
          </Navigation>
      </Drawer>
      <Main />
      <Content />
  </Layout>
</div>
    );
  }
}

export default App;
