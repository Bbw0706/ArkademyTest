import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Rootstack from "./src/Navigator/index.js"
import { Provider } from "react-redux";
import {store, persistor} from "./src/store/store.js";
import { PersistGate } from 'redux-persist/es/integration/react'
console.log(persistor)

const App = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Rootstack />
		</PersistGate>
	</Provider>
)

export default App
