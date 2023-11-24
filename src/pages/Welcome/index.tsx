import React from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  ContainerImage,
  ContainerMessage,
  Title,
  Message,
  ContainerButton,
  ButtonText,
} from "./style";
const dogImage = require("../../../assets/welcomeDog.png");

function WelcomePage() {
  return (
    <Container>
      <StatusBar style="dark" />
      <ContainerImage>
        <Image source={dogImage} style={{ width: 410, height: 310 }} />
      </ContainerImage>

      <ContainerMessage>
        <MaterialIcons name="pets" size={30} color="black" />
        <Title>Seja bem vindo ao PetCare</Title>
        <Message>
          Trazer um animal de estimação para casa é uma mudança de vida{". "}
          <Text style={{ fontWeight: "bold", color: "#ff8b48" }}>
            experiência
          </Text>{" "}
          que só espalha alegria.
        </Message>

        <ContainerButton>
          <ButtonText>Começar</ButtonText>
        </ContainerButton>
      </ContainerMessage>
    </Container>
  );
}

export default WelcomePage;
