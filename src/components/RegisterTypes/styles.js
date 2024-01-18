import styled from "styled-components";

export const Container = styled.View`
 flex-direction: row;
 width: 90%;
 justify-content: space-between;
`

export const ButtonType = styled.TouchableOpacity`
 flex-direction: row;
 align-items: center;
 justify-content: center;
 background-color: ${ props => props.checked ? '#06D6A0' : '#fff' };
 width: 47%;
 height: 50px;
 padding: 8px;
 border-radius: 8px;
`

export const TextButtonType = styled.Text`
 font-size: 22px;
`