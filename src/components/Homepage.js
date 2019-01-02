import React,{Component} from 'react';
import {Grid,Cell,Button} from 'react-mdl';



class LandingPage extends Component{
    render(){
        return(
            <div style={{width: '50%', margin: 'auto',paddingTop:'0.5em'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <div className="banner-text">
                           
                         
                           <h3 style={{color:'#FAE5D3'}}>
                            <strong> 
                            ERP Management Software
                            </strong>
                        </h3>
                            <hr style={{paddingBottom: '5em'}}/>
                        <p style={{fontSize: '22px'}}>
                            <strong>
                            The ERP is the cloud based school management software or system which makes the daily work more easy for admin staffs, teachers, parents and student. 
                            </strong>
                        </p>
                    
                        <p style={{fontSize: '22px',paddingBottom:'2em'}}>
                            <strong>
                            It’s not open source but consumer can use it fully free.
                            </strong>
                        </p>
                        <button type="button" class="btn btn-outline-success" style={{height:'55px',width:'180px',fontSize:'20px',fontFamily:'ubuntu'}}>Learn More</button>
                       
                       
                        
                    </div>
                  
                   
                    
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;