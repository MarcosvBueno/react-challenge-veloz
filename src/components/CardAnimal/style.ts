import styled from "styled-components/native";
import Icon from '@expo/vector-icons/FontAwesome';



export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 5px 0px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Card = styled.View`
  display: flex;
  background-color: #fff;
  width: 75%;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  padding: 0px 0px;

  elevation: 5;
`;

export const CardInformation = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-top: 10px;
  padding: 10px 0px;
`;

export const ContainerButton = styled.TouchableOpacity`
  background-color: #ff8b48;
  gap: 15px;
  flex-direction: row;
  padding: 10px 60px;
  border-radius: 15px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ContainerImageAnimal = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 200px;
  border-radius: 40px;
  background-color: #e3eadf;
`;

export const IconHeart = styled(Icon)`
    z-index: 1;
    color: #fff;
    font-size: 25px;

`;

export const IconContainer = styled.TouchableOpacity`
    z-index: 1;
    background-color: #ff8b48;
    padding: 6px;
    border-radius: 50px;
    position: absolute;
    top: 10px;
    right: 10px;

`;