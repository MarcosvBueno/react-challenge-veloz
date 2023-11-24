import styled from "styled-components/native";
import { Platform } from "react-native";


export const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 5px 5px;
  margin-top: ${Platform.OS === 'android' ? 40 : 0}px;
`;


