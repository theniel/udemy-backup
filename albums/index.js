//Import library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// Create a component
const App = () => {
    return (
      <Header headerText={'Albums'} />
  );
};

// Render it to the device by registering at least one component
AppRegistry.registerComponent('albums', () => App);
