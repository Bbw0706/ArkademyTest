import React from "react";
import { View } from "react-native"
import {
	Item,
	Icon,
	Input
} from "native-base"

const HeaderTitle = () => (
	<View style={{padding : 20}}>
		<Item 
		style={{
			marginRight : 50, 
			marginLeft: 0, 
			backgroundColor:"#fff", 
			padding : 20, 
			height: 30, 
			width:319
		}}
		>
	        <Icon name="ios-search" />
	        <Input placeholder="Search Product"/>
	    </Item>
    </View>
)

export { HeaderTitle }