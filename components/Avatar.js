import React from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
    width: 40px;
    height: 40px;
    position: relative;
`;

const User = styled.Image`
    width: 40px;
    height: 40px;
    borderRadius: 20px;
`;

const UserActive = styled.View`
    width: 15px;
    height: 15px;
    borderRadius: 8px;
    background: #4bcb1f
    position: absolute;
    bottom: -2px;
    right: -2px;
    borderWidth: 2px;
    borderColor: #FFFFFF;
`;

export default function Avatar({source, online}) {
    return (
        <Container>
            <User source={source}></User>
            {online && <UserActive/>}
        </Container>
    )
}
