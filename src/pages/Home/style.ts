import styled from "styled-components/native";
import { Platform } from "react-native";


export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;

`;

export const ContainerHome = styled.ScrollView`
  background-color: #fff;
  padding: 5px 10px;

  padding-top: ${Platform.OS === "android" ? 40 : 10}px;
;`

