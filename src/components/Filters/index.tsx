import React, { useState } from "react";
import { View } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {
  Container,
  ContainerFilter,
  FiltersIcon,
  FiltersText,
  ContainerFilterModal,
} from "./style";
import { petProps } from "../../types";

interface FiltersProps {
  applySort: (sortFunction: (prevData: petProps[]) => petProps[]) => void;
  initialActiveFilter: string;
}

function Filters({ applySort, initialActiveFilter }: FiltersProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(initialActiveFilter);

  const handlePress = (filterName: string, sortFunction: () => void) => {
    if (activeFilter === filterName) {
      setActiveFilter(null);
    } else {
      setActiveFilter(filterName);
      sortFunction();
    }
  };

  const sortById = () => {
    applySort((prevData) => [...prevData].sort((a, b) => Number(a.id) - Number(b.id)));
  };

  const sortByType = () => {
    applySort((prevData) => [...prevData].sort((a, b) => a.type.localeCompare(b.type)));
  };

  const sortByPrice = () => {
    applySort((prevData) => [...prevData].sort((a, b) => a.price - b.price));
  };

  return (
    <Container>
      <ContainerFilter>
        <View>
          <FiltersText>Filtros :</FiltersText>
        </View>
        <ContainerFilterModal>
          <FiltersIcon
            style={{ backgroundColor: activeFilter === "id" ? "#ff8b48" : "#fff" }}
            onPress={() => handlePress("id", sortById)}
          >
            <AntDesign name="bars" size={24} color="#262a4c" />
            <FiltersText>Id</FiltersText>
          </FiltersIcon>
          <FiltersIcon
            style={{ backgroundColor: activeFilter === "type" ? "#ff8b48" : "#fff" }}
            onPress={() => handlePress("type", sortByType)}
          >
            <MaterialIcons name="pets" size={24} color="#262a4c" />
            <FiltersText>Type</FiltersText>
          </FiltersIcon>
          <FiltersIcon
            style={{ backgroundColor: activeFilter === "price" ? "#ff8b48" : "#fff" }}
            onPress={() => handlePress("price", sortByPrice)}
          >
            <MaterialIcons name="attach-money" size={24} color="#262a4c" />
            <FiltersText>Price</FiltersText>
          </FiltersIcon>
        </ContainerFilterModal>
      </ContainerFilter>
    </Container>
  );
}

export default Filters;
