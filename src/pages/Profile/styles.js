import styled from "styled-components";

export const Container = styled.View`
 flex: 1;
`;

export const BoxUser = styled.View`
 height: 40%;
 padding: 10px;
 align-items: center;
 justify-content: center;
`;

export const ImageLogo = styled.Image`
 width: 100px;
 height: 100px;
 margin-bottom: 10px;
`;

export const TextWelcome = styled.Text`
 font-weight: bold;
 font-size: 20px;
`;

export const TextUser = styled.Text`
 font-size: 20px;
`;

export const BoxNavigation = styled.View`
 height: 60%;
 background-color: #118AB2;
 border-top-right-radius: 15px;
 border-top-left-radius: 15px;
 padding: 10px;
 align-items: center;
`;

export const BoxButtons = styled.View`
 margin-top: 25px;
 gap: 15px;
`;

export const ButtonPages = styled.TouchableOpacity`
 background-color: #E2EBF2;
 width: 320px;
 height: 60px;
 align-items: center;
 justify-content: center;
 border-radius: 10px;
 border-width: 0.5px;
 border-color: #fff;
`;

export const TextPages = styled.Text`
 font-size: 20px;
 font-weight: 500;
 `;

export const ButtonLogOut = styled.TouchableOpacity`
 background-color: #EF476F;
 width: 320px;
 height: 50px;
 align-items: center;
 justify-content: center;
 border-radius: 10px;
`;

export const TextLogOut = styled.Text`
 font-size: 20px;
 color: #fff;
 font-weight: bold;
`

