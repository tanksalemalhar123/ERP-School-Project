import React from 'react';
import Modules from './Modules';
import {Switch,Route} from 'react-router-dom'; 

import Login from './Login';
import Register from './Register';
import Homepage from './Homepage';



const Main=( )=>(
    <Switch>
        <Route exact path="/" component={Homepage}/>
       
        <Route path="/Modules" component={Modules}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
    </Switch>
)


export default Main;