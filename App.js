import React from 'react';
import styled from 'styled-components/native'

// COMPONENTS
import AppBar from './components/AppBar'
import ToolBar from './components/ToolBar'
import Users from './components/Users'
import Story from './components/Story'
import Feed from './components/Feed'
// COMPONENTS
import {StatusBar, ScrollView} from "react-native";
const Container = styled.SafeAreaView`
  flex: 1;

`;


const App = () =>{
  return (
    <>
      {/* <> and </> are the React shortcut for Fragment component */}
      <StatusBar
        backgroundColor="#FFFFF"
        barStyle="dark-content" />
      <Container>
        <ScrollView>
          <AppBar />
          <ToolBar/>
          <Users/>
          <Story/>
          <Feed/>
        </ScrollView>
      </Container>
    </>
  )
  
}

export default App

