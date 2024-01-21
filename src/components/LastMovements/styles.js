import styled from "styled-components";

export const Container = styled.View`
 background-color: #fff;
 height: 70px;
 padding: 10px;
 margin-left: 10px;
 margin-right: 10px;
 margin-bottom: 10px;
 border-radius: 10px;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`

export const TextValue = styled.Text`
 font-size: 25px;
`

export const BoxIcon = styled.View`
 background-color: ${props => props.bg === 'receita' ? '#06D6A0' : '#EF476F'};
 width: 50px;
 height: 50px;
 border-radius: 50px;
 align-items: center;
 justify-content: center;
`

export const ConatainerReceives = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: center;
 gap: 5px;
`

export const ButtonDelete = styled.TouchableOpacity``