import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 5px 0px;
  justify-content: center;
  align-items: flex-end;
  background-color: #fff;
  align-self: center;
  gap: 20px;
  flex-direction: row;
`;

export const ContainerFilter = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  background-color: #fff;
  gap: 5px;
`;

export const FiltersIcon = styled.TouchableOpacity`
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  elevation: 5;
  shadow-color: #000;
  shadow-opacity: 0.3;
`;

export const FiltersText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #262a4c;
`;

export const ContainerFilterModal = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  gap: 20px;
`;
