import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import { Ionicons, MaterialIcons, MaterialCommunityIcons   } from '@expo/vector-icons';

const Container = styled.View`
    width: 100%;
    height: 92px;
`;

const Row = styled.View`
    flexDirection: row;
    background: #ffffff;
    width: 100%;
    padding: 0 11px;
    alignItems: center;   
`;

const Input = styled.TextInput`
    height: 50px;
    width: 100%;
    padding: 0 8px;
`;

const Divider = styled.View`
    width: 100%;
    height: .5px;
    background: #f0f0f0;
`;

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #f0f0f0;
`;

const Menu = styled.View`
    flex: 1;
    flexDirection: row;
    alignItems: center;
    justifyContent: center;
    height: 42px;
`;

const MenuText = styled.Text`
    paddingLeft: 11px;
    fontWeight: 500;
    fontSize: 12px;
`;

const Separator = styled.View`
    width: 1px;
    height: 26px;
    background: #f0f0f0;
`;

export default function ToolBar() {
    return (
        <Container>
            <Row>
                <Avatar source={require('../assets/users/user1.jpg')}></Avatar>
                <Input placeholder="What's on your mind?"></Input>
            </Row>
            <Divider></Divider>
            <Row>
                <Menu>
                <Ionicons name="ios-videocam" size={24} color="red" />
                <MenuText>Live</MenuText>
                </Menu>
                <Separator></Separator>
                <Menu>
                <MaterialIcons name="photo-size-select-actual" size={24} color="#4caf50" />
                <MenuText>Image</MenuText>
                </Menu>
                <Separator></Separator>
                <Menu>
                <MaterialCommunityIcons name="video-plus" size={24} color="#e141fc" />
                <MenuText>Room</MenuText>
                </Menu>
            </Row>
            <BottomDivider></BottomDivider>
        </Container>
    )
}
