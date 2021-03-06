import React from 'react';
import 'react-native-gesture-handler';
import {ApolloProvider} from '@apollo/react-hooks';
import client from './apollo';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './navigation';
import AuthProvider from './context/AuthProvider';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <AuthProvider>
          <RootStack />
        </AuthProvider>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
