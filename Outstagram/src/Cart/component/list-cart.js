import React, { Component } from 'react';
import {View, Alert} from "react-native";
import { ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
import {deleteCart} from "../../store/actions/cart.js"
import { connect } from "react-redux"

class ListCart extends Component {
  render(){
    const {data, navigation} = this.props
    return(
    <View>
      <ListItem 
        style={{backgroundColor:"#fff", marginRight:20}} 
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
          <View style={{flexDirection:"row"}}>
            <Button 
              small
              danger 
              style={{backgroundColor:"#ff0066"}}
            >
                <Text>-</Text>
            </Button>

            <Text style={{marginLeft:10, marginRight:10}}>{data.qty}</Text>

            <Button 
              small 
              danger 
              style={{backgroundColor:"#ff0066"}}
            >
                <Text>+</Text>
            </Button>
          </View>
        </Right>
      </ListItem>
      <Button  
        danger 
        block
        style={{backgroundColor:"#ff0066", marginRight:20, marginLeft:20, marginBottom:20}}
        onPress = {() => Alert.alert(
          'Are you sure',
          'removing this List ?',
          [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => this.props.dispatch(deleteCart(data._id))},
          ]
        )}
      >
          <Text>Hapus</Text>
      </Button>
    </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(ListCart)