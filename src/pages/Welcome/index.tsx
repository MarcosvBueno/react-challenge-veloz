import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ImageSourcePropType } from "react-native";
import {
  Container,
  ContainerImage,
  ContainerMessage,
  Title,
  Message,
  ContainerButton,
  ButtonText,
} from "./style";

const dogImage: ImageSourcePropType = require("../../../assets/welcomeDog.png");

function WelcomePage() {

  const navigate = useNavigation();

  return (
    <Container>
      <StatusBar style="dark" />
      <ContainerImage>
        <Image source={dogImage} style={{ width: 410, height: 310 }} />
      </ContainerImage>

      <ContainerMessage>
        <MaterialIcons name="pets" size={30} color="black" />
        <Title>Welcome to PetCare.</Title>
        <Message>
        Bringing a pet into your home is a life-changing{". "}
          <Text style={{ fontWeight: "bold", color: "#ff8b48" }}>
          Experience 
          </Text>{" "}
          that only spreads joy.
        </Message>

        <ContainerButton onPress={() => navigate.navigate("HomePage" as never)}>
          <ButtonText>Get Started</ButtonText>
        </ContainerButton>
      </ContainerMessage>
    </Container>
  );
}

export default WelcomePage;
