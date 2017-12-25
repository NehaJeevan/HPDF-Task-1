import React from 'react';
import {List, ListItem,ListItemSecondaryAction} from 'material-ui/List';
export class TrendsForYou extends React.Component{
render(){
return(
<List style={{backgroundColor:'white',height:'620px',width:'300px',marginLeft:'105px',marginRight: '10px', marginTop:'-610px'}}>
  <h4 style={{marginLeft:'10px'}}><b> Trends For You</b> <a style={{ fontSize:'12px'}} href="#"> &nbsp;&nbsp;Change</a></h4>
  <ListItem  style={{color:'#00aced',size:'20px'}} primaryText="#StevenWilson" secondaryText="99k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#ProgressiveRock" secondaryText="98k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#DeathMetal" secondaryText="97k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#DreamTheater" secondaryText="86k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#JohnPetrucci" secondaryText="72k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#NinaTayeb" secondaryText="63k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#Rush" secondaryText="40k tweets"/>
  <ListItem  style={{color:'#00aced'}} primaryText="#Genesis" secondaryText="21k tweets"/>
</List>
)
}
}
