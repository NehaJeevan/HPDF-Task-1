import React from 'react';
import MobileTearSheet from './MobileTearSheet';
import Avatar from 'material-ui/Avatar';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import CommentIcon from 'material-ui-icons/Comment';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
export class WhoToFollow extends React.Component{
render()
{
  return (<div style={{marginLeft:'1050px',marginTop:'99px'}} >
  <List style={{height:'470px',backgroundColor:'white',width:'300px'}}>
    <h5 style={{marginLeft:'25px'}}>    <b> Who to follow </b>
      <a style={{ fontSize:'12px'}} href="#"> Refresh</a>
      <a style={{ fontSize:'12px'}} href="#">  View all </a>
    </h5>
    <ListItem
      primaryText="King Crimson " secondaryText="@CrimsonKing"
      leftAvatar={<Avatar src="https://i.ytimg.com/vi/1EVGR6rSu0c/maxresdefault.jpg" />}
    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <ListItem
      primaryText="Radiohead" secondaryText="@radioheadofficial"
      leftAvatar={<Avatar src="https://s-media-cache-ak0.pinimg.com/originals/4d/74/a1/4d74a1cd5b440db629e33bc226c8e616.png" />}
    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <ListItem
      primaryText="David Bowie" secondaryText="@DavBowie"
      leftAvatar={<Avatar style={{height:50}}src="https://i.imgur.com/28P1DHu.jpg" />}
    />
    <RaisedButton
      href=""
      target="_blank"
      style={{marginLeft:'80px'}}
      label="Follow"
      primary={true}  labelStyle={{textTransform: "none"}} buttonStyle={{borderRadius:'30px'}}
    />
    <br/><br/>
    <Divider />
    <br/>
    <a href="#"><i  style={{color:'#00aced',marginLeft:'20px'}} class="fa fa-users"></i > We can't find people you know</a>
      <br/>
      <br/>
      <Divider />
      <div style={{backgroundColor:'rgb(210, 220, 237)',height:'30px'}}></div>
    </List>
  </div>)
}
}
