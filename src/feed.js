import React from 'react';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Image from 'material-ui-image';
export class Feed extends React.Component{
  render()
  {
    return(
    <div>
      <List>
        <div style={{marginTop:'-800px'}}class="text-center co l-md-4 col-md-offset-4" >
          <Paper style={{marginLeft:-50,width:565,height:100}}>
            <List>
              <ListItem style={{marginLeft:'-10px'}}

                leftAvatar={
                  <Avatar src="https://avatars0.githubusercontent.com/u/20481263?s=460&v=4" />
                }
              >
              </ListItem>
            </List>
            <form >
              <div class="input-group"  style={{marginTop:'-40px'}}>
                <input  type="text" class="form-control" placeholder="What's happening?"
                  style={{marginLeft:'50px',height:'45px',width:'500px',backgroundColor:'#F8F8F8', borderRadius:'7px'}}/ >
                  <div class="input-group-btn">
                    <button class="btn btn-default" style={{height:'45px',color:'#00aced',marginLeft:'-48px',paddingTop:'-120px'}}>
                      <i class="glyphicon glyphicon-picture" ></i>
                    </button>
                  </div>
                </div>
              </form>
            </Paper>
          </div>
          <div class="text-center co l-md-4 col-md-offset-4" >
            <Paper style={{width:565,height:100,marginLeft:-50,marginTop:20,textAlign:'left'}} zDepth={3} rounded={false} >
              <b style={{marginLeft:5,marginBottom:10}}>Steven Wilson&nbsp; <i style={{color:'#00aced'}}class="fa fa-check"></i>
              </b><br/>
              <h5 style={{marginLeft:5}}>King of Progressive Rock aka Steven Wilson is back with a new album topiing charts everywhere, To The Bone.<br/><br/>
                <a href="#">#StevenWilson #ProgressiveRock</a>
              </h5></Paper>
            <Paper style={{height: 450,
              width: 565,
              marginLeft: -50,
              marginBottom:10,
            }}
              zDepth={3} rounded={false} ><Image loadingStyle={{color:'red'}} color='#00aced'  src="https://imagescdn.juno.co.uk/full/CS659124-01A-BIG.jpg"/></Paper>
            <Paper style={{width:565,height:150,marginLeft:-50,}} zDepth={3} rounded={false} />



            <Paper style={{width:565,height:70,marginTop:-45,marginLeft: -50}} zDepth={3} rounded={false} >
              <i  style={{marginLeft:-250,marginTop:20}} class="fa fa-lg fa-comments"></i>
              <i  style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-retweet"></i>
              <i  style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-heart"></i>
              <i  style={{marginLeft:40,marginTop:20,color:'none'}} class="fa fa-lg fa-envelope"></i>
              <Divider style={{marginTop:10}}/>
            </Paper>



            <Paper style={{width:565,height:100,marginLeft:-50,marginTop:-20,textAlign:'left'}} zDepth={3} rounded={false} >
              <b style={{marginLeft:5,marginBottom:10}}>Pixies &nbsp;
                <i style={{color:'#00aced'}}class="fa fa-check"></i>
              </b><br/>
              <h5 style={{marginLeft:5}}>Frontman Black Francis admits that Kim Deal is irreplacable in Pixies.<br/><br/>
                <a href="#">#Pixies #KimDeal</a>
              </h5></Paper>
            <Paper style={{height: 450,
              width: 565,
              marginLeft: -50,
              backgroundImage:"url('')",
              marginBottom:151,
              textAlign: 'center',

            }}
              zDepth={3} rounded={false} LeftAvatar={<Avatar src="images/ok-128.jpg" />} >
              <Image color='#00aced' src="https://img.wennermedia.com/featured-promo-782/rs-356-pixies.jpg"/>
            </Paper>
            <Paper style={{width:565,height:40,marginTop:-45,marginLeft: -50}} zDepth={3} rounded={false} >
              <i style={{marginLeft:-250,marginTop:20}} class="fa fa-lg fa-comments"></i>
              <i style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-retweet"></i>
              <i style={{marginLeft:40,marginTop:20}} class="fa fa-lg fa-heart"></i>
              <i style={{marginLeft:40,marginTop:20,color:'none'}} class="fa fa-lg fa-envelope"></i></Paper>
          </div>
        </List>
      </div>
      );
      }
      }