import React, {Component} from 'react';
import { connect } from "react-redux"
import {  StatusBar, FlatList } from "react-native"
import { 
  Text, 
  Button, 
  Icon,
  Container,
  Content,
  Spinner,
  List
} from "native-base"

import ListCart from "./component/list-cart.js"

class Cart extends Component{
  render() {
    const {cardList, loading} = this.props.cart
    
    let ListProducts = null;
    if(loading){
      return ListProducts = <Spinner color="#ff0066"/>
    }

    if(cardList.length < 1) {
      return ListProducts = <Text>Belanja terlebih dahulu</Text>
    }

    return (
      <Container>
        <Content>
          {ListProducts}

          <List style={{marginRight:25}}>
            <FlatList
              data={cardList}
              renderItem={({item}) => <ListCart data={item.data}/>}
              keyExtractor={(item, index) => item.data._id}
            />
          </List>
    
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart,
  }
}

export default connect(mapStateToProps)(Cart)