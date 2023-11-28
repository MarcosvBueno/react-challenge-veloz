import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f4f6f6;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  border-radius: 40px;
  padding: 15px 20px;
  border: 2px solid #f0f0f0;
  margin-bottom: 30px;
  height: 140px;
  

  elevation: 8;
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-offset: 2px 5px;
`;

export const ImagePoster = styled.Image`
  width: 135px;
  height: 155px;
  position: relative;
  top: 28px;
  right: 10px;
`;

export const ContainerButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  border-radius: 40px;
  padding: 10px 10px;
  background-color: #51b78e;
  width: 50%;
  margin-top: 15px;
  elevation: 8;
  shadow-color: #000;
  shadow-opacity: 0.3;
`;

export const TextButton = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`;

export const TextPoster = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #000;
`;