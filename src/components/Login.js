import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import {Tabs,Tab,Card,CardTitle,CardActions,CardText,Button,CardMenu,IconButton} from 'react-mdl';
import  {Progress}  from 'reactstrap';
import BarChart from 'react-bar-chart';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';



const data = [
    {text: '1st Terminal', value: 500}, 
    {text: '2nd Terminal', value: 300} 
  ];

const margin = {top: 20, right: 20, bottom: 30, left: 40};


class Login extends Component{
    
    
    
    render(){
        return(
            
            <div className="login-main-div" style={{paddingTop:'2.1em'}}>
               <Grid style={{paddingTop:'1em'}}> 
                    <Cell className="resume-left-col" col={2} >
                        <div style={{textAlign: 'center' , paddingTop: '0.8em'}}>
                            <img src="https://static1.squarespace.com/static/5420ef1de4b0c6a70bc1f5fe/t/59c4d611197aeab7c5457be4/1506072101886/Jeroen-Van-Dalen-%28circle-profile%29.png" alt="avatar" style={{height: '80px'}} />
                            <h5 style={{color:'black',paddingBottom:'0.2em'}}>
                            Students' Name
                        </h5>
                        </div>

                       
                        <center>
                        <h4 style={{color:'black'}}>
                            Batch
                        </h4>
                        </center>
                        <center>
                        <p>His/Her Ratings</p><Rater total={5} rating={4} />
                        </center>
                        
                        
                        <hr style={{borderTop: '1px solid #707B7C',width: '90%' }}/>
                        
                        <center>
                        <p style={{padding:'1em',color:'#000'}}>
                        Welcome to Your Console
                        </p>
                       
                        </center>

                         <hr style={{borderTop: '1px solid #707B7C',width: '90%' }}/>

                        
                        <div class="container" style={{marginTop:'2em'}}>
  
                                <ul class="nav nav-pills nav-stacked" style={{width:'20%'}}>
                                    <li class="active"><a href="#">Home</a></li>
                                    <li class="dropdown">
                                    <a class="dropdown-toggle" data-toggle="dropdown" href="#" style={{color:'#0E6655'}}>Dashboard <span class="caret"></span></a>
                                    <ul class="dropdown-menu">
                                        <li><a href="#">Submenu 1-1</a></li>
                                        <li><a href="#">Submenu 1-2</a></li>
                                        <li><a href="#">Submenu 1-3</a></li>                        
                                    </ul>
                                    </li>
                                    <li><a href="#" style={{color:'#0E6655'}}>Dashboard 2</a></li>
                                    <li><a href="#" style={{color:'#0E6655'}}>Dashboard 3</a></li>
                                </ul>
                        </div>

                            <div class="container">
                                 <ul class="nav nav-pills nav-stacked" style={{width:'20%'}}>
                                <li class="active"><a href="#">Statistics</a></li>
                                </ul>
                            </div>


                        <div class="container" style={{paddingTop:'1em'}}>
                                 <ul class="nav nav-pills nav-stacked" style={{width:'20%'}}>
                                <li class="active"><a href="#">Assessment Marks</a></li>
                                </ul>
                            </div>



                         <div className="container" style={{paddingTop:'1em'}}>
                                 <ul class="nav nav-pills nav-stacked" style={{width:'20%'}}>
                                <li className="active"><a href="#">MarksCards</a></li>
                                </ul>
                            </div>

                       
             

                         <hr style={{marginTop:'2em',borderTop: '1px solid #707B7C',width: '90%' }}/>

     


                    </Cell>
                    <Cell className="resume-right-col" col={10}>
                    
                    <h2 style={{color:'black'}}>
                        Activities
                    </h2>

                     <div className="projects-grid">
                    {/*Project 1*/}
                   <Card shadow={5} style={{width: '650px',margin: 'auto', background: '#D6EAF8',padding:'0.2em'}}>
                       <CardTitle style={{color: '#fff',height: '176px', background: 'url(https://ak3.picdn.net/shutterstock/videos/4542863/thumb/1.jpg) center / cover'}}>
                           Student's Overall
                       </CardTitle>
                                <div  style={{paddingLeft:'1em',color:'black',paddingTop:'1em'}} className="text-center" >62%</div>
                                <Progress style={{marginLeft:'1em',width:'35em'}} value="62"/>
                        <CardActions border> 
                            <Button colored style={{color:'black'}}>See Details</Button>     
                        </CardActions>
                   </Card>



                    {/*Project 2*/}
                    <Card shadow={5} style={{width: '500px',margin: 'auto',height:'550px', background: '#D6EAF8'}}>
                      <CardTitle style={{color: '#fff' , height: '300px',paddingLeft:'30%'}}>
                          <h5 style={{color:'black'}}> Students Statistics </h5>
                       </CardTitle> 
                       <div style={{width: '50%',paddingLeft:'3em'}}> 
                                <BarChart 
                                width={400}
                                height={400}
                                margin={margin}
                                data={data}
                                
                                />
                         </div>
                         <CardText>
                             <center>
                                 <strong>
                            
                             Examinations
                         
                             </strong>
                             </center>
                        </CardText>
                      
                   </Card>


            </div>
                        
                   
              
                    
                    </Cell>       
                </Grid>
            </div>
        );
    }
}

export default Login;