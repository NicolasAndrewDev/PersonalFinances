import styled from "styled-components";

export const Background = styled.SafeAreaView`
 flex: 1;
 background-color: aliceblue
`;

export const ValuesList = styled.FlatList`
 max-height: 285px;
`;

export const Area = styled.View`
 flex-direction: row;
 align-items: baseline;
 background-color: #118AB2;
 border-top-right-radius: 15px;
 border-top-left-radius: 15px;
 padding: 15px;
 gap: 6px;
`;

export const Title = styled.Text`
 font-size: 23px;
 color: #fff;
`;

export const ListLastValues = styled.FlatList`
 background-color: #118AB2;
 height: 220px;
`