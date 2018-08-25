import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Rootstack from "./src/Navigator/index.js"
import { Provider } from "react-redux";
import store from "./src/store/store.js";

const configureStore = store();

const App = () => (
	<Provider store={configureStore}>
		<Rootstack />
	</Provider>
)

export default App
