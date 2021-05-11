import React from 'react'
import styled from 'styled-components/native'

// IMPORTAMOS ICONOS DE EXPO
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons';

const Container = styled.View`
    width: 100%;
    height: 58px;
    padding: 0 11px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    
`;

const Text = styled.Text`
    color: #3a86e9;
    font-size: 25px;
    font-weight: bold;
    letter-spacing: -0.3px;
`;

const Row = styled.View`
    flexDirection: row;   
`;

const Button = styled.TouchableOpacity`
    width: 42px;
    height: 42px;
    border-radius: 21px;
    background: #eeeeee;
    align-items: center;
    justify-content: center;
    margin-left: 16px;
`;
export default function AppBar() {
    return <Container>
        <Text>
            facebook
        </Text>
        <Row>
            <Button>
                <Feather name="search" size={29} color="black"></Feather>
            </Button>
            <Button>
            <FontAwesome5 name="facebook-messenger" size={24} color="black" />
            </Button>

        </Row>
      
    </Container>
}
