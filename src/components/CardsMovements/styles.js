import styled from "styled-components";

export const Container = styled.View`
 background-color: #${ props => props.bg };
 margin-top: 15px;
 max-height: 250px;
 margin-left: 15px;
 margin-right: 10px;
 padding: 10px;
 border-radius: 50px;
 justify-content: center;
 align-items: center;
 width: 320px;
`

export const Label = styled.Text`
 color: #fff;
 font-size: 25px;
 font-weight: bold;
`

export const Value = styled.Text`
 color: #fff;
 font-size: 30px ;
`