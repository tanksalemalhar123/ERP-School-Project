import React,{Component} from 'react';
import {Layout,Navigation,Header,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Main from './Main';

class Navbar extends Component{
    render(){
        return(
            
                <div className="demo-big-content" style={{height:'400px'}}>
                    <Layout fixedHeader>
                    <Header className="header-color" title={<span style={{ color: '#000'}}>School ERP website</span>  } scroll>
                        <Navigation>
                            <Link to="/Homepage" style={{color: '#000'}}>Homepage</Link>
                            <Link to="/Modules" style={{color: '#000'}}>Modules</Link>
                            <Link to="/Login" style={{color: '#000'}}>Login</Link>
                            <Link to="/Register" style={{color: '#000'}}>Register</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="School ERP" style={{color: '#000'}} scroll>
                        <Navigation>
                        <Link to="/Homepage" style={{color: '#000'}}>Homepage</Link>
                            <Link to="/Modules" style={{color: '#000'}}>Modules</Link>
                            <Link to="/Login" style={{color: '#000'}}>Login</Link>
                            <Link to="/Register" style={{color: '#000'}}>Register</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                    <div className="page-content" />
                    </Content>
                </Layout>
</div>
        );
    }
}


export default Navbar;