import React from 'react'
import styled from 'styled-components/native'
import { ScrollView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const Container = styled.View`
    width: 100%;
    height: 192px;
    flexDirection: row;
    alignItems: center;
`   
const Card = styled.View`
    width: 106px;
    height: 170px;
    position: relative;
    marginRight: 8px;
`;

const CardStory = styled.Image`
    width: 100%;
    height: 170px;
    borderRadius: 12px;
`;

const CardAdd = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    background: #FFFFFF;
    borderRadius: 20px;
    width: 39px;
    height: 39px;
    alignItems: center;
    justifyContent: center;
    opacity: .5;
`;

const CardFooter = styled.View`
    width: 100%;
    position: absolute;
    bottom: 12px;
    left: 9px;
`;

const Text = styled.Text`
    fontSize: 13px;
    fontWeight: bold;
    color: #FFFFFF;
    textShadow: 1px 1px 1px rgba(0,0,0,0.4)
`;

const Photo = styled.Image`
    width: 38px;
    height: 38px;
    borderRadius: 20px;
    borderWidth: 3px;
    borderColor: #3a86e9;
`;

const PhotoContainer = styled.View`
    position: absolute;
    top: 8px;
    left: 8px;
    borderRadius: 20px;
    width: 38px;
    height: 38px;
    alignItems: center;
    justifyContent: center;
`;

const BottomDivider = styled.View`
    width: 100%;
    height: 9px;
    background: #f0f0f0;
`;

const StoryUserPhoto = ({source})=>{
    return(
        <PhotoContainer>
            <Photo source={source}></Photo>
        </PhotoContainer>
    )
}

export default function Story() {
    return (
        <>
        <Container>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}
            style={{paddingLeft: 11}}>
                <Card>
                    <CardStory source={require('../assets/story/story1.jpg')}/>
                    <CardAdd><AntDesign name="plus" size={24} color="#1777f2" /></CardAdd>
                    <CardFooter>
                        <Text>Add To Story</Text>
                    </CardFooter>
                </Card>
                <Card>
                    <CardStory source={require('../assets/story/story2.jpg')}/>
                    <StoryUserPhoto source={require('../assets/users/user2.jpg')}></StoryUserPhoto>
                    <CardFooter>
                        <Text>Matias Orcajo</Text>
                    </CardFooter>
                </Card>
                <Card>
                    <CardStory source={require('../assets/story/story4.jpg')}/>
                    <StoryUserPhoto source={require('../assets/users/user4.jpg')}></StoryUserPhoto>
                    <CardFooter>
                        <Text>Martha Orcajo</Text>
                    </CardFooter>
                </Card>
                <Card>
                    <CardStory source={require('../assets/story/story3.jpg')}/>
                    <StoryUserPhoto source={require('../assets/users/user3.jpg')}></StoryUserPhoto>
                    <CardFooter>
                        <Text>Random Name</Text>
                    </CardFooter>
                </Card>
            </ScrollView>
        </Container>
        <BottomDivider/>
        </>
    )
}
