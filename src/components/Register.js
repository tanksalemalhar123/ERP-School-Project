import React,{Component} from 'react';
import { Grid, Cell,Card,CardActions,CardText,CardTitle,CardBody } from "react-mdl";
import { Button,Checkbox } from 'react-mdl';
import './Register.css'




class Register extends Component{
    render(){
        return(
                
    
            <div class="container">   
            
        <div class="card card-container">
            
            <img id="profile-img" class="profile-img-card" src="https://static1.squarespace.com/static/5420ef1de4b0c6a70bc1f5fe/t/59c4d611197aeab7c5457be4/1506072101886/Jeroen-Van-Dalen-%28circle-profile%29.png" />
            <p id="profile-name" class="profile-name-card"></p>
            <form class="form-signin">
                <span id="reauth-email" class="reauth-email"></span>
                <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                <div>
                <Checkbox style={{paddingBottom:'1em'}} label="Remember Me" />
                </div>
                <div id="remember" class="checkbox">
                     <a href="#" class="forgot-password">
                            Forgot the password?
                    </a>
                </div>
                 <div class="wrapper" style={{padding:'1em'}}>
                    <span class="group-btn">     
                    <Button style={{color:'#fff',background:'#5D6D7E'}}>Login</Button>
                    </span>
                    
                   
                </div>
            </form>
           
        </div>
    </div>
        );
    }
}

export default Register;