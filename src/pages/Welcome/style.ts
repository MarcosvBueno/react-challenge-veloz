import { Platform } from "react-native";
import styled from "styled-components/native";


export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding-top: ${Platform.OS === 'android' ? 40 : 0}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

export const ContainerImage = styled.View`
  background-color: #ff8b48;
  justify-content: center;
  align-items: center;
  padding: 10px 10px;
  max-width: 100%;
  align-self: center;
`;

export const ContainerMessage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px 40px;
  gap: 20px;

  background-color: #fff;
  min-width: 100%;
  border-radius: 40px;

  position: relative;
  top: -40px;
`;

export const Message = styled.Text`
  font-size: 17px;
  color: #000;
  text-align: center;
  font-weight: 500;
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #ff8b48;

  padding: 12px 80px;
  border-radius: 15px;
  align-self: center;
  justify-content: flex-end;
  margin-top: 100px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.3;
  shadow-offset: 2px 5px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

