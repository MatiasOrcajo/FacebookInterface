import React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
    width: 100%;
    height: 58px;
    flexDirection: row;
    alignItems: center;
    marginTop: 8px;
`;

const Room = styled.TouchableOpacity`
    width: 115px;
    height: 40px;
    flexDirection: row;
    alignItems: center;
    borderRadius: 20px;
    borderWidth: 1px;
    border-color: #82b1ff;
    padding: 0 15px;
    marginRight: 12px;
`;

const Text = styled.Text`
    color: #1777f2;
    fontSize: 12px;
    paddingLeft: 6px;
`;

const User = styled.View`
    marginRight: 13px;
`;

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #f0f0f0;
`;

export default function Users() {
    return (
        <>
        <Container>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={{paddingLeft: 11}}>
                <Room>
                <MaterialCommunityIcons name="video-plus" size={24} color="#e141fc" />
                <Text>Create Room</Text>
                </Room>
                <User>
                    <Avatar source={require('../assets/users/user2.jpg')} online={true}/>
                </User>
                <User>
                    <Avatar source={require('../assets/users/user3.jpg')} online={true}/>
                </User>
                <User>
                    <Avatar source={require('../assets/users/user4.jpg')} online={false}/>
                </User>
                <User>
                    <Avatar source={require('../assets/users/user5.jpg')} online={false}/>
                </User>
                <User>
                    <Avatar source={require('../assets/users/user2.jpg')} online={false}/>
                </User>
            </ScrollView>
        </Container>
        <BottomDivider></BottomDivider>
        </>
        
    )
}

