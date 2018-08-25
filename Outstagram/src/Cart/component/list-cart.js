import React, { Component } from 'react';
import {View} from "react-native";
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';


const ListCart = ({data, navigation}) =>(
  <ListItem 
    style={{backgroundColor:"#fff"}} 
    thumbnail
  >
    <Left>
      <Thumbnail square source={{ uri: data.image }} />
    </Left>
    <Body>
      <Text>{data.title}</Text>
      <Text style={{color:"red", marginBottom:10, fontStyle: 'italic'}} note>Rp.{data.price}</Text>
      <Text note numberOfLines={1}>{data.description}</Text>
    </Body>
    <Right>
      <View>
      <Text>+</Text>
      <Text>{data.qty}</Text>
      <Text>+</Text>
      </View>
    </Right>
  </ListItem>
)

export default ListCart