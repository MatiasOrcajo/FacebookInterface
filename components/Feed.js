import React from 'react'
import styled from 'styled-components/native'
import Avatar from './Avatar'
import { View } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Container = styled.View`
    flex: 1;
`;

const Header = styled.View`
    height: 50px;
    flexDirection: row;
    alignItems: center;
    justifyContent: space-between;
    marginTop: 6px;
    padding: 0 11px;
`;

const Row = styled.View`
    alignItems: center;
    flexDirection: row;
`;

const User = styled.Text`
    fontSize: 14px;
    fontWeight: bold;
    color: #222121;
`;

const Time = styled.Text`
    fontSize: 9px;
    color: #747476;
`;

const Post = styled.Text`
    fontSize: 13px;
    color: #222121;
    lineHeight: 16px;
    padding: 0 11px;
`;

const Photo = styled.Image`
    marginTop: 9px;
    width: 100%;
    height: 300px;
`;

const Footer = styled.View`
    padding: 0 11px;
`;

const FooterCount = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    padding: 9px 0;
`;

const IconCount = styled.View`
    background: #1878f3;
    width: 20px;
    height: 20px;
    borderRadius: 10px;
    alignItems: center;
    justifyContent: center;
    marginRight: 6px;
`;

const TextCount = styled.Text`
    fontSize: 11px;
    color: #424040;
`;

const Separator = styled.View`
    width: 100%;
    height: 1px;
    background: #f9f9f9;
`;

const FooterMenu = styled.View`
    flexDirection: row;
    justifyContent: space-between;
    padding: 9px 0;
`;

const Button = styled.TouchableOpacity`
    flexDirection: row;
`;

const Icon = styled.View`
    marginRight: 6px;
`;

const Text = styled.Text`
    fontSize: 12px;
    color: #424040;
`;

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #f0f0f0;
`;

export default function Feed() {
    return (
        <>
        <Container>
            <Header>
                <Row>
                    <Avatar source={require('../assets/users/user1.jpg')}></Avatar>
                    <View>
                        <User style={{paddingLeft: 10}}>Matias Orcajo</User>
                        <Row>
                        <Time style={{paddingLeft: 10}}>9m</Time>
                        <Entypo name="dot-single" size={12} color="#747476" />
                        <Entypo name="globe" size={10} color="#747476" />
                        </Row>
                    </View>
                </Row>
                <Entypo name="dots-three-horizontal" size={15} color="#222121" />
            </Header>
            <Post>Interfaz clon de Facebook</Post>
            <Photo source={require('../assets/post/post1.jpg')}></Photo>
            <Footer>
                <FooterCount>
                    <Row>
                       <IconCount>
                       <AntDesign name="like1" size={12} color="white" />
                       </IconCount> 
                       <TextCount>88 likes</TextCount>
                    </Row>
                    <TextCount>3 comments</TextCount>
                </FooterCount>
                <Separator/>
                <FooterMenu>
                    <Button>
                        <Icon>
                        <AntDesign name="like2" size={20} color="#424040" />
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                        <MaterialCommunityIcons name="comment-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>
                    
                    <Button>
                        <Icon>
                        <MaterialCommunityIcons name="share-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>
            <BottomDivider/>
        </Container>

        <Container>
            <Header>
                <Row>
                    <Avatar source={require('../assets/users/user4.jpg')}></Avatar>
                    <View>
                        <User style={{paddingLeft: 10}}>Matias Orcajo</User>
                        <Row>
                        <Time style={{paddingLeft: 10}}>9m</Time>
                        <Entypo name="dot-single" size={12} color="#747476" />
                        <Entypo name="globe" size={10} color="#747476" />
                        </Row>
                    </View>
                </Row>
                <Entypo name="dots-three-horizontal" size={15} color="#222121" />
            </Header>
            <Post>Interfaz clon de Facebook</Post>
            <Photo source={require('../assets/post/post2.jpg')}></Photo>
            <Footer>
                <FooterCount>
                    <Row>
                       <IconCount>
                       <AntDesign name="like1" size={12} color="white" />
                       </IconCount> 
                       <TextCount>88 likes</TextCount>
                    </Row>
                    <TextCount>3 comments</TextCount>
                </FooterCount>
                <Separator/>
                <FooterMenu>
                    <Button>
                        <Icon>
                        <AntDesign name="like2" size={20} color="#424040" />
                        </Icon>
                        <Text>Like</Text>
                    </Button>

                    <Button>
                        <Icon>
                        <MaterialCommunityIcons name="comment-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Comment</Text>
                    </Button>
                    
                    <Button>
                        <Icon>
                        <MaterialCommunityIcons name="share-outline" size={20} color="#424040" />
                        </Icon>
                        <Text>Share</Text>
                    </Button>
                </FooterMenu>
            </Footer>
            <BottomDivider/>
        </Container>
        </>
    )
}
