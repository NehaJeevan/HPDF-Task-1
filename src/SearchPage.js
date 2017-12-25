import React from 'react';
import {TabsExampleIconText} from './TabsExampleControlled.js';
import {WhoToFollow} from './WhoToFollow.js';
import {Tabs, Tab} from 'material-ui/Tabs';
import Paper from 'material-ui/Paper';
import {TrendsForYou} from './TrendsForYou.js';
import {Feed} from './feed.js';
import Divider from 'material-ui/Divider';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import Image from 'material-ui-image';
import {Buttons} from './Buttons.js';
import Avatar from 'material-ui/Avatar';
export class SearchPage extends React.Component{
render()
{
return(<div>
  <TabsExampleIconText />
  <div style={{marginTop:'-17px',backgroundColor:'#00aced',width:'100%',height:'45px'}} >
    <h5 style={{color:'white', paddingTop:'20px',textAlign:'right',paddingRight:'1150px'}}>
      <b >
      Genesis</b></h5>
  </div>
  <div style={{marginTop:'-1000',backgroundColor:'white',width:'100%',height:'48px'}} >
    <Tabs style={{ height:'18%',width:'45%',paddingLeft:'141px'
    }}tabItemContainerStyle={{backgroundColor:''}}
      inkBarStyle={{color:'blue',background: '#00aced'}}
    >
      <Tab  buttonStyle={{color:'black'}} label="Top" value="a"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab  buttonStyle={{color:'black'}} label="Latest" value="b"
        style={{textTransform: "none"}}>
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="People" value="c">
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Photos" value="d">
      </Tab><Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="Videos" value="e">
      </Tab>
      <Tab style={{textTransform: "none"}} buttonStyle={{color:'black'}} label="News" value="f">
      </Tab>
    </Tabs>
  </div>
  <Paper style={{width:300,height:60,marginLeft:141,marginTop:20,}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Search Filters</b><a style={{fontSize:'12px'}} href="#">&nbsp; Show</a></h4>
  </Paper>
  <Paper style={{width:300,height:200,marginLeft:141,marginTop:20}} zDepth={3} rounded={false} >
    <h4 style={{marginLeft:20}}> <b> <br/>Related Searches</b></h4>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>yes</b></a></div>
    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>porcupine tree</b></a>
    <div>  <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>tool</b></a></div>
    <div><a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>rush</b></a></div>
    <a style={{marginLeft:20,fontSize:'17px'}} href="#"><b>opeth</b></a>
  </Paper>
  <div style={{marginTop:'-80px',marginLeft:'-910px'}}>
    <WhoToFollow/>   
  </div>
  <div style={{marginLeft:'36px',marginTop:'620px'}}>
    <TrendsForYou />    
  </div>
  <Paper style={{marginTop:'-1410px',marginLeft:'470px',height:'1639px',width:'566px'}}>
    <h5 style={{paddingTop:10}}><b style={{paddingLeft:20,marginBottom:5}}>
      <Avatar src="https://pp.userapi.com/c638717/v638717382/17f09/dNq7AR5T4gM.jpg">

      </Avatar>&nbsp;
      Prog Snob
    </b>
    </h5>
    <h5 style={{paddingBottom:-20,paddingLeft:20,paddingTop:'-5px '}}>"My real worry was actually what to say to the audience, because Peter had always had this offbeat charisma that gave the band a strange aura. I was much more friendly and approachable ... I spent more time ... worrying about what to say between songs than I did about what I was going to do once the songs started."
—Phil Collins.
    </h5>
    <Buttons />  {/*Renders all the twitter buttons*/}
    <Divider style={{marginTop:10}}/>

    <div style={{marginLeft:20,marginTop:10}}>
      <Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/2180_-_Pittsburgh_-_Mellon_Arena_-_Genesis_-_The_Carpet_Crawlers.JPG/400px-2180_-_Pittsburgh_-_Mellon_Arena_-_Genesis_-_The_Carpet_Crawlers.JPG">
      </Avatar>
      <b >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Genesis </b> <i style={{color:'#00aced'}}class="fa fa-check"></i>
    </div>
    <h5 style={{marginLeft:5,paddingLeft:17}}>
      Collins, who'd been pulling double duty as drummer and lead singer for the band since Peter Gabriel departed the lineup in 1975, had successfully managed to juggle his own multi-platinum solo career alongside Genesis' increasingly massive worldwide profile throughout the '80s.
      <br/>
      <br/>
      <a href="#">#Genesis #PhilCollins</a>
    </h5>
    <Paper style={{height: 450,
      width: 565,
      marginLeft: 0,
      marginBottom:10,
    }}
      zDepth={3} rounded={false} >
      <Image loadingStyle={{color:'red'}} color='#00aced'  src="http://thisisbanter.com/wp-content/uploads/2017/04/PhillCollins.jpg"/>
      <Buttons />  {/*Renders all the twitter buttons*/}
      <Divider />
    </Paper>
    <Paper style={{width:565,height:100,marginLeft:0,marginTop:180,textAlign:'left'}} zDepth={3} rounded={false} >
      <div style={{marginLeft:20,paddingTop:5}}><Avatar src="http://cbswncx2.files.wordpress.com/2013/05/rolling-stones-rock-hall-45-800x1200.jpg">
      </Avatar>
        <b style={{marginLeft:5,marginBottom:10}}>Rolling Stones &nbsp;
          <i style={{color:'#00aced'}}class="fa fa-check"></i>
        </b></div>
      <h5 style={{marginLeft:5}}>Rock and Roll Hall Of Fame to have Genesis, up next. <br/><br/>
        <a href="#">#HallOfFame #Genesis #RollingStones</a>
      </h5></Paper>
    <Paper style={{height: 450,
      width: 565,
      backgroundImage:"url('')",
      marginBottom:121,
      textAlign: 'center',
    }}
      zDepth={3} rounded={false}  >
      <Image color='#00aced' src="https://s-media-cache-ak0.pinimg.com/originals/83/6e/1a/836e1ab6dcfbea90c2834492762c451a.jpg"/>
    </Paper>
    <Buttons />
  </Paper>
</div>
  );
}
}